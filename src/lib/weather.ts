// Weather helper for Gatbawi (Palgongsan, Daegu). Server-side fetch + edge caching; no API key required.
// This module is import-safe on both the server and the client (no top-level side effects).

export const GATBAWI = { lat: 35.9814948, lon: 128.7367522 };

export type Lang = "ko" | "en";

interface WmoEntry {
  ko: string;
  en: string;
  icon: string;
}

// WMO weather interpretation codes -> local labels + a simple glyph.
export const WMO: Record<number, WmoEntry> = {
  0: { ko: "맑음", en: "Clear sky", icon: "☀" },
  1: { ko: "대체로 맑음", en: "Mainly clear", icon: "🌤" },
  2: { ko: "부분적 구름", en: "Partly cloudy", icon: "⛅" },
  3: { ko: "흐림", en: "Overcast", icon: "☁" },
  45: { ko: "안개", en: "Fog", icon: "🌫" },
  48: { ko: "짙은 안개", en: "Rime fog", icon: "🌫" },
  51: { ko: "약한 이슬비", en: "Light drizzle", icon: "🌦" },
  53: { ko: "이슬비", en: "Drizzle", icon: "🌦" },
  55: { ko: "강한 이슬비", en: "Dense drizzle", icon: "🌧" },
  56: { ko: "어는 이슬비", en: "Freezing drizzle", icon: "🌧" },
  57: { ko: "강한 어는 이슬비", en: "Freezing drizzle", icon: "🌧" },
  61: { ko: "약한 비", en: "Slight rain", icon: "🌦" },
  63: { ko: "비", en: "Rain", icon: "🌧" },
  65: { ko: "강한 비", en: "Heavy rain", icon: "🌧" },
  66: { ko: "어는 비", en: "Freezing rain", icon: "🌧" },
  67: { ko: "강한 어는 비", en: "Freezing rain", icon: "🌧" },
  71: { ko: "약한 눈", en: "Slight snow", icon: "🌨" },
  73: { ko: "눈", en: "Snow", icon: "🌨" },
  75: { ko: "강한 눈", en: "Heavy snow", icon: "❄" },
  77: { ko: "싸락눈", en: "Snow grains", icon: "🌨" },
  80: { ko: "소나기", en: "Rain showers", icon: "🌦" },
  81: { ko: "소나기", en: "Rain showers", icon: "🌧" },
  82: { ko: "강한 소나기", en: "Violent showers", icon: "⛈" },
  85: { ko: "눈 소나기", en: "Snow showers", icon: "🌨" },
  86: { ko: "강한 눈 소나기", en: "Heavy snow showers", icon: "❄" },
  95: { ko: "뇌우", en: "Thunderstorm", icon: "⛈" },
  96: { ko: "우박 동반 뇌우", en: "Thunderstorm w/ hail", icon: "⛈" },
  99: { ko: "강한 우박 뇌우", en: "Severe thunderstorm", icon: "⛈" },
};

export function wmo(code: number, lang: Lang): WmoEntry {
  return WMO[code] ?? { ko: "알 수 없음", en: "Unknown", icon: "🌡" };
}

/** Open-Meteo request URL (current + 7-day). No key required. */
export function weatherUrl(lat = GATBAWI.lat, lon = GATBAWI.lon): string {
  const p = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m",
    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,sunrise,sunset,uv_index_max",
    timezone: "Asia/Seoul",
    forecast_days: "7",
    wind_speed_unit: "ms",
  });
  return `https://api.open-meteo.com/v1/forecast?${p.toString()}`;
}

/** m/s -> Beaufort scale (0-12). */
export function msToBeaufort(ms: number): number {
  const t = [0.3, 1.6, 3.4, 5.5, 8.0, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7];
  let b = 0;
  while (b < t.length && ms >= t[b]) b++;
  return b;
}

export interface AdviceGroup {
  ko: string;
  en: string;
}

export interface WeatherAdvice {
  risk: AdviceGroup[]; // red top banner; empty when no special risk
  outfit: AdviceGroup[]; // 出行穿搭 / travel outfit
  plan: AdviceGroup[]; // 游玩安排 / activity plan (mountain & outdoor)
  items: AdviceGroup[]; // 随身物品 / what to bring
}

const RAIN_CODES = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82]);
const HEAVY_RAIN = new Set([65, 66, 67, 82]);
const SNOW_CODES = new Set([71, 73, 75, 77, 85, 86]);
const THUNDER = new Set([95, 96, 99]);
const FOG_CODES = new Set([45, 48]);
const CLEAR = new Set([0, 1]);

