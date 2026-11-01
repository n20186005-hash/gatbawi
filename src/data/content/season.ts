import type { Topic } from "../topics";

export const seasonTopics: Topic[] = [
  {
    slug: "season/autumn",
    group: "season",
    priority: "P2",
    related: ["visit/crowds", "season/winter", "visit/time-required", "routes/daegu-gwanamsa"],
    ko: {
      metaTitle: "팔공산 갓바위 단풍 방문 가이드 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "가을 팔공산 갓바위 단풍 시기, 혼잡과 주차·날씨 주의, 방문 준비를 정리했습니다. 단풍 시기는 기상청 예보로 확인하세요.",
      h1: "팔공산 갓바위 단풍 방문 가이드",
      leadKo:
        "가을 팔공산 갓바위 단풍 시기와 혼잡, 주차·날씨 주의, 방문 준비를 정리했습니다. 단풍 절정 시기는 매년 다르니 기상청·국립공원 예보로 확인하세요.",
      updated: "2026-11-01",
      sections: [
        {
          id: "timing",
          headingKo: "단풍 시기",
          headingEn: "Foliage timing",
          paragraphsKo: [
            "팔공산을 포함한 한반도 내륙의 단풍은 보통 10월 후반~11월에 절정을 이룹니다. 해마다 시기가 다르므로, 방문 직전 기상청 계절 예보와 국립공원 안내를 확인하세요.",
            "단풍 시즌에는 방문객이 크게 몰리므로, 평일·이른 시간 방문과 대중교통 이용을 권합니다.",
          ],
          paragraphsEn: [
            "Foliage across inland Korea, including Palgongsan, usually peaks in late October to November. It varies yearly, so check the KMA seasonal forecast and park guidance just before visiting.",
            "The foliage season draws large crowds; visit on weekdays or early, and use transit.",
          ],
        },
        {
          id: "care",
          headingKo: "날씨와 안전",
          headingEn: "Weather and safety",
          paragraphsKo: [
            "가을은 일교차가 크고, 아침저녁으로 쌀쌀합니다. 보온 착용과 보조 배터리를 챙기세요.",
            "단풍 시즌 빙결은 적지만, 고지대 아침에는 미끄럼 위험이 있으니 신발을 확인하세요.",
          ],
          paragraphsEn: [
            "Autumn has large daily temperature swings and chilly mornings/evenings. Bring warm layers and a power bank.",
            "Ice is less likely in autumn, but high-elevation mornings can be slippery; check footwear.",
          ],
          calloutKo:
            "단풍 절정 시기는 추정치이며 기후에 따라 달라집니다. 정확한 시기는 출발 전 기상청과 국립공원 안내로 확인하세요.",
          calloutEn:
            "The peak-foliage timing is an estimate and varies with climate. Confirm with KMA and park guidance before departure.",
        },
      ],
      faqs: [
        {
          qKo: "갓바위 단풍은 언제예요?",
          aKo: "보통 10월 후반~11월이 절정입니다. 해마다 다르니 방문 직전 기상청 예보로 확인하세요.",
          qEn: "When is Gatbawi foliage?",
          aEn: "Usually late October to November. It varies yearly; check the KMA forecast just before visiting.",
        },
        {
          qKo: "단풍 때 주차는 어떻게 되나요?",
          aKo: "성수기 만차가 빈번합니다. 대중교통 이용과 이른 시간 방문을 권합니다.",
          qEn: "How is parking during foliage?",
          aEn: "Full lots are common in peak season. Use transit and visit early.",
        },
      ],
    },
    en: {
      metaTitle: "Palgongsan Gatbawi Autumn Foliage Guide | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Autumn foliage timing at Palgongsan Gatbawi, crowds, parking and weather cautions, and visit prep. Confirm timing with KMA.",
      h1: "Palgongsan Gatbawi Autumn Foliage Guide",
      leadEn:
        "Autumn foliage timing at Palgongsan Gatbawi, crowds, parking and weather cautions, and visit prep. Confirm timing with KMA.",
      updated: "2026-11-01",
      sections: [
        {
          id: "timing",
          headingEn: "Foliage timing",
          paragraphsEn: [
            "Foliage across inland Korea, including Palgongsan, usually peaks in late October to November. It varies yearly, so check the KMA seasonal forecast and park guidance just before visiting.",
            "The foliage season draws large crowds; visit on weekdays or early, and use transit.",
          ],
        },
        {
          id: "care",
          headingEn: "Weather and safety",
          paragraphsEn: [
            "Autumn has large daily temperature swings and chilly mornings/evenings. Bring warm layers and a power bank.",
            "Ice is less likely in autumn, but high-elevation mornings can be slippery; check footwear.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "When is Gatbawi foliage?",
          aEn: "Usually late October to November. It varies yearly; check the KMA forecast just before visiting.",
          qKo: "갓바위 단풍은 언제예요?",
          aKo: "보통 10월 후반~11월이 절정입니다.",
        },
        {
          qEn: "How is parking during foliage?",
          aEn: "Full lots are common in peak season. Use transit and visit early.",
          qKo: "단풍 때 주차는 어떻게 되나요?",
          aKo: "성수기 만차가 빈번합니다.",
        },
      ],
    },
  },
  {
    slug: "season/winter",
    group: "season",
    priority: "P2",
    related: ["visit/packing-list", "season/rainy-day", "season/summer", "visit/hours-fees"],
    ko: {
      metaTitle: "겨울 갓바위 등산과 결빙 주의 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "겨울 갓바위 등산 시 결빙·한파·일조 부족 등 위험과 준비물, 방문 자제 상황을 정리했습니다. 기상청 특보를 확인하세요.",
      h1: "겨울 갓바위 등산과 결빙 주의",
      leadKo:
        "겨울 갓바위 등산 시 결빙·한파·짧은 일조 등 위험과 준비물, 그리고 방문을 자제해야 할 상황을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "risk",
          headingKo: "겨울의 주요 위험",
          headingEn: "Main winter risks",
          paragraphsKo: [
            "겨울철 팔공산은 아침·저녁으로 결빙과 한파가 나타납니다. 특히 가파른 돌계단과 그늘 구간은 미끄럽고 추락 위험이 큽니다.",
            "해가 짧아 일몰이 빠르므로, 입산 시간과 일몰을 계산해 충분한 여유를 두세요.",
          ],
          paragraphsEn: [
            "In winter, Palgongsan sees ice and cold snaps in mornings and evenings. Steep stone stairs and shaded sections are slippery with high fall risk.",
            "Days are short with early sunset, so calculate entry time and sunset with ample buffer.",
          ],
        },
        {
          id: "prep",
          headingKo: "준비물과 대응",
          headingEn: "Preparation and response",
          bulletsKo: [
            "방한복·장갑·모자·목도리",
            "미끄럼 방지 신발과 아이젠(결빙 시)",
            "보온 음료와 비상 식량",
            "보조 배터리(저온 배터리 방전 주의)",
          ],
          bulletsEn: [
            "Winter clothing, gloves, hat, scarf",
            "Slip-resistant shoes and crampons (when icy)",
            "Warm drinks and emergency food",
            "Power bank (cold drains batteries)",
          ],
        },
        {
          id: "avoid",
          headingKo: "방문을 자제해야 할 상황",
          headingEn: "When to avoid visiting",
          paragraphsKo: [
            "기상청 한파특보·대설특보, 강풍, 또는 국립공원 통제가 내려지면 등반을 자제하세요. 안전이 가장 우선입니다.",
            "아이·어르신·무릎이 약한 분은 겨울 산길보다 입구 경내 관람 위주를 권합니다.",
          ],
          paragraphsEn: [
            "If KMA issues a cold-wave or heavy-snow advisory, or strong wind, or KNPS restricts entry, avoid climbing. Safety first.",
            "For children, seniors, or those with weak knees, prefer the entrance precinct over winter trails.",
          ],
          calloutKo:
            "결빙과 통제 여부는 당일 기상과 국립공원 상황에 따라 달라집니다. 출발 전 기상청 특보와 통제정보를 반드시 확인하세요.",
          calloutEn:
            "Ice and restrictions depend on same-day weather and park conditions. Always check KMA advisories and KNPS restrictions before departure.",
        },
      ],
      faqs: [
        {
          qKo: "겨울에 올라도 되나요?",
          aKo: "결빙과 한파가 없고 통제가 없다면 가능하나, 매우 위험합니다. 특보나 통제가 있으면 자제하세요.",
          qEn: "Can I climb in winter?",
          aEn: "If no ice, cold snap, or restriction, it is possible but very risky. Avoid if advisories or restrictions are in place.",
        },
        {
          qKo: "아이젠이 필요한가요?",
          aKo: "결빙 구간에서는 미끄럼 방지 용품이 도움이 됩니다. 다만 산길 상태는 당일 확인하세요.",
          qEn: "Do I need crampons?",
          aEn: "On icy sections, anti-slip gear helps. Still, check trail conditions on the day.",
        },
      ],
    },
    en: {
      metaTitle: "Winter Gatbawi Hiking & Ice Cautions | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Winter risks at Gatbawi — ice, cold snaps, short daylight — plus packing and when to avoid climbing. Check KMA advisories.",
      h1: "Winter Gatbawi Hiking & Ice Cautions",
      leadEn:
        "Winter risks at Gatbawi — ice, cold snaps, short daylight — plus packing and when to avoid climbing. Check KMA advisories.",
      updated: "2026-11-01",
      sections: [
        {
          id: "risk",
          headingEn: "Main winter risks",
          paragraphsEn: [
            "In winter, Palgongsan sees ice and cold snaps in mornings and evenings. Steep stone stairs and shaded sections are slippery with high fall risk.",
            "Days are short with early sunset, so calculate entry time and sunset with ample buffer.",
          ],
        },
        {
          id: "prep",
          headingEn: "Preparation and response",
          bulletsEn: [
            "Winter clothing, gloves, hat, scarf",
            "Slip-resistant shoes and crampons (when icy)",
            "Warm drinks and emergency food",
            "Power bank (cold drains batteries)",
          ],
        },
        {
          id: "avoid",
          headingEn: "When to avoid visiting",
          paragraphsEn: [
            "If KMA issues a cold-wave or heavy-snow advisory, or strong wind, or KNPS restricts entry, avoid climbing. Safety first.",
            "For children, seniors, or those with weak knees, prefer the entrance precinct over winter trails.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can I climb in winter?",
          aEn: "If no ice, cold snap, or restriction, it is possible but very risky. Avoid if advisories or restrictions are in place.",
          qKo: "겨울에 올라도 되나요?",
          aKo: "결빙과 한파가 없고 통제가 없다면 가능하나 매우 위험합니다.",
        },
        {
          qEn: "Do I need crampons?",
          aEn: "On icy sections, anti-slip gear helps. Still, check trail conditions on the day.",
          qKo: "아이젠이 필요한가요?",
          aKo: "결빙 구간에서는 미끄럼 방지 용품이 도움이 됩니다.",
        },
      ],
    },
  },
  {
    slug: "season/rainy-day",
    group: "season",
    priority: "P1",
    related: ["visit/hours-fees", "visit/packing-list", "season/summer", "season/winter"],
    ko: {
      metaTitle: "비 오는 날 갓바위 방문 판단 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "비 오는 날 갓바위 방문 시 미끄럼·낙석·통제 위험과 우비·신발 준비, 방문을 미뤄야 할 상황을 정리했습니다.",
      h1: "비 오는 날 갓바위 방문 판단",
      leadKo:
        "비 오는 날 갓바위를 방문할지 판단할 때 고려할 미끄럼·낙석·통제 위험과 우비·신발 준비, 방문을 미뤄야 할 상황을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "risk",
          headingKo: "비 오는 날의 위험",
          headingEn: "Risks on rainy days",
          paragraphsKo: [
            "비가 오면 돌계단과 산길이 미끄럽고, 비탈에서는 낙석·붕괴 위험이 커집니다. 국립공원은 기상에 따라 입산을 통제하기도 합니다.",
            "천둥·번개와 강풍이 동반되면 즉시 안전한 곳으로 이동하고, 등반을 중단하세요.",
          ],
          paragraphsEn: [
            "In rain, stone stairs and trails become slippery, and slopes carry higher rockfall and collapse risk. KNPS may restrict entry by weather.",
            "With thunder, lightning, and strong wind, move to safety immediately and stop climbing.",
          ],
        },
        {
          id: "prep",
          headingKo: "준비물과 대응",
          headingEn: "Preparation and response",
          bulletsKo: [
            "우비·방수 재킷·방수 신발",
            "미끄럼 방지 밑창과 지팡이",
            "비닐·보조 배터리(스마트폰 방수)",
            "일정 유연화(통제 시 대안 동선)",
          ],
          bulletsEn: [
            "Raincoat, waterproof jacket, waterproof shoes",
            "Slip-resistant soles and a cane",
            "Plastic bag and power bank (phone waterproofing)",
            "Flexible schedule (alternative route if restricted)",
          ],
        },
        {
          id: "avoid",
          headingKo: "방문을 미뤄야 할 상황",
          headingEn: "When to postpone",
          paragraphsKo: [
            "호우특보, 국립공원 통제, 또는 산길 상태가 불안하면 방문을 미루는 것이 안전합니다. 갓바위는 날씨 좋은 날 다시 찾아도 됩니다.",
            "어르신·아이·무릎 약한 분은 비 오는 날 산길 대신 입구 경내 관람을 권합니다.",
          ],
          paragraphsEn: [
            "If a heavy-rain advisory is issued, KNPS restricts entry, or the trail looks unsafe, postponing is safest. Gatbawi can wait for a clear day.",
            "For seniors, children, or those with weak knees, prefer the entrance precinct over the trail on rainy days.",
          ],
          calloutKo:
            "통제와 기상은 당일 상황에 따라 달라집니다. 출발 전 기상청 예보와 국립공원 통제정보를 반드시 확인하세요.",
          calloutEn:
            "Restrictions and weather vary by day. Always check the KMA forecast and KNPS restrictions before departure.",
        },
      ],
      faqs: [
        {
          qKo: "비 와도 올라도 되나요?",
          aKo: "가벼운 비라도 미끄럼·낙석 위험이 커집니다. 특보나 통제가 있으면 미루세요.",
          qEn: "Can I climb in the rain?",
          aEn: "Even light rain raises slip and rockfall risk. Postpone if advisories or restrictions are in place.",
        },
        {
          qKo: "비 오는 날 뭘 챙기나요?",
          aKo: "우비·방수 신발·미끄럼 방지 용품을 챙기고, 통제 시 대안 동선을 계획하세요.",
          qEn: "What to bring on a rainy day?",
          aEn: "Bring a raincoat, waterproof shoes, and anti-slip gear, and plan an alternative route if restricted.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi on Rainy Days | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Deciding whether to visit Gatbawi in rain — slip, rockfall, and restriction risks, rain gear, and when to postpone.",
      h1: "Gatbawi on Rainy Days",
      leadEn:
        "Deciding whether to visit Gatbawi in rain — slip, rockfall, and restriction risks, rain gear, and when to postpone.",
      updated: "2026-11-01",
      sections: [
        {
          id: "risk",
          headingEn: "Risks on rainy days",
          paragraphsEn: [
            "In rain, stone stairs and trails become slippery, and slopes carry higher rockfall and collapse risk. KNPS may restrict entry by weather.",
            "With thunder, lightning, and strong wind, move to safety immediately and stop climbing.",
          ],
        },
        {
          id: "prep",
          headingEn: "Preparation and response",
          bulletsEn: [
            "Raincoat, waterproof jacket, waterproof shoes",
            "Slip-resistant soles and a cane",
            "Plastic bag and power bank (phone waterproofing)",
            "Flexible schedule (alternative route if restricted)",
          ],
        },
        {
          id: "avoid",
          headingEn: "When to postpone",
          paragraphsEn: [
            "If a heavy-rain advisory is issued, KNPS restricts entry, or the trail looks unsafe, postponing is safest. Gatbawi can wait for a clear day.",
            "For seniors, children, or those with weak knees, prefer the entrance precinct over the trail on rainy days.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can I climb in the rain?",
          aEn: "Even light rain raises slip and rockfall risk. Postpone if advisories or restrictions are in place.",
          qKo: "비 와도 올라도 되나요?",
          aKo: "가벼운 비라도 미끄럼·낙석 위험이 커집니다.",
        },
        {
          qEn: "What to bring on a rainy day?",
          aEn: "Bring a raincoat, waterproof shoes, and anti-slip gear, and plan an alternative route if restricted.",
          qKo: "비 오는 날 뭘 챙기나요?",
          aKo: "우비·방수 신발·미끄럼 방지 용품을 챙기세요.",
        },
      ],
    },
  },
  {
    slug: "season/summer",
    group: "season",
    priority: "P2",
    related: ["visit/packing-list", "season/rainy-day", "season/winter", "visit/crowds"],
    ko: {
      metaTitle: "여름 갓바위 더위·폭염 대비 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "여름 갓바위 방문 시 폭염·자외선·소나기 위험과 수분 섭취, 이른 시간 방문 요령을 정리했습니다. 기상청 특보를 확인하세요.",
      h1: "여름 갓바위 더위·폭염 대비",
      leadKo:
        "여름 갓바위 방문 시 폭염·자외선·소나기 위험과 수분 섭취, 이른 시간 방문 요령을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "risk",
          headingKo: "여름의 주요 위험",
          headingEn: "Main summer risks",
          paragraphsKo: [
            "대구·경산은 여름철 폭염과 자외선이 강합니다. 그늘 없는 산길에서 온열질환 위험이 있으니 수분과 휴식을 충분히 챙기세요.",
            "장마(6~7월)와 소나기로 인해 산길이 미끄럽고, 국립공원 통제가 내려질 수 있습니다.",
          ],
          paragraphsEn: [
            "Daegu–Gyeongsan summers bring strong heatwaves and UV. On shaded-less trails, heat illness is a risk, so take enough water and rest.",
            "The monsoon (June–July) and showers make trails slippery, and KNPS may restrict entry.",
          ],
        },
        {
          id: "prep",
          headingKo: "준비물과 대응",
          headingEn: "Preparation and response",
          bulletsKo: [
            "충분한 물과 이온음료",
            "모자·선크림·가벼운 긴팔",
            "우비(소나기 대비)",
            "보조 배터리·구급 상비약",
          ],
          bulletsEn: [
            "Enough water and electrolyte drinks",
            "Hat, sunscreen, light long sleeves",
            "Raincoat (showers)",
            "Power bank and first-aid basics",
          ],
        },
        {
          id: "tip",
          headingKo: "이른 시간 방문",
          headingEn: "Visit early",
          paragraphsKo: [
            "폭염을 피하려면 해뜬 직후나 이른 아침에 출발하고, 한낮에는 정상 대신 입구 경내 관람을 권합니다.",
            "기상청 폭염특보가 내려지면 무리한 등반을 자제하세요.",
          ],
          paragraphsEn: [
            "To avoid heatwaves, start right after sunrise or early morning; at midday, prefer the entrance precinct over the summit.",
            "If KMA issues a heatwave advisory, avoid strenuous climbing.",
          ],
          calloutKo:
            "폭염·장마·소나기는 당일 기상에 따라 달라집니다. 출발 전 기상청 예보와 국립공원 통제정보를 확인하세요.",
          calloutEn:
            "Heatwaves, monsoon, and showers vary by day. Check the KMA forecast and KNPS restrictions before departure.",
        },
      ],
      faqs: [
        {
          qKo: "여름에 가도 되나요?",
          aKo: "가능하나 폭염과 자외선이 강합니다. 이른 아침 방문과 충분한 수분 섭취를 권합니다.",
          qEn: "Can I visit in summer?",
          aEn: "Possible, but heat and UV are strong. Visit early morning and hydrate well.",
        },
        {
          qKo: "물은 얼마나 가져가나요?",
          aKo: "더위 속에서 소모가 크므로, 왕복 내내 쓸 충분한 물을 준비하세요.",
          qEn: "How much water should I bring?",
          aEn: "Consumption is high in heat, so prepare enough for the whole round trip.",
        },
      ],
    },
    en: {
      metaTitle: "Summer Gatbawi Heat & Heatwave Prep | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Summer risks at Gatbawi — heatwaves, UV, showers — plus hydration and early-visit tips. Check KMA advisories.",
      h1: "Summer Gatbawi Heat & Heatwave Prep",
      leadEn:
        "Summer risks at Gatbawi — heatwaves, UV, showers — plus hydration and early-visit tips. Check KMA advisories.",
      updated: "2026-11-01",
      sections: [
        {
          id: "risk",
          headingEn: "Main summer risks",
          paragraphsEn: [
            "Daegu–Gyeongsan summers bring strong heatwaves and UV. On shaded-less trails, heat illness is a risk, so take enough water and rest.",
            "The monsoon (June–July) and showers make trails slippery, and KNPS may restrict entry.",
          ],
        },
        {
          id: "prep",
          headingEn: "Preparation and response",
          bulletsEn: [
            "Enough water and electrolyte drinks",
            "Hat, sunscreen, light long sleeves",
            "Raincoat (showers)",
            "Power bank and first-aid basics",
          ],
        },
        {
          id: "tip",
          headingEn: "Visit early",
          paragraphsEn: [
            "To avoid heatwaves, start right after sunrise or early morning; at midday, prefer the entrance precinct over the summit.",
            "If KMA issues a heatwave advisory, avoid strenuous climbing.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can I visit in summer?",
          aEn: "Possible, but heat and UV are strong. Visit early morning and hydrate well.",
          qKo: "여름에 가도 되나요?",
          aKo: "가능하나 폭염과 자외선이 강합니다.",
        },
        {
          qEn: "How much water should I bring?",
          aEn: "Consumption is high in heat, so prepare enough for the whole round trip.",
          qKo: "물은 얼마나 가져가나요?",
          aKo: "왕복 내내 쓸 충분한 물을 준비하세요.",
        },
      ],
    },
  },
];
