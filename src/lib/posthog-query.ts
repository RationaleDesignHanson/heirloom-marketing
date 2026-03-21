// posthog-query.ts
// Server-side PostHog HogQL query helper.
// Uses Personal API key (phx_...) — never the project token.

const POSTHOG_HOST = "https://us.posthog.com";
const PROJECT_ID = "351490";

export async function runHogQL(query: string): Promise<{ results: unknown[][]; columns: string[] }> {
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY;
  if (!apiKey) throw new Error("POSTHOG_PERSONAL_API_KEY not set");

  const res = await fetch(`${POSTHOG_HOST}/api/projects/${PROJECT_ID}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: { kind: "HogQLQuery", query } }),
    next: { revalidate: 300 }, // cache 5 min
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PostHog query failed: ${res.status} ${text}`);
  }

  const json = await res.json();
  return { results: json.results ?? [], columns: json.columns ?? [] };
}
