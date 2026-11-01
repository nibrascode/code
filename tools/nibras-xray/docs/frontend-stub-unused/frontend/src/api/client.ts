export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";

export async function uploadProjectZip(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(`${API_BASE_URL}/projects/analyze-zip`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(err.detail || "Failed to analyze ZIP archive");
  }
  return res.json();
}

export async function simulateImpact(projectId: string, targetId: string) {
  const res = await fetch(`${API_BASE_URL}/projects/impact-simulator`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ project_id: projectId, target_id: targetId }),
  });
  if (!res.ok) throw new Error("Impact simulation failed");
  return res.json();
}

export async function askAiExplainer(
  projectId: string,
  queryType: "function" | "architecture" | "error" | "dependency" | "impact" | "refactor",
  targetId?: string
) {
  const res = await fetch(`${API_BASE_URL}/projects/ai-explain`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project_id: projectId,
      query_type: queryType,
      target_id: targetId,
      consent_external_ai: false,
      provider: "local_deterministic",
    }),
  });
  if (!res.ok) throw new Error("AI explanation request failed");
  return res.json();
}
