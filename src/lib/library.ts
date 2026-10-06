import type { TKey } from "@/lib/i18n";

export type LibrarySection = "resources" | "guides" | "programming";

export type LibraryTopic = {
  slug: string;
  label: TKey;
};

export const LIBRARY: Record<LibrarySection, { title: TKey; topics: readonly LibraryTopic[] }> = {
  resources: {
    title: "nav_resources",
    topics: [
      { slug: "pdf", label: "res_pdf" },
      { slug: "ereb-dili", label: "res_arabic" },
      { slug: "android", label: "res_android" },
      { slug: "fayl-aletleri", label: "res_files" },
      { slug: "tehsil", label: "res_edu" },
      { slug: "senedler", label: "res_docs" },
    ],
  },
  guides: {
    title: "nav_guides",
    topics: [
      { slug: "pdf", label: "guide_pdf" },
      { slug: "android", label: "guide_android" },
      { slug: "ereb-dili", label: "guide_arabic" },
    ],
  },
  programming: {
    title: "nav_programming",
    topics: [
      { slug: "python", label: "prog_python" },
      { slug: "javascript", label: "prog_javascript" },
      { slug: "java", label: "prog_java" },
      { slug: "csharp", label: "prog_csharp" },
      { slug: "typescript", label: "prog_typescript" },
      { slug: "html-css", label: "prog_html" },
      { slug: "sql", label: "prog_sql" },
      { slug: "go", label: "prog_go" },
      { slug: "php", label: "prog_php" },
      { slug: "kotlin", label: "prog_kotlin" },
      { slug: "cpp", label: "prog_cpp" },
      { slug: "rust", label: "prog_rust" },
      { slug: "ubuntu", label: "prog_ubuntu" },
      { slug: "java-17", label: "prog_java17" },
      { slug: "nodejs", label: "prog_node" },
      { slug: "android-sdk", label: "prog_android_sdk" },
      { slug: "gradle", label: "prog_gradle" },
      { slug: "capacitor", label: "prog_capacitor" },
      { slug: "docker", label: "prog_docker" },
      { slug: "nginx", label: "prog_nginx" },
      { slug: "ssl", label: "prog_ssl" },
      { slug: "firewall", label: "prog_firewall" },
      { slug: "git", label: "prog_git" },
      { slug: "bash", label: "prog_bash" },
      { slug: "json", label: "prog_json" },
      { slug: "react", label: "prog_react" },
      { slug: "c", label: "prog_c" },
      { slug: "mysql", label: "prog_mysql" },
      { slug: "http", label: "prog_http" },
      { slug: "linux", label: "prog_linux" },
      { slug: "ssh", label: "prog_ssh" },
      { slug: "dns", label: "prog_dns" },
      { slug: "npm", label: "prog_npm" },
      { slug: "redis", label: "prog_redis" },
      { slug: "cron", label: "prog_cron" },
      { slug: "pip", label: "prog_pip" },
      { slug: "sqlite", label: "prog_sqlite" },
      { slug: "curl", label: "prog_curl" },
      { slug: "composer", label: "prog_composer" },
      { slug: "cargo", label: "prog_cargo" },
      { slug: "make", label: "prog_make" },
      { slug: "maven", label: "prog_maven" },
      { slug: "yaml", label: "prog_yaml" },
      { slug: "systemd", label: "prog_systemd" },
      { slug: "postgresql", label: "prog_postgresql" },
      { slug: "markdown", label: "prog_markdown" },
      { slug: "rsync", label: "prog_rsync" },
    ],
  },
};

export function findTopic(section: LibrarySection, slug: string) {
  return LIBRARY[section].topics.find((topic) => topic.slug === slug) ?? null;
}