/** Derive visitor-advice from forecast values. Grouped, mountain-aware, fully neutral — no source/license wording. */
export function buildAdvice(d: any): WeatherAdvice {
  const cur = d?.current ?? {};
  const daily = d?.daily ?? {};
  const code: number = cur.weather_code ?? 0;
  const pop: number = (daily.precipitation_probability_max && daily.precipitation_probability_max[0]) ?? 0;
  const temp: number = cur.temperature_2m ?? 15;
  const app: number = cur.apparent_temperature ?? temp;
  const windMs: number = cur.wind_speed_10m ?? 0;
  const windBft: number = msToBeaufort(windMs);
  const uv: number = (daily.uv_index_max && daily.uv_index_max[0]) ?? 0;
  const dayMax: number = (daily.temperature_2m_max && daily.temperature_2m_max[0]) ?? temp;
  const dayMin: number = (daily.temperature_2m_min && daily.temperature_2m_min[0]) ?? temp;
  const dayWindMs: number = (daily.wind_speed_10m_max && daily.wind_speed_10m_max[0]) ?? windMs;
  const dayBft: number = msToBeaufort(dayWindMs);
  const diff: number = dayMax - dayMin;
  const raining = RAIN_CODES.has(code);
  const windy = windBft >= 5 || dayBft >= 5;

  const risk: AdviceGroup[] = [];
  const outfit: AdviceGroup[] = [];
  const plan: AdviceGroup[] = [];
  const items: AdviceGroup[] = [];

  // ---- Risk (red top, only when conditions genuinely warrant) ----
  if (THUNDER.has(code)) {
    risk.push({ ko: "뇌우 위험 — 산행·계곡 물놀이를 멈추고, 나무 아래 대피를 피해 즉시 안전한 곳으로 이동하세요.", en: "Thunderstorm risk — stop hiking and stream play, avoid sheltering under trees, and move to safety now." });
  }
  if (windBft >= 7 || dayBft >= 7) {
    risk.push({ ko: "강풍 — 정상 능선과 낙석 위험 구간을 피하고, 조망대에서 거리를 두세요.", en: "Strong wind — avoid exposed ridges and rockfall zones; keep distance at viewpoints." });
  }
  if (HEAVY_RAIN.has(code) || (pop >= 80 && raining)) {
    risk.push({ ko: "호우 — 계곡 범람과 산사태 위험이 큽니다. 등산을 미루세요.", en: "Heavy rain — flood and landslide risk in valleys; postpone the hike." });
  }
  if (dayMax >= 36 || temp >= 36) {
    risk.push({ ko: "폭염 — 정오 산행은 위험합니다. 그늘에서 자주 쉬고 수분을 섭취하세요.", en: "Extreme heat — avoid midday hiking; rest in shade and drink often." });
  }

  // ---- Outfit (出行穿搭) ----
  if (dayMax >= 32) {
    outfit.push({ ko: "기온이 높으니 통기성 있는 가벼운 옷이 좋습니다.", en: "Light, breathable clothing for the heat." });
  } else if (dayMax <= 10) {
    outfit.push({ ko: "기온이 낮으니 두꺼운 외투와 목도리를 챙기세요.", en: "Bring a thick coat and scarf; it is cold." });
  }
  if (diff > 8) {
    outfit.push({ ko: `낮밤 기온차가 ${Math.round(diff)}℃ 나니 겉옷을 입었다 벗기 쉽게 준비하세요.`, en: `Day-night swing of ${Math.round(diff)}℃ — bring a layer you can add or remove.` });
  }
  if (raining || pop >= 60) {
    outfit.push({ ko: "비 예보가 있으니 방수 겉옷이 좋습니다.", en: "Rain is expected — a waterproof outer layer is best." });
  }
  if (windy) {
    outfit.push({ ko: "바람이 불어 모자가 날아갈 수 있으니 털모자보다 고정된 모자가 낫습니다.", en: "Wind can blow hats away; wear a snug, secured hat." });
  }
  if (SNOW_CODES.has(code)) {
    outfit.push({ ko: "눈·빙결 구간이 있으니 미끄럼 방지 신발과 방한 장갑을 챙기세요.", en: "Snow or ice possible — grippy shoes and cold-weather gloves." });
  }
  if (outfit.length === 0) {
    outfit.push({ ko: "산은 기온 변화가 잦으니 겉옷 하나 준비하세요.", en: "Hill weather shifts often — pack one extra layer." });
  }

  // ---- Plan (游玩安排, mountain / outdoor) ----
  if (CLEAR.has(code)) {
    plan.push({ ko: "날씨가 좋아 조망과 사진 걷기에 알맞습니다. 해 뜰 무렵 빛을 노려보세요.", en: "Clear skies — great for views and photos; catch the early light." });
  } else if (code === 2 || code === 3) {
    plan.push({ ko: "빛이 부드러워 오래 걸어도 좋고 사진 찍기에 알맞습니다.", en: "Soft light — good for long walks and photos." });
  }
  if (dayMax >= 32) {
    plan.push({ ko: "정오 열기를 피해 이른 아침이나 늦은 오후에 오르세요.", en: "Avoid midday heat; climb at dawn or late afternoon." });
  } else if (dayMax <= 10) {
    plan.push({ ko: "동틀 무렵 능선 체감 한파 — 해 지기 전에 내려오세요.", en: "Frigid ridge at dawn; descend before dark." });
  }
  if (raining || pop >= 60) {
    plan.push({ ko: "야외 산행은 뒤로 미루고, 실내 쉼터와 전시 안내를 먼저 이용하세요.", en: "Postpone outdoor hiking; use indoor rest and info spaces first." });
  }
  if (HEAVY_RAIN.has(code)) {
    plan.push({ ko: "유람선·케이블카 등은 운행이 멈출 수 있습니다.", en: "Boats or cable cars may be suspended." });
  }
  if (THUNDER.has(code)) {
    plan.push({ ko: "산행과 계곡 물놀이를 멈추고 안전한 곳으로 피하세요.", en: "Stop hiking and stream play; shelter safely." });
  }
  if (windy) {
    plan.push({ ko: "정상 개방 구간과 난간 없는 능선은 위험하니 발밑을 보며 이동하세요.", en: "Open peaks and unrailed ridges are hazardous — watch your step." });
  }
  if (FOG_CODES.has(code)) {
    plan.push({ ko: "시야가 닿지 않아 조망은 어렵습니다. 천천히, 발밑을 보며 이동하세요.", en: "Poor visibility — no views; move slowly and watch your step." });
  }
  if (plan.length === 0) {
    plan.push({ ko: "무난한 날씨 — 편안한 걷기와 사진에 좋습니다.", en: "Calm weather — good for an easy walk and photos." });
  }

  // ---- Items (随身物品, only what the day calls for) ----
  if (raining || pop >= 60) {
    if (windy) items.push({ ko: "비옷 (장대는 바람에 불리므로 비추천)", en: "Rain shell (long umbrella not advised in wind)" });
    else items.push({ ko: "우산 또는 비옷", en: "Umbrella or rain shell" });
  }
  if (uv >= 5) items.push({ ko: "선크림·선글라스·모자", en: "Sunscreen, sunglasses, hat" });
  if (dayMax >= 32 || app >= 32) items.push({ ko: "충분한 물", en: "Plenty of water" });
  if (dayMax <= 10 || app <= 5) items.push({ ko: "보온 외투·장갑", en: "Warm coat, gloves" });
  if (diff > 8 && dayMax > 10) items.push({ ko: "겉옷", en: "A layer" });
  if (FOG_CODES.has(code)) items.push({ ko: "마스크", en: "A mask" });
  items.push({ ko: "미끄럼 방지 신발", en: "Grippy footwear" });
  items.push({ ko: "충전된 휴대전화", en: "Charged phone" });
  items.push({ ko: "되가져갈 쓰레기봉투", en: "Waste bag" });

  return { risk, outfit, plan, items };
}

/**
 * Fetch forecast. On Cloudflare Workers the response is cached at the edge for ~10 minutes
 * via the Cache API; elsewhere it falls back to a direct fetch. Never throws to the caller.
 */
export async function getWeather(): Promise<any> {
  const url = weatherUrl();
  const cache: any = (globalThis as any).caches?.default;
  if (cache) {
    const hit = await cache.match(url);
    if (hit) return hit.json();
  }
  const res = await fetch(url, { cf: { cacheTtl: 600 } } as any);
  if (!res.ok) throw new Error("weather_fetch_failed");
  const data = await res.json();
  if (cache) {
    const put = new Response(JSON.stringify(data), {
      headers: { "content-type": "application/json", "cache-control": "public, max-age=600" },
    });
    await cache.put(url, put);
  }
  return data;
}
