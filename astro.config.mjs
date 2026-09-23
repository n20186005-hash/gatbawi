import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Canonical site URL. Defaults to the production domain so canonical tags, absolute
// OG URLs, the XML sitemap, and JSON-LD url/image are always emitted. Override with SITE_URL.
const site = process.env.SITE_URL || "https://gatbawi.com";
const isWorkerBuild = process.env.DEPLOY_TARGET === "cloudflare";

export default defineConfig({
  site,
  output: isWorkerBuild ? "server" : "static",
  server: { host: true, port: 3000 },
  adapter: isWorkerBuild ? cloudflare() : undefined,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: true }
  }
});
