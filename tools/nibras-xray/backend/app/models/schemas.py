from typing import List, Dict, Optional, Any, Literal
from pydantic import BaseModel, Field


class FileNode(BaseModel):
    path: str
    name: str
    type: Literal["file", "directory"]
    language: Optional[str] = None
    size_bytes: int = 0
    lines_of_code: int = 0
    children: Optional[List["FileNode"]] = None


class ParameterInfo(BaseModel):
    name: str
    type_annotation: Optional[str] = None
    default_value: Optional[str] = None


class FunctionInfo(BaseModel):
    id: str
    name: str
    qualified_name: str
    file_path: str
    language: str
    kind: Literal["function", "method", "arrow_function", "class"]
    start_line: int
    end_line: int
    parameters: List[ParameterInfo] = Field(default_factory=list)
    return_type: Optional[str] = None
    is_async: bool = False
    is_exported: bool = False
    cyclomatic_complexity: int = 1
    loc: int = 1
    calls: List[str] = Field(default_factory=list)
    called_by: List[str] = Field(default_factory=list)
    variables_read: List[str] = Field(default_factory=list)
    variables_Modified: List[str] = Field(default_factory=list)
    docstring: Optional[str] = None


class VariableOccurrence(BaseModel):
    line: int
    column: int = 0
    kind: Literal["declaration", "read", "reassignment", "mutation"]
    context_snippet: str
    certainty: Literal["confirmed_static", "inferred_heuristic"] = "confirmed_static"


class VariableInfo(BaseModel):
    id: str
    name: str
    file_path: str
    scope: str
    declaration_kind: str  # const, let, var, param, local, global, class_attr
    declared_line: int
    inferred_type: Optional[str] = None
    is_reassigned: bool = False
    is_mutated: bool = False
    certainty: Literal["confirmed_static", "inferred_heuristic"] = "confirmed_static"
    occurrences: List[VariableOccurrence] = Field(default_factory=list)
    related_functions: List[str] = Field(default_factory=list)


class ImportInfo(BaseModel):
    source_file: str
    raw_specifier: str
    resolved_target: Optional[str] = None
    imported_symbols: List[str] = Field(default_factory=list)
    is_external: bool = False
    line: int
    unused_symbols: List[str] = Field(default_factory=list)


class DiagnosticIssue(BaseModel):
    id: str
    file_path: str
    line: int
    column: int = 1
    severity: Literal["error", "warning", "info"]
    category: Literal["syntax", "logic", "maintainability", "unused"]
    confidence: Literal["confirmed", "potential"]
    rule_id: str
    message: str
    explanation: str
    suggested_fix: str
    code_snippet: str


class SecurityFinding(BaseModel):
    id: str
    file_path: str
    line: int
    severity: Literal["critical", "high", "medium", "low"]
    confidence: Literal["confirmed", "potential_risk"]
    cwe_id: str
    rule_id: str
    title: str
    description: str
    remediation: str
    code_snippet: str


class HeatmapEntry(BaseModel):
    file_path: str
    language: str
    loc: int
    function_count: int
    max_cyclomatic_complexity: int
    avg_cyclomatic_complexity: float
    fan_in: int
    fan_out: int
    duplicate_blocks: int
    issue_count: int
    security_count: int
    hotspot_score: float  # Documented 0-100 formula
    hotspot_reasons: List[str] = Field(default_factory=list)


class GraphNode(BaseModel):
    id: str
    label: str
    type: Literal["file", "external_module", "function", "class", "variable"]
    file_path: Optional[str] = None
    line: Optional[int] = None
    metrics: Dict[str, Any] = Field(default_factory=dict)


class GraphEdge(BaseModel):
    id: str
    source: str
    target: str
    relation: Literal["imports", "calls", "defines", "reads", "writes", "circular_import"]
    line: Optional[int] = None


class GraphData(BaseModel):
    nodes: List[GraphNode] = Field(default_factory=list)
    edges: List[GraphEdge] = Field(default_factory=list)
    circular_dependencies: List[List[str]] = Field(default_factory=list)
    orphan_files: List[str] = Field(default_factory=list)


class ProjectHealthSummary(BaseModel):
    total_files: int
    total_loc: int
    languages_breakdown: Dict[str, int]
    total_functions: int
    total_classes: int
    total_variables_tracked: int
    internal_dependencies: int
    external_dependencies: List[str]
    circular_dependency_count: int
    syntax_error_count: int
    static_warning_count: int
    confirmed_security_count: int
    potential_security_count: int
    avg_cyclomatic_complexity: float
    max_cyclomatic_complexity: int
    maintainability_index: float
    formula_documentation: str
    security_disclaimer: str


class ProjectAnalysisResult(BaseModel):
    project_id: str
    project_name: str
    analyzed_at: str
    file_tree: FileNode
    files_content: Dict[str, str]
    functions: List[FunctionInfo]
    variables: List[VariableInfo]
    imports: List[ImportInfo]
    dependency_graph: GraphData
    call_graph: GraphData
    diagnostics: List[DiagnosticIssue]
    security_findings: List[SecurityFinding]
    heatmap: List[HeatmapEntry]
    health: ProjectHealthSummary


class ImpactSimulationRequest(BaseModel):
    project_id: str
    target_id: str  # function ID or file path


class ImpactSimulationResponse(BaseModel):
    target_id: str
    direct_dependents: List[str]
    transitive_dependents: List[str]
    affected_files: List[str]
    risk_level: Literal["low", "moderate", "high", "critical"]
    explanation: str


class AIExplainRequest(BaseModel):
    project_id: str
    query_type: Literal["function", "architecture", "error", "dependency", "impact", "refactor"]
    target_id: Optional[str] = None
    user_question: Optional[str] = None
    consent_external_ai: bool = False
    provider: Literal["local_deterministic", "openai", "anthropic", "gemini"] = "local_deterministic"


class WorkspaceFilesRequest(BaseModel):
    project_name: str = "workspace-project"
    files: Dict[str, str]


class GitHubImportRequest(BaseModel):
    repo_url: str
    branch: str = "main"


class WorkspaceFilesRequest(BaseModel):
    project_name: str = "workspace-project"
    files: Dict[str, str]


class GitHubImportRequest(BaseModel):
    repo_url: str
    branch: str = "main"


class WorkspaceFilesRequest(BaseModel):
    project_name: str = "workspace-project"
    files: Dict[str, str]


class GitHubImportRequest(BaseModel):
    repo_url: str
    branch: str = "main"


class WorkspaceFilesRequest(BaseModel):
    project_name: str = "workspace-project"
    files: Dict[str, str]


class GitHubImportRequest(BaseModel):
    repo_url: str
    branch: str = "main"


class WorkspaceFilesRequest(BaseModel):
    project_name: str = "workspace-project"
    files: Dict[str, str]


class GitHubImportRequest(BaseModel):
    repo_url: str
    branch: str = "main"


class WorkspaceFilesRequest(BaseModel):
    project_name: str = "workspace-project"
    files: Dict[str, str]


class GitHubImportRequest(BaseModel):
    repo_url: str
    branch: str = "main"
