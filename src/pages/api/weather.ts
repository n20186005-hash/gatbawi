import type { APIRoute } from "astro";
import { getWeather } from "../../lib/weather";

// Server-side weather endpoint. Caching is handled inside getWeather() via the Cloudflare
// Cache API; this route also sets an edge cache-control header as a secondary layer.
export const GET: APIRoute = async () => {
  try {
    const data = await getWeather();
    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=600, s-maxage=600",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "weather_unavailable" }), {
      status: 502,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }
};
