// Data-driven topic registry for the Gatbawi guide's long-tail SEO pages.
// Each topic has independent Korean + English content; the same URL serves both
// languages via the copy-ko / copy-en middleware toggle (ko at /<slug>/, en at /en/<slug>/).

export type TopicGroup =
  | "heritage"
  | "pilgrimage"
  | "routes"
  | "transport"
  | "visit"
  | "season"
  | "nearby"
  | "itineraries";

export interface TopicSection {
  id?: string;
  headingKo: string;
  headingEn: string;
  paragraphsKo?: string[];
  paragraphsEn?: string[];
  bulletsKo?: string[];
  bulletsEn?: string[];
  calloutKo?: string;
  calloutEn?: string;
}

export interface TopicFaq {
  qKo: string;
  aKo: string;
  qEn: string;
  aEn: string;
}

export interface TopicContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h1En: string;
  leadKo: string;
  leadEn: string;
  updated: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
}

export interface Topic {
  slug: string; // full path without leading slash, e.g. "routes/daegu-gwanamsa"
  group: TopicGroup;
  priority: "P0" | "P1" | "P2";
  ko: TopicContent;
  en: TopicContent;
  related: string[];
}

export interface GroupMeta {
  key: TopicGroup;
  titleKo: string;
  titleEn: string;
  labelKo: string;
  labelEn: string;
  introKo: string;
  introEn: string;
  leadKo: string;
  leadEn: string;
}

import { heritageTopics } from "./content/heritage";
import { pilgrimageTopics } from "./content/pilgrimage";
import { routesTopics } from "./content/routes";
import { transportTopics } from "./content/transport";
import { visitTopics } from "./content/visit";
import { seasonTopics } from "./content/season";
import { nearbyTopics } from "./content/nearby";
import { itinerariesTopics } from "./content/itineraries";

export const TOPICS: Topic[] = [
  ...heritageTopics,
  ...pilgrimageTopics,
  ...routesTopics,
  ...transportTopics,
  ...visitTopics,
  ...seasonTopics,
  ...nearbyTopics,
  ...itinerariesTopics,
];

export const GROUP_ORDER: TopicGroup[] = [
  "heritage",
  "pilgrimage",
  "routes",
  "transport",
  "visit",
  "season",
  "nearby",
  "itineraries",
];

