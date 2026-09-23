// Central, language-neutral entity + SEO configuration for the Gatbawi guide.
// SEO site-name format: "attraction name + city + travel guide".

export const SITE_NAME = "갓바위 (팔공산) 대구 여행 가이드";
export const SITE_NAME_EN = "Gatbawi Daegu Travel Guide";

/** Append a page suffix with the canonical site name, e.g. "위치·교통 | 갓바위 (팔공산) 대구 여행 가이드". */
export function withSiteName(suffix: string): string {
  return suffix ? `${suffix} | ${SITE_NAME}` : SITE_NAME;
}

export const ATTRACTION = {
  fullName: "Gatbawi",
  shortName: "갓바위",
  fullNameKo: "팔공산 갓바위",
  officialName: "관봉석조여래좌상",
  city: "Daegu",
  cityKo: "대구",
  region: "Daegu",
  regionKo: "대구광역시",
  country: "South Korea",
  countryKo: "대한민국",
  countryCode: "KR",
  postalCode: "41025",
  lat: 35.9814948,
  lon: 128.7367522,
  elevation: "850 m",
  peak: "Gwanbong Peak (관봉, 冠峰)",
  address: "229 Gatbawi-ro, Dong-gu, Daegu, 41025, Republic of Korea",
  addressKo: "대구광역시 동구 갓바위로 229 (우편 41025)",
  mapsShareUrl: "https://maps.app.goo.gl/VmyckMsmn6p4hq1LA",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x356676b2c477a469%3A0x5ebd8eac7aea231d!2sGatbawi!5e1!3m2!1sen!2s!4v1787535670848!5m2!1sen!2s",
  rating: 4.6,
  reviewCount: 4636,
} as const;

/** Authoritative, non-commercial outbound references (government / public / encyclopedic only). */
export const REFERENCES = [
  { label: "Gatbawi on Wikipedia", url: "https://en.wikipedia.org/wiki/Gatbawi" },
  { label: "Wikidata · Q12583597", url: "https://www.wikidata.org/wiki/Q12583597" },
  { label: "Korea Tourism Organization (VisitKorea)", url: "https://english.visitkorea.or.kr/" },
  { label: "Daegu Metropolitan City Tourism", url: "https://tour.daegu.go.kr" },
  { label: "Korea National Park Service (Palgongsan)", url: "https://www.knps.or.kr" },
  { label: "Korea Meteorological Administration (기상청)", url: "https://data.kma.go.kr" },
] as const;
