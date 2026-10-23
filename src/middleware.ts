import { defineMiddleware } from "astro:middleware";
import { parse, serialize } from "parse5";
export const onRequest = defineMiddleware(async (context, next) => {
 const response = await next();
 if (!response.headers.get("Content-Type")?.includes("text/html")) return response;
 const english = context.url.pathname.startsWith("/en/");
 const tree: any = parse(await response.text());
 function walk(node: any) {
  if (node.childNodes) node.childNodes = node.childNodes.filter((child: any) => {
   const classes = child.attrs?.find((a: any) => a.name === "class")?.value.split(/\s+/) || [];
   return !classes.includes(english ? "copy-ko" : "copy-en");
  });
  if (english && node.tagName === "a") {
   const href = node.attrs?.find((a: any) => a.name === "href");
   if (href && /^\/(?!\/|en(?:\/|$))/.test(href.value) && !node.attrs.some((a: any) => a.name === "data-language-link")) href.value = "/en" + href.value;
  }
  node.childNodes?.forEach(walk);
 }
 walk(tree);
 const headers = new Headers(response.headers);headers.delete("Content-Length");
 if (response.status === 404) {headers.delete("Location");headers.set("X-Robots-Tag", "noindex");}
 return new Response(context.request.method === "HEAD" ? null : serialize(tree), { status: response.status, headers });
});