export const GROUP_META: Record<TopicGroup, GroupMeta> = {
  heritage: {
    key: "heritage",
    titleKo: "갓바위 역사와 문화재",
    titleEn: "Gatbawi heritage & cultural property",
    labelKo: "역사·문화재",
    labelEn: "Heritage",
    introKo: "관봉석조여래좌상의 공식 명칭, 연혁, 명칭과 형태, 약사여래 신앙의 학술 논의를 정리했습니다. 공적 자료와 학술 설명, 그리고 믿음의 영역을 구분해 다룹니다.",
    introEn: "The formal name, history, naming, form, and the scholarly discussion around Medicine Buddha faith — separated into public records, academic notes, and the realm of belief.",
    leadKo: "석불 자체의 역사와 문화재적 의미를 다룹니다.",
    leadEn: "The history and cultural-property meaning of the stone Buddha itself.",
  },
  pilgrimage: {
    key: "pilgrimage",
    titleKo: "참배와 전통",
    titleEn: "Pilgrimage & tradition",
    labelKo: "참배·전통",
    labelEn: "Pilgrimage",
    introKo: "참배 예절, 소원 전설, 선본사와의 관계 등 오래된 방문 전통을 정리했습니다. 신앙과 전승은 존중하되, 이동·안전에 필요한 사실 정보를 우선합니다.",
    introEn: "Pilgrimage etiquette, the wish legend, and the relationship with Seonbonsa — long-standing visiting traditions. Faith and legend are respected; practical information comes first.",
    leadKo: "오랫동안 이어진 방문과 기도의 문화를 다룹니다.",
    leadEn: "The long-standing culture of visiting and prayer.",
  },
  routes: {
    key: "routes",
    titleKo: "등산코스와 체력별 안내",
    titleEn: "Trails & by-mobility guides",
    labelKo: "등산코스",
    labelEn: "Trails",
    introKo: "대구 관암사 방면, 경산 선본사 방면의 두 공식 접근로와 계단·난이도, 체력별 코스를 정리했습니다. 입구 위치, 거리, 경사, 휴식 구간을 구분해 안내합니다.",
    introEn: "The two official approaches via Gwanamsa (Daegu) and Seonbonsa (Gyeongsan), with stair counts, difficulty, and by-mobility routes — with distinct entry points, distance, grade, and rest points.",
    leadKo: "어떤 길로 갈지, 내 체력에 맞는 코스를 다룹니다.",
    leadEn: "Which route to take, and which fits your mobility.",
  },
  transport: {
    key: "transport",
    titleKo: "대중교통·주차·귀가",
    titleEn: "Transit · parking · return",
    labelKo: "교통·주차",
    labelEn: "Transport",
    introKo: "동대구역·공항 출발, 시내버스·401번, 대구·경산 주차장과 막차·귀가까지, 출발 전 다시 확인해야 할 교통 정보를 정리했습니다.",
    introEn: "From Dongdaegu Station and the airport, city buses and route 401, Daegu and Gyeongsan parking, plus last-connection and return notes — what to recheck before departure.",
    leadKo: "어떻게 가고, 어디에 주차하고, 어떻게 돌아올지 다룹니다.",
    leadEn: "How to get there, where to park, and how to get back.",
  },
  visit: {
    key: "visit",
    titleKo: "방문 결정·준비",
    titleEn: "Visit decisions & preparation",
    labelKo: "방문 준비",
    labelEn: "Visit",
    introKo: "왕복 소요 시간, 입산 시간·입장료·통제, 준비물, 성수기 혼잡까지 방문을 결정하는 데 필요한 정보를 정리했습니다.",
    introEn: "Round-trip time, entry hours/fees/restrictions, a packing checklist, and peak crowding — the information needed to decide a visit.",
    leadKo: "방문하기 전에 알아두면 좋은 결정 정보를 다룹니다.",
    leadEn: "Decision information worth knowing before you go.",
  },
  season: {
    key: "season",
    titleKo: "계절·날씨·안전",
    titleEn: "Season · weather · safety",
    labelKo: "계절·안전",
    labelEn: "Season",
    introKo: "단풍·겨울 빙결·장마·폭염 등 계절별 위험과 준비를 정리했습니다. 날짜별 예보와 국립공원 통제정보를 가장 먼저 확인하세요.",
    introEn: "Seasonal risks and preparation — autumn foliage, winter ice, rainy season, and summer heat. Always check the date forecast and KNPS restrictions first.",
    leadKo: "계절과 날씨에 따른 방문 준비를 다룹니다.",
    leadEn: "Seasonal and weather-related visit preparation.",
  },
  nearby: {
    key: "nearby",
    titleKo: "주변 식사·카페·문화",
    titleEn: "Nearby food · cafés · culture",
    labelKo: "주변 먹거리",
    labelEn: "Nearby",
    introKo: "대구 측·경산 측 입구의 식당과 카페, 관암사·동화사·팔공산 케이블카 등 주변 문화 지점을 정리했습니다. 두 측면의 동선을 섞지 않고 안내합니다.",
    introEn: "Restaurants and cafés at the Daegu and Gyeongsan trailheads, plus Gwanamsa, Donghwasa, and the Palgongsan cable car — with the two sides kept separate.",
    leadKo: "下山 후 식사와 주변 문화 지점을 다룹니다.",
    leadEn: "Where to eat after descent and nearby cultural spots.",
  },
  itineraries: {
    key: "itineraries",
    titleKo: "동선과 당일 여행",
    titleEn: "Itineraries & day trips",
    labelKo: "동선·여행",
    labelEn: "Itineraries",
    introKo: "대구 반일, 경산 반일, 갓바위·선본사·동화사 문화 일주, 정상에 오르지 않는 대안 동선까지 실제 지리와 개방 정보를 바탕으로 정리했습니다.",
    introEn: "Daegu half-day, Gyeongsan half-day, a Gatbawi–Seonbonsa–Donghwasa cultural loop, and a no-summit alternative — based on real geography and opening information.",
    leadKo: "하루를 어떻게 꾸밀지, 대안 동선을 다룹니다.",
    leadEn: "How to structure a day, including alternative routes.",
  },
};

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function isGroupSlug(slug: string): slug is TopicGroup {
  return (GROUP_ORDER as string[]).includes(slug);
}

export function getGroup(slug: string): GroupMeta | undefined {
  return isGroupSlug(slug) ? GROUP_META[slug] : undefined;
}

export function topicsByGroup(group: TopicGroup): Topic[] {
  return TOPICS.filter((t) => t.group === group);
}

/** Group keys ordered by the site's primary navigation sequence. */
export const groupKeys = GROUP_ORDER;
