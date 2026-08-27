import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// The only canonical site URL configuration point. Leave SITE_URL unset until a real domain is chosen.
const site = process.env.SITE_URL || undefined;
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
