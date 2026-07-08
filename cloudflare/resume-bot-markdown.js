const MARKDOWN_SOURCE =
  "https://raw.githubusercontent.com/parth-thakre/resume/main/resume.md";

const BOT_USER_AGENT =
  /\b(gptbot|chatgpt-user|oai-searchbot|claudebot|claude-user|anthropic|perplexitybot|googlebot|bingbot|duckduckbot|applebot|ccbot|bytespider|twitterbot|facebookexternalhit|linkedinbot|slackbot|discordbot|whatsapp|telegrambot|crawler|spider|bot)\b/i;

const PASS_THROUGH_PATHS = [
  "/resume.md",
  "/llms.txt",
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico"
];

function isPageRequest(request, url) {
  if (request.method !== "GET" && request.method !== "HEAD") return false;
  if (PASS_THROUGH_PATHS.includes(url.pathname)) return false;
  if (url.pathname.startsWith("/assets/")) return false;
  if (url.pathname !== "/" && url.pathname !== "/index.html") return false;

  const accept = request.headers.get("accept") || "";
  return !accept || accept.includes("text/html") || accept.includes("*/*");
}

function botWantsMarkdown(request, url) {
  return isPageRequest(request, url) && BOT_USER_AGENT.test(request.headers.get("user-agent") || "");
}

async function markdownResponse(request) {
  const upstream = await fetch(MARKDOWN_SOURCE, {
    cf: { cacheTtl: 300, cacheEverything: true },
    headers: {
      "accept": "text/plain, text/markdown;q=0.9, */*;q=0.1",
      "user-agent": "resume-bot-markdown-worker"
    }
  });

  const headers = new Headers(upstream.headers);
  headers.set("content-type", "text/markdown; charset=utf-8");
  headers.set("cache-control", "public, max-age=300");
  headers.set("vary", "User-Agent, Accept");
  headers.set("x-resume-view", "markdown");
  headers.set("x-robots-tag", "index, follow");

  return new Response(request.method === "HEAD" ? null : await upstream.text(), {
    status: upstream.status,
    statusText: upstream.statusText,
    headers
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (botWantsMarkdown(request, url)) {
      return markdownResponse(request);
    }

    const response = await fetch(request);
    const headers = new Headers(response.headers);
    headers.append("vary", "User-Agent, Accept");
    return new Response(request.method === "HEAD" ? null : response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};
