// Central, language-neutral entity + SEO configuration for the Gatbawi guide.
// SEO site-name format: "attraction name + city + travel guide".

export const SITE_NAME = "갓바위 (팔공산) 대구 여행 가이드";
export const SITE_NAME_EN = "Gatbawi Daegu Travel Guide";

/** Append a page suffix with the canonical site name, e.g. "위치·교통 | 갓바위 (팔공산) 대구 여행 가이드". */
export function withSiteName(suffix: string): string {
  return suffix ? `${suffix} | ${SITE_NAME}` : SITE_NAME;
}

/** Last verification date for snapshot facts such as the review count. */
export const AS_OF = "2026-11-01";

export const ATTRACTION = {
  fullName: "Gatbawi",
  shortName: "갓바위",
  fullNameKo: "팔공산 갓바위",
  // Official national-heritage name (국가유산청). Used as the formal designation on history pages.
  officialName: "경산 팔공산 관봉 석조여래좌상",
  officialNameShort: "관봉석조여래좌상",
  city: "Daegu",
  cityKo: "대구",
  region: "Daegu",
  regionKo: "대구광역시",
  country: "South Korea",
  countryKo: "대한민국",
  countryCode: "KR",
  postalCode: "41025",
  lat: 35.9815,
  lon: 128.7368,
  elevation: "850 m",
  peak: "Gwanbong Peak (관봉, 冠峰)",
  // Road address shown by Google Maps — the Daegu trailhead / Dong-gu entrance side.
  address: "229 Gatbawi-ro, Dong-gu, Daegu, 41025, Republic of Korea",
  addressKo: "대구광역시 동구 갓바위로 229 (우편 41025)",
  // Separate national-heritage location — Gyeongsan-si, Wachon-myeon. Not a road-navigation target.
  heritageAddressKo: "경상북도 경산시 와촌면 갓바위로81길 176-64",
  mapsShareUrl: "https://maps.app.goo.gl/VmyckMsmn6p4hq1LA",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x356676b2c477a469%3A0x5ebd8eac7aea231d!2sGatbawi!5e1!3m2!1sen!2s!4v1787535670848!5m2!1sen!2s",
  // Public Plus Code near the approximate map point (not surveyed summit GPS).
  plusCode: "XPJP+MJ",
  rating: 4.6,
  reviewCount: 4654,
} as const;

/** Authoritative, non-commercial outbound references (government / public / encyclopedic only). */
export const REFERENCES = [
  { label: "Gatbawi on Wikipedia", url: "https://en.wikipedia.org/wiki/Gatbawi" },
  { label: "Wikidata · Q5526956", url: "https://www.wikidata.org/wiki/Q5526956" },
  { label: "Korea Tourism Organization (VisitKorea)", url: "https://english.visitkorea.or.kr/" },
  { label: "Daegu Metropolitan City Tourism", url: "https://tour.daegu.go.kr" },
  { label: "Gyeongsan City (경산시청)", url: "https://www.gyeongsan.go.kr" },
  { label: "Korea National Park Service (Palgongsan)", url: "https://www.knps.or.kr" },
  { label: "National Heritage Administration (국가유산청)", url: "https://www.cha.go.kr" },
  { label: "Korea Meteorological Administration (기상청)", url: "https://data.kma.go.kr" },
] as const;
