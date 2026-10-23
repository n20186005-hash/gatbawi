# Palgongsan Gatbawi visitor guide

Independent Korean and English guide at https://gatbawi.com/. This is the Gwanbong stone Buddha in Palgongsan, distinct from Mokpo’s coastal rocks.

## Runtime and checks

Astro 7 server rendering uses the existing Cloudflare adapter, native `/api/weather` endpoint and `ASSETS` binding. The configured production Worker is `gatbawi`. The repository pins Node 22.13.0 and pnpm 11.24.0.

Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`, and `node --test tests/*.test.mjs`. Build uses `DEPLOY_TARGET=cloudflare`. Validate deployment packaging with `WRANGLER_SEND_METRICS=false pnpm exec wrangler deploy --config wrangler.worker.toml --dry-run`.

Korean routes: `/`, `/privacy/`, `/terms/`, `/cookies/`. English counterparts: `/en/`, `/en/privacy/`, `/en/terms/`, `/en/cookies/`. Server rendering removes the other locale’s display nodes; language links retain the corresponding topic. Privacy/error pages carry noindex; the sitemap lists indexable routes explicitly because the app renders on request. Custom errors render through Astro, without internally fetching an Assets `.html` canonical redirect.

The existing optional Analytics setting keeps its original storage key. Withdrawal disables measurement before persistence, verifies readback, and reports failed persistence without promising effects on later navigation. Google Fonts, Maps, weather and hosting resources are disclosed separately.

The native weather endpoint uses a fixed approximate location near the supplied map code, validates model data and caches successful raw forecasts for ten minutes. Fetches are bounded; errors remain unavailable. The client can recover after an initial SSR failure and hides obsolete values on a failed refresh. Forecasts do not establish on-site stair conditions, official warnings or entry permission. Existing offline support is retained, with cache cleanup limited to this guide and API requests excluded.

## Visitor sources and images

[Korea Tourism Organization’s park-section listing](https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=351&vcontsId=94435), [Seonbonsa listing](https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=94434), [2024 Korea.net route context](https://www.korea.net/NewsFocus/FoodTravel/view?articleId=247891), and [Palgongsan National Park](https://www.knps.or.kr/front/portal/visit/visitCourseMain.do?menuNo=8000739&parkId=122400). Historical route descriptions and general tourism listings do not guarantee today’s entry times, charges or trail availability. Maps facts are dated and attributed, without an independent aggregate rating.

See [VISUAL-CREDITS.md](VISUAL-CREDITS.md). The retained historical photograph is public domain; editorial motifs are clearly conceptual illustrations.
