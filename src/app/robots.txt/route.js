export function GET(request) {
  const host = request.headers.get("host") || "";

  let body = "";

  if (host.includes("azurewebsites.net")) {
    // Block all crawlers on staging
    body = `User-agent: * Disallow: /`;
  } else {
    // Production robots.txt
    body = `User-agent: * 
Disallow: demo.skyxhub.com 
Disallow: admin.skyxhub.com 
Sitemap: https://www.skyxhub.com/sitemap.xml`;
  }

  return new Response(body, {
    headers: {
    "Content-Type": "text/plain",
    },
  });
}