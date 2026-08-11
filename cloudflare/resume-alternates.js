const ALTERNATE_LINKS = [
  '</resume.md>; rel="alternate"; type="text/markdown"',
  '</assets/Parth_Thakre_Resume.pdf>; rel="alternate"; type="application/pdf"'
].join(", ");

function isResumePage(url, response) {
  const isRoot = url.pathname === "/" || url.pathname === "/index.html";
  const contentType = response.headers.get("content-type") || "";
  return isRoot && contentType.includes("text/html");
}

export default {
  async fetch(request) {
    const response = await fetch(request);
    if (!isResumePage(new URL(request.url), response)) return response;

    const headers = new Headers(response.headers);
    headers.append("link", ALTERNATE_LINKS);

    return new Response(request.method === "HEAD" ? null : response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};
