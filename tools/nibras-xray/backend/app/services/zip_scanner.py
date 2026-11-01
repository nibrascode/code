import io
import os
import zipfile
from pathlib import Path
from typing import Dict, Tuple, List
from app.models.schemas import FileNode

# Security Limits against ZIP Bombs & DoS
MAX_UPLOAD_BYTES = 25 * 1024 * 1024       # 25 MB max compressed upload
MAX_UNCOMPRESSED_BYTES = 80 * 1024 * 1024 # 80 MB max total extracted bytes
MAX_SINGLE_FILE_BYTES = 2 * 1024 * 1024   # 2 MB max individual source file
MAX_FILE_COUNT = 1500                     # Max files per archive
MAX_COMPRESSION_RATIO = 80.0              # Max overall compression ratio

LANGUAGE_EXTENSIONS = {
    ".ts": "TypeScript",
    ".tsx": "TypeScript (React)",
    ".js": "JavaScript",
    ".jsx": "JavaScript (React)",
    ".mjs": "JavaScript",
    ".cjs": "JavaScript",
    ".py": "Python",
    ".go": "Go",
    ".rs": "Rust",
    ".java": "Java",
    ".kt": "Kotlin",
    ".php": "PHP",
    ".cpp": "C++",
    ".dart": "Dart",
    ".json": "JSON",
    ".css": "CSS",
    ".html": "HTML",
    ".md": "Markdown",
    ".yml": "YAML",
    ".yaml": "YAML",
}

IGNORED_DIRS = {
    "node_modules", ".git", "dist", "build", "__pycache__", ".next",
    ".venv", "venv", "coverage", ".idea", ".vscode", "vendor"
}


class ZipSecurityError(Exception):
    """Raised when a ZIP archive violates safety checks (ZIP bomb, path traversal, etc.)."""
    pass


def validate_and_extract_zip(zip_bytes: bytes, project_name: str = "project") -> Tuple[FileNode, Dict[str, str], Dict[str, int]]:
    """
    Safely inspects and extracts in-memory source files from a ZIP archive.
    Enforces strict protection against:
      1. Path traversal (../ or absolute paths or drive letters)
      2. Symlink attacks (UNIX S_IFLNK mode bits)
      3. ZIP bombs (uncompressed size limit, file count limit, compression ratio check)
      4. Binary execution (never writes executable binaries to disk or runs code)
    """
    if len(zip_bytes) > MAX_UPLOAD_BYTES:
        raise ZipSecurityError(f"Upload size {len(zip_bytes)} exceeds limit of {MAX_UPLOAD_BYTES} bytes.")

    try:
        zf = zipfile.ZipFile(io.BytesIO(zip_bytes))
    except zipfile.BadZipFile as exc:
        raise ZipSecurityError(f"Invalid or corrupted ZIP archive: {exc}")

    infos = zf.infolist()
    if len(infos) > MAX_FILE_COUNT:
        raise ZipSecurityError(f"Archive contains {len(infos)} entries, exceeding limit of {MAX_FILE_COUNT}.")

    total_uncompressed = 0
    files_content: Dict[str, str] = {}
    language_loc: Dict[str, int] = {}

    for info in infos:
        raw_name = info.filename.replace("\\", "/")

        # 1. Check for Path Traversal
        norm_path = os.path.normpath(raw_name).replace("\\", "/")
        if (
            raw_name.startswith("/")
            or raw_name.startswith("\\")
            or ".." in raw_name.split("/")
            or norm_path.startswith("..")
            or ":" in raw_name
        ):
            raise ZipSecurityError(f"Unsafe path traversal detected in archive entry: {raw_name}")

        # 2. Check for symbolic links (Unix external_attr top 4 bits == 0o120000)
        is_symlink = (info.external_attr >> 16) & 0o170000 == 0o120000
        if is_symlink:
            raise ZipSecurityError(f"Symbolic links are prohibited in uploaded archives: {raw_name}")

        if info.is_dir():
            continue

        # Skip ignored directories
        parts = [p for p in norm_path.split("/") if p and p != "."]
        if any(part in IGNORED_DIRS for part in parts):
            continue

        # 3. Check ZIP bomb size and compression ratio
        total_uncompressed += info.file_size
        if total_uncompressed > MAX_UNCOMPRESSED_BYTES:
            raise ZipSecurityError(
                f"Total uncompressed size exceeds {MAX_UNCOMPRESSED_BYTES} bytes (potential ZIP bomb)."
            )

        if info.compress_size > 0:
            ratio = info.file_size / info.compress_size
            if ratio > MAX_COMPRESSION_RATIO and info.file_size > 65536:
                raise ZipSecurityError(
                    f"Suspicious compression ratio ({ratio:.1f}x) on {raw_name} (potential ZIP bomb)."
                )

        if info.file_size > MAX_SINGLE_FILE_BYTES:
            continue  # Skip oversized static assets

        ext = os.path.splitext(norm_path)[1].lower()
        if ext not in LANGUAGE_EXTENSIONS:
            continue

        # Read with streaming limit enforcement
        with zf.open(info, "r") as fp:
            chunk = fp.read(MAX_SINGLE_FILE_BYTES + 1)
            if len(chunk) > MAX_SINGLE_FILE_BYTES:
                raise ZipSecurityError(f"File {raw_name} exceeded declared header size.")

        try:
            text = chunk.decode("utf-8")
        except UnicodeDecodeError:
            text = chunk.decode("latin-1", errors="replace")

        clean_path = "/".join(parts)
        files_content[clean_path] = text
        lang = LANGUAGE_EXTENSIONS.get(ext, "Other")
        loc = sum(1 for line in text.splitlines() if line.strip())
        language_loc[lang] = language_loc.get(lang, 0) + loc

    # Strip common single top-level wrapper folder if all files share it
    if files_content:
        first_segments = {p.split("/")[0] for p in files_content if "/" in p}
        all_have_slash = all("/" in p for p in files_content)
        if all_have_slash and len(first_segments) == 1:
            prefix = next(iter(first_segments)) + "/"
            files_content = {p[len(prefix):]: content for p, content in files_content.items()}

    tree = build_file_tree(project_name, files_content)
    return tree, files_content, language_loc


def build_file_tree(root_name: str, files_content: Dict[str, str]) -> FileNode:
    root = FileNode(path="", name=root_name, type="directory", children=[])

    for path, content in sorted(files_content.items()):
        parts = path.split("/")
        curr = root
        accum = []
        for idx, part in enumerate(parts):
            accum.append(part)
            curr_path = "/".join(accum)
            is_last = idx == len(parts) - 1
            if is_last:
                ext = os.path.splitext(part)[1].lower()
                lang = LANGUAGE_EXTENSIONS.get(ext, "Unknown")
                loc = sum(1 for ln in content.splitlines() if ln.strip())
                size_b = len(content.encode("utf-8"))
                node = FileNode(
                    path=curr_path,
                    name=part,
                    type="file",
                    language=lang,
                    size_bytes=size_b,
                    lines_of_code=loc,
                )
                curr.children.append(node)
                curr.size_bytes += size_b
                curr.lines_of_code += loc
            else:
                existing = next((c for c in (curr.children or []) if c.name == part and c.type == "directory"), None)
                if not existing:
                    existing = FileNode(path=curr_path, name=part, type="directory", children=[])
                    curr.children.append(existing)
                curr = existing

    return root
