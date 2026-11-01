import type { Topic } from "../topics";

export const itinerariesTopics: Topic[] = [
  {
    slug: "itineraries/daegu-half-day",
    group: "itineraries",
    priority: "P0",
    related: ["itineraries/gyeongsan-half-day", "routes/daegu-gwanamsa", "transport/daegu-city-bus", "visit/time-required"],
    ko: {
      metaTitle: "갓바위 대구 반일 코스 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "대구 시내에서 출발해 갓바위 대구 측(관암사)을 다녀오는 반일 동선을 정리했습니다. 이동·등산·식사 시간대와 주의사항을 안내합니다.",
      h1: "갓바위 대구 반일 코스",
      h1En: "Daegu half-day Gatbawi plan",
      leadKo:
        "대구 시내에서 출발해 갓바위 대구 측(관암사 방면)을 다녀오는 반일(약 반나절) 동선을 정리했습니다. 실제 소요 시간은 날씨·체력·혼잡에 따라 다릅니다.",
      leadEn:
        "A half-day (roughly half-day) loop from central Daegu to the Gatbawi Daegu side (Gwanamsa) and back — with time bands for travel, hiking, and a meal.",
      updated: "2026-11-01",
      sections: [
        {
          id: "flow",
          headingKo: "권장 동선 흐름",
          headingEn: "Suggested flow",
          paragraphsKo: [
            "대구 시내 → (시내버스·401번 또는 자차) → 갓바위 대구 측 주차장·탐방안내소 → 관암사 방면 등산로 입구 → 갓바위(관봉) 왕복 → 입구 식당·카페 → 대구 시내 복귀.",
            "구체적인 대중교통 편과 주차는 ‘대구 시내버스’ ‘401번 버스’ ‘대구 갓바위 주차장’ 페이지에서 확인하세요.",
          ],
          paragraphsEn: [
            "Central Daegu → (city bus / route 401, or by car) → Gatbawi Daegu-side parking & visitor centre → Gwanamsa trailhead → Gatbawi (Gwanbong) round trip → entrance restaurant/café → return to Daegu.",
            "For specific transit and parking, see the 'Daegu city buses', 'route 401', and 'Daegu Gatbawi parking' pages.",
          ],
        },
        {
          id: "time",
          headingKo: "시간대 안내",
          headingEn: "Time bands",
          bulletsKo: [
            "오전 일찍 출발해 일몰 전 하산을 맞추기",
            "왕복 등산은 경사·계단 때문에 예상보다 길어질 수 있음",
            "식사·휴식 여유를 두어 반나절 일정으로 계획",
          ],
          bulletsEn: [
            "Start early and finish descent before sunset",
            "Round-trip hiking can take longer than expected due to grade and stairs",
            "Allow meal and rest buffer — plan a half-day slot",
          ],
        },
        {
          id: "care",
          headingKo: "주의사항",
          headingEn: "Cautions",
          paragraphsKo: [
            "정확한 소요 시간은 공식 안내와 현장 표지판에서 확인하세요. 이 안내는 방향성 안내이며, 당일의 입산 통제·날씨로 실제 동선이 제한될 수 있습니다.",
            "초보자나 체력이 부족한 분은 ‘정상에 오르지 않는 대안 일정’과 ‘어르신 갓바위 참배 코스’도 함께 보세요.",
          ],
          paragraphsEn: [
            "Confirm exact times from official guidance and signboards. This is directional guidance; same-day entry restrictions and weather can limit the actual route.",
            "Beginners or those with lower fitness should also see the 'no-summit alternative' and 'Gatbawi for seniors' pages.",
          ],
          calloutKo:
            "국립공원 입산 통제와 기상청 예보는 출발 전에 반드시 확인하세요. 폭염·빙결·강우 시 등산로가 제한될 수 있습니다.",
          calloutEn:
            "Always check KNPS entry restrictions and the KMA forecast before departure. Trails can be limited in heatwaves, ice, or heavy rain.",
        },
      ],
      faqs: [
        {
          qKo: "대구에서 갓바위 반나절 가능한가요?",
          aKo: "네. 대구 시내에서 대중교통이나 자차로 갓바위 대구 측을 다녀오는 반나절 동선이 가능합니다. 정확한 소요 시간은 현장 안내를 확인하세요.",
          qEn: "Can I do Gatbawi from Daegu in half a day?",
          aEn: "Yes. A half-day loop from central Daegu to the Daegu side and back is feasible by transit or car. Confirm exact times on site.",
        },
        {
          qKo: "몇 시에 출발하는 게 좋나요?",
          aKo: "일몰 전 하산을 위해 오전 일찍 출발하는 것을 권합니다. 계절별 일몰 시각은 기상청 예보를 확인하세요.",
          qEn: "What time should I leave?",
          aEn: "Leave early in the morning to finish before sunset. Check the seasonal sunset time on the KMA forecast.",
        },
      ],
    },
    en: {
      metaTitle: "Daegu Half-day Gatbawi Plan | Gatbawi Daegu Travel Guide",
      metaDescription:
        "A half-day loop from central Daegu to the Gatbawi Daegu side (Gwanamsa) and back — travel, hiking, and meal time bands with cautions.",
      h1: "Daegu Half-day Gatbawi Plan",
      h1En: "Daegu Half-day Gatbawi Plan",
      leadEn:
        "A half-day loop from central Daegu to the Gatbawi Daegu side (Gwanamsa) and back — with time bands for travel, hiking, and a meal.",
      updated: "2026-11-01",
      sections: [
        {
          id: "flow",
          headingEn: "Suggested flow",
          paragraphsEn: [
            "Central Daegu → (city bus / route 401, or by car) → Gatbawi Daegu-side parking & visitor centre → Gwanamsa trailhead → Gatbawi (Gwanbong) round trip → entrance restaurant/café → return to Daegu.",
            "For specific transit and parking, see the 'Daegu city buses', 'route 401', and 'Daegu Gatbawi parking' pages.",
          ],
        },
        {
          id: "time",
          headingEn: "Time bands",
          bulletsEn: [
            "Start early and finish descent before sunset",
            "Round-trip hiking can take longer than expected due to grade and stairs",
            "Allow meal and rest buffer — plan a half-day slot",
          ],
        },
        {
          id: "care",
          headingEn: "Cautions",
          paragraphsEn: [
            "Confirm exact times from official guidance and signboards. This is directional guidance; same-day entry restrictions and weather can limit the actual route.",
            "Beginners or those with lower fitness should also see the 'no-summit alternative' and 'Gatbawi for seniors' pages.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can I do Gatbawi from Daegu in half a day?",
          aEn: "Yes. A half-day loop from central Daegu to the Daegu side and back is feasible by transit or car. Confirm exact times on site.",
          qKo: "대구에서 갓바위 반나절 가능한가요?",
          aKo: "네. 대구 시내에서 갓바위 대구 측을 다녀오는 반나절 동선이 가능합니다.",
        },
        {
          qEn: "What time should I leave?",
          aEn: "Leave early in the morning to finish before sunset. Check the seasonal sunset time on the KMA forecast.",
          qKo: "몇 시에 출발하는 게 좋나요?",
          aKo: "일몰 전 하산을 위해 오전 일찍 출발을 권합니다.",
        },
      ],
    },
  },
  {
    slug: "itineraries/gyeongsan-half-day",
    group: "itineraries",
    priority: "P0",
    related: ["itineraries/daegu-half-day", "routes/gyeongsan-seonbonsa", "transport/gyeongsan-transit", "transport/gyeongsan-parking"],
    ko: {
      metaTitle: "갓바위 경산 반일 코스 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "경산 인근에서 출발해 갓바위 경산 측(선본사)을 다녀오는 반일 동선을 정리했습니다. 대구 측과 도로·산길이 다르므로 구분해 안내합니다.",
      h1: "갓바위 경산 반일 코스",
      h1En: "Gyeongsan half-day Gatbawi plan",
      leadKo:
        "경산 인근에서 출발해 갓바위 경산 측(와촌면 선본사 방면)을 다녀오는 반일(약 반나절) 동선을 정리했습니다. 대구 측과 도로 진입이 다르므로 구분해 안내합니다.",
      leadEn:
        "A half-day loop from around Gyeongsan to the Gatbawi Gyeongsan side (Seonbonsa) and back — kept separate from the Daegu side, since roads and trails differ.",
      updated: "2026-11-01",
      sections: [
        {
          id: "flow",
          headingKo: "권장 동선 흐름",
          headingEn: "Suggested flow",
          paragraphsKo: [
            "경산 시내·와촌면 → (시외·마을버스 또는 자차) → 갓바위 경산 측 주차장·탐방안내소 → 선본사 방면 등산로 입구 → 갓바위(관봉) 왕복 → 입구 식당·카페 → 경산 인근 복귀.",
            "교통과 주차는 ‘경산 교통·대중교통’ ‘경산 갓바위 주차장’ 페이지에서 확인하세요. 대구 측과 섞지 않도록 주의하세요.",
          ],
          paragraphsEn: [
            "Gyeongsan city / Wachon-myeon → (intercity/village bus or by car) → Gatbawi Gyeongsan-side parking & visitor centre → Seonbonsa trailhead → Gatbawi (Gwanbong) round trip → entrance restaurant/café → return around Gyeongsan.",
            "For transit and parking, see the 'Gyeongsan transit' and 'Gyeongsan Gatbawi parking' pages. Be careful not to mix with the Daegu side.",
          ],
        },
        {
          id: "time",
          headingKo: "시간대 안내",
          headingEn: "Time bands",
          bulletsKo: [
            "오전 일찍 출발해 일몰 전 하산을 맞추기",
            "경산 측은 대중교통 간격이 들쭉날쭉할 수 있어 이동 시간을 넉넉히",
            "식사·휴식 여유를 두어 반나절 일정으로 계획",
          ],
          bulletsEn: [
            "Start early and finish descent before sunset",
            "Gyeongsan-side transit intervals can be uneven, so allow extra travel time",
            "Allow meal and rest buffer — plan a half-day slot",
          ],
        },
        {
          id: "care",
          headingKo: "주의사항",
          headingEn: "Cautions",
          paragraphsKo: [
            "정확한 소요 시간은 공식 안내와 현장 표지판에서 확인하세요. 대구 측과 경산 측은 별개 진입로이므로, 출발 전 어느 쪽에서 오를지 정하세요.",
            "체력이 부족한 분은 ‘정상에 오르지 않는 대안 일정’도 함께 보세요.",
          ],
          paragraphsEn: [
            "Confirm exact times from official guidance and signboards. The Daegu and Gyeongsan sides are separate approaches, so decide which side before departure.",
            "If unfit, also see the 'no-summit alternative' page.",
          ],
          calloutKo:
            "국립공원 입산 통제와 기상청 예보는 출발 전에 반드시 확인하세요.",
          calloutEn:
            "Always check KNPS entry restrictions and the KMA forecast before departure.",
        },
      ],
      faqs: [
        {
          qKo: "경산에서 갓바위 반나절 가능한가요?",
          aKo: "네. 경산 인근에서 갓바위 경산 측을 다녀오는 반나절 동선이 가능합니다. 대구 측과 도로가 다르므로 구분해 계획하세요.",
          qEn: "Can I do Gatbawi from Gyeongsan in half a day?",
          aEn: "Yes. A half-day loop from around Gyeongsan to the Gyeongsan side is feasible. Roads differ from the Daegu side, so plan separately.",
        },
        {
          qKo: "대구 출발과 무엇이 다른가요?",
          aKo: "진입로와 대중교통이 다릅니다. 비교는 ‘갓바위 대구 경산 코스 비교’ 페이지를 보세요.",
          qEn: "How is it different from starting in Daegu?",
          aEn: "The approach and transit differ. For a comparison, see the 'Daegu vs Gyeongsan routes' page.",
        },
      ],
    },
    en: {
      metaTitle: "Gyeongsan Half-day Gatbawi Plan | Gatbawi Daegu Travel Guide",
      metaDescription:
        "A half-day loop from around Gyeongsan to the Gatbawi Gyeongsan side (Seonbonsa) and back — separate from the Daegu side.",
      h1: "Gyeongsan Half-day Gatbawi Plan",
      h1En: "Gyeongsan Half-day Gatbawi Plan",
      leadEn:
        "A half-day loop from around Gyeongsan to the Gatbawi Gyeongsan side (Seonbonsa) and back — kept separate from the Daegu side.",
      updated: "2026-11-01",
      sections: [
        {
          id: "flow",
          headingEn: "Suggested flow",
          paragraphsEn: [
            "Gyeongsan city / Wachon-myeon → (intercity/village bus or by car) → Gatbawi Gyeongsan-side parking & visitor centre → Seonbonsa trailhead → Gatbawi (Gwanbong) round trip → entrance restaurant/café → return around Gyeongsan.",
            "For transit and parking, see the 'Gyeongsan transit' and 'Gyeongsan Gatbawi parking' pages. Be careful not to mix with the Daegu side.",
          ],
        },
        {
          id: "time",
          headingEn: "Time bands",
          bulletsEn: [
            "Start early and finish descent before sunset",
            "Gyeongsan-side transit intervals can be uneven, so allow extra travel time",
            "Allow meal and rest buffer — plan a half-day slot",
          ],
        },
        {
          id: "care",
          headingEn: "Cautions",
          paragraphsEn: [
            "Confirm exact times from official guidance and signboards. The Daegu and Gyeongsan sides are separate approaches, so decide which side before departure.",
            "If unfit, also see the 'no-summit alternative' page.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can I do Gatbawi from Gyeongsan in half a day?",
          aEn: "Yes. A half-day loop from around Gyeongsan to the Gyeongsan side is feasible. Roads differ from the Daegu side, so plan separately.",
          qKo: "경산에서 갓바위 반나절 가능한가요?",
          aKo: "네. 경산 인근에서 갓바위 경산 측을 다녀오는 반나절 동선이 가능합니다.",
        },
        {
          qEn: "How is it different from starting in Daegu?",
          aEn: "The approach and transit differ. For a comparison, see the 'Daegu vs Gyeongsan routes' page.",
          qKo: "대구 출발과 무엇이 다른가요?",
          aKo: "진입로와 대중교통이 다릅니다.",
        },
      ],
    },
  },
  {
    slug: "itineraries/temples-day-trip",
    group: "itineraries",
    priority: "P1",
    related: ["itineraries/daegu-half-day", "heritage/gwanbong-stone-buddha", "pilgrimage/seonbonsa", "nearby/cafes"],
    ko: {
      metaTitle: "갓바위·선본사·동화사 문화 일주 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "팔공산의 갓바위(관봉), 선본사, 동화사를 묶은 문화 당일 동선을 정리했습니다. 실제 지리와 개방 정보를 바탕으로 안내합니다.",
      h1: "갓바위·선본사·동화사 문화 일주",
      h1En: "Gatbawi–Seonbonsa–Donghwasa cultural loop",
      leadKo:
        "팔공산에 함께 있는 갓바위(관봉 석조여래좌상), 선본사, 동화사를 하루에 둘러보는 문화 동선을 정리했습니다. 세 지점의 위치와 이동 거리를 안내합니다.",
      leadEn:
        "A one-day cultural loop of Gatbawi (Gwanbong Seokjo Yeorae Jwasang), Seonbonsa, and Donghwasa in Palgongsan — covering their locations and travel distances.",
      updated: "2026-11-01",
      sections: [
        {
          id: "spots",
          headingKo: "세 지점의 위치",
          headingEn: "Locations of the three spots",
          paragraphsKo: [
            "갓바위(관봉)는 팔공산 관봉에, 선본사는 경산 측(와촌면) 입구에, 동화사는 대구 측 팔공산 관광 지구에 있습니다. 두 사찰과 석불은 각각 별개 진입로를 가집니다.",
            "세 지점을 모두 돌 때는 대구 측(동화사·갓바위)과 경산 측(선본사)의 도로를 오가므로, 이동 시간을 넉넉히 잡으세요.",
          ],
          paragraphsEn: [
            "Gatbawi (Gwanbong) sits on Palgongsan's Gwanbong Peak, Seonbonsa is at the Gyeongsan-side (Wachon-myeon) entrance, and Donghwasa is in the Daegu-side Palgongsan tourist area. Each has a separate approach.",
            "Visiting all three means crossing between the Daegu side (Donghwasa, Gatbawi) and Gyeongsan side (Seonbonsa), so allow generous travel time.",
          ],
        },
        {
          id: "flow",
          headingKo: "권장 동선 흐름",
          headingEn: "Suggested flow",
          bulletsKo: [
            "동화사(대구 측) → 갓바위 대구 측(관암사) → 점심·카페 → 경산 측 선본사",
            "순서는 교통·주차 여건에 맞춰 조정",
            "각 지점의 개방 시간은 현장 안내에서 확인",
          ],
          bulletsEn: [
            "Donghwasa (Daegu side) → Gatbawi Daegu side (Gwanamsa) → lunch/café → Seonbonsa (Gyeongsan side)",
            "Adjust the order to transit and parking conditions",
            "Check each spot's opening hours on site",
          ],
        },
        {
          id: "care",
          headingKo: "주의사항",
          headingEn: "Cautions",
          paragraphsKo: [
            "이 안내는 일반적인 지리 안내이며, 정확한 개방 시간과 통제는 현장 표지판·탐방안내소에서 확인하세요.",
            "갓바위 정상까지는 가파른 계단이 이어지므로, 문화 일주와 등산을 함께 계획할 때는 체력과 시간을 고려하세요.",
          ],
          paragraphsEn: [
            "This is general geographic guidance; confirm exact opening hours and restrictions on site or at the visitor centre.",
            "The climb to Gatbawi's peak involves steep stairs, so consider fitness and time when combining the cultural loop with the hike.",
          ],
          calloutKo:
            "세 지점의 운영·개방 정보는 계절과 국립공원 통제에 따라 바뀝니다. 방문 전 현장 확인을 먼저 하세요.",
          calloutEn:
            "Operation and opening information for the three spots change with season and KNPS restrictions. Confirm before going.",
        },
      ],
      faqs: [
        {
          qKo: "갓바위·선본사·동화사를 하루에 다 돌 수 있나요?",
          aKo: "네. 세 지점이 팔공산 일대에 모여 있지만 진입로가 달라 이동 시간이 필요합니다. 체력과 교통을 고려해 계획하세요.",
          qEn: "Can I visit all three in one day?",
          aEn: "Yes. The three cluster around Palgongsan, but they have separate approaches, so travel time is needed. Plan with fitness and transit in mind.",
        },
        {
          qKo: "갓바위와 동화사는 같은 곳인가요?",
          aKo: "아닙니다. 갓바위(관봉)와 동화사는 팔공산 내 별개 지점이며 각각 다른 진입로를 가집니다.",
          qEn: "Are Gatbawi and Donghwasa the same place?",
          aEn: "No. Gatbawi (Gwanbong) and Donghwasa are separate spots within Palgongsan, each with its own approach.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi–Seonbonsa–Donghwasa Cultural Loop | Gatbawi Daegu Travel Guide",
      metaDescription:
        "A one-day cultural loop of Gatbawi, Seonbonsa, and Donghwasa in Palgongsan — based on real geography and opening information.",
      h1: "Gatbawi–Seonbonsa–Donghwasa Cultural Loop",
      h1En: "Gatbawi–Seonbonsa–Donghwasa Cultural Loop",
      leadEn:
        "A one-day cultural loop of Gatbawi (Gwanbong Seokjo Yeorae Jwasang), Seonbonsa, and Donghwasa in Palgongsan — covering their locations and travel distances.",
      updated: "2026-11-01",
      sections: [
        {
          id: "spots",
          headingEn: "Locations of the three spots",
          paragraphsEn: [
            "Gatbawi (Gwanbong) sits on Palgongsan's Gwanbong Peak, Seonbonsa is at the Gyeongsan-side (Wachon-myeon) entrance, and Donghwasa is in the Daegu-side Palgongsan tourist area. Each has a separate approach.",
            "Visiting all three means crossing between the Daegu side (Donghwasa, Gatbawi) and Gyeongsan side (Seonbonsa), so allow generous travel time.",
          ],
        },
        {
          id: "flow",
          headingEn: "Suggested flow",
          bulletsEn: [
            "Donghwasa (Daegu side) → Gatbawi Daegu side (Gwanamsa) → lunch/café → Seonbonsa (Gyeongsan side)",
            "Adjust the order to transit and parking conditions",
            "Check each spot's opening hours on site",
          ],
        },
        {
          id: "care",
          headingEn: "Cautions",
          paragraphsEn: [
            "This is general geographic guidance; confirm exact opening hours and restrictions on site or at the visitor centre.",
            "The climb to Gatbawi's peak involves steep stairs, so consider fitness and time when combining the cultural loop with the hike.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can I visit all three in one day?",
          aEn: "Yes. The three cluster around Palgongsan, but they have separate approaches, so travel time is needed. Plan with fitness and transit in mind.",
          qKo: "갓바위·선본사·동화사를 하루에 다 돌 수 있나요?",
          aKo: "네. 세 지점이 팔공산 일대에 모여 있지만 진입로가 달라 이동 시간이 필요합니다.",
        },
        {
          qEn: "Are Gatbawi and Donghwasa the same place?",
          aEn: "No. Gatbawi (Gwanbong) and Donghwasa are separate spots within Palgongsan, each with its own approach.",
          qKo: "갓바위와 동화사는 같은 곳인가요?",
          aKo: "아닙니다. 별개 지점이며 각각 다른 진입로를 가집니다.",
        },
      ],
    },
  },
  {
    slug: "itineraries/no-summit-alternative",
    group: "itineraries",
    priority: "P1",
    related: ["routes/for-seniors", "routes/with-children", "routes/accessibility", "itineraries/seniors-day-out"],
    ko: {
      metaTitle: "갓바위 정상에 오르지 않는 대안 일정 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "계단 오르기가 어려운 분을 위한 갓바위 대안 동선을 정리했습니다. 입구 경내 관람, 사찰 카페·식당, 주변 문화 지점으로 방문을 즐깁니다.",
      h1: "갓바위 정상에 오르지 않는 대안 일정",
      h1En: "No-summit alternative itinerary",
      leadKo:
        "가파른 돌계단 오르기가 어려운 어르신·아이 동반·휠체어 이용자 등을 위한 대안 동선을 정리했습니다. 정상 대신 입구 경내와 주변에서 방문을 즐깁니다.",
      leadEn:
        "An alternative plan for those who find the steep stone stairs hard — seniors, families with children, wheelchair users — enjoying the visit at the entrance precinct and surroundings instead of the summit.",
      updated: "2026-11-01",
      sections: [
        {
          id: "why",
          headingKo: "왜 대안이 필요한가",
          headingEn: "Why an alternative",
          paragraphsKo: [
            "갓바위 정상(관봉)까지는 가파른 돌계단과 비포장 산길이 이어져, 체력이나 이동 약자에게는 부담이 됩니다. ‘정상까지 무리 없이 갈 수 있다’는 보장은 없습니다.",
            "정상에 오르지 않아도, 입구 경내 산책과 사찰 관람만으로 방문의 의미를 충분히 누릴 수 있습니다.",
          ],
          paragraphsEn: [
            "To the peak (Gwanbong), steep stone stairs and unpaved mountain paths continue, which can burden those with lower fitness or reduced mobility. We cannot guarantee a trouble-free climb to the summit.",
            "Even without reaching the summit, the entrance precinct walk and temple viewing alone fully satisfy the purpose of the visit.",
          ],
        },
        {
          id: "plan",
          headingKo: "대안 동선 구성",
          headingEn: "Alternative plan",
          bulletsKo: [
            "대구 측(관암사) 또는 경산 측(선본사) 입구 경내 산책",
            "사찰 카페·식당에서 휴식",
            "주변 문화 지점(동화사 등)이나 카페 동선으로 마무리",
          ],
          bulletsEn: [
            "Precinct walk at the Daegu-side (Gwanamsa) or Gyeongsan-side (Seonbonsa) entrance",
            "Rest at a temple café or restaurant",
            "Finish with nearby cultural spots (e.g. Donghwasa) or a café route",
          ],
        },
        {
          id: "care",
          headingKo: "주의사항",
          headingEn: "Cautions",
          paragraphsKo: [
            "대구 측과 경산 측은 별개 진입로입니다. 한쪽을 정해 계획하세요.",
            "접근성(단차·경사·장애인 화장실)은 현장 사정과 국립공원 통제에 따라 바뀝니다. ‘갓바위 휠체어·유모차 접근’ 페이지도 참고하세요.",
          ],
          paragraphsEn: [
            "The Daegu and Gyeongsan sides are separate approaches. Choose one side and plan accordingly.",
            "Accessibility (steps, slopes, accessible toilets) changes with on-site conditions and KNPS restrictions. See also the 'Gatbawi wheelchair & stroller access' page.",
          ],
          calloutKo:
            "본인의 컨디션과 당일 날씨·통제를 가장 먼저 확인하세요. 안전이 오르는 것보다 우선합니다.",
          calloutEn:
            "Check your own condition and the day's weather and restrictions first. Safety comes before reaching the top.",
        },
      ],
      faqs: [
        {
          qKo: "정상에 못 가면 방문 가치가 없나요?",
          aKo: "아닙니다. 입구 경내 산책과 사찰 관람만으로도 충분한 방문이 가능합니다. 무리한 등반보다 안전을 우선하세요.",
          qEn: "Is the visit worthless if I can't reach the summit?",
          aEn: "No. The entrance precinct walk and temple viewing alone make for a worthwhile visit. Prioritise safety over the climb.",
        },
        {
          qKo: "휠체어로 갈 수 있는 곳은 어디까지인가요?",
          aKo: "정상까지는 어렵고, 입구 경내 관람까지만 계획하세요. 자세한 접근은 ‘휠체어·유모차 접근’ 페이지를 보세요.",
          qEn: "How far can a wheelchair go?",
          aEn: "The summit is hard; plan only up to the entrance precinct. For details, see the 'wheelchair & stroller access' page.",
        },
      ],
    },
    en: {
      metaTitle: "No-summit Alternative Itinerary | Gatbawi Daegu Travel Guide",
      metaDescription:
        "An alternative Gatbawi plan for those who find the stairs hard — entrance precinct, temple café/restaurant, and nearby cultural spots.",
      h1: "No-summit Alternative Itinerary",
      h1En: "No-summit Alternative Itinerary",
      leadEn:
        "An alternative plan for those who find the steep stone stairs hard — seniors, families with children, wheelchair users — enjoying the visit at the entrance precinct and surroundings.",
      updated: "2026-11-01",
      sections: [
        {
          id: "why",
          headingEn: "Why an alternative",
          paragraphsEn: [
            "To the peak (Gwanbong), steep stone stairs and unpaved mountain paths continue, which can burden those with lower fitness or reduced mobility. We cannot guarantee a trouble-free climb to the summit.",
            "Even without reaching the summit, the entrance precinct walk and temple viewing alone fully satisfy the purpose of the visit.",
          ],
        },
        {
          id: "plan",
          headingEn: "Alternative plan",
          bulletsEn: [
            "Precinct walk at the Daegu-side (Gwanamsa) or Gyeongsan-side (Seonbonsa) entrance",
            "Rest at a temple café or restaurant",
            "Finish with nearby cultural spots (e.g. Donghwasa) or a café route",
          ],
        },
        {
          id: "care",
          headingEn: "Cautions",
          paragraphsEn: [
            "The Daegu and Gyeongsan sides are separate approaches. Choose one side and plan accordingly.",
            "Accessibility (steps, slopes, accessible toilets) changes with on-site conditions and KNPS restrictions. See also the 'Gatbawi wheelchair & stroller access' page.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Is the visit worthless if I can't reach the summit?",
          aEn: "No. The entrance precinct walk and temple viewing alone make for a worthwhile visit. Prioritise safety over the climb.",
          qKo: "정상에 못 가면 방문 가치가 없나요?",
          aKo: "아닙니다. 입구 경내 산책만으로도 충분합니다.",
        },
        {
          qEn: "How far can a wheelchair go?",
          aEn: "The summit is hard; plan only up to the entrance precinct. For details, see the 'wheelchair & stroller access' page.",
          qKo: "휠체어로 갈 수 있는 곳은 어디까지인가요?",
          aKo: "입구 경내 관람까지만 계획하세요.",
        },
      ],
    },
  },
  {
    slug: "itineraries/family-day-out",
    group: "itineraries",
    priority: "P1",
    related: ["routes/with-children", "routes/accessibility", "itineraries/no-summit-alternative", "nearby/cafes"],
    ko: {
      metaTitle: "갓바위 가족 당일 나들이 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "아이와 함께 갓바위를 방문하는 당일 나들이 동선을 정리했습니다. 안전, 식사, 휴식, 대안 코스를 안내합니다.",
      h1: "갓바위 가족 당일 나들이",
      h1En: "Gatbawi family day out",
      leadKo:
        "아이와 함께 갓바위를 방문하는 당일 나들이 동선을 정리했습니다. 안전 수칙과 식사·휴식, 정상 대신 대안 코스를 안내합니다.",
      leadEn:
        "A family day-out plan for visiting Gatbawi with children — safety, meals, rest, and an alternative route instead of the summit.",
      updated: "2026-11-01",
      sections: [
        {
          id: "flow",
          headingKo: "권장 동선 흐름",
          headingEn: "Suggested flow",
          paragraphsKo: [
            "집 → 갓바위 대구 측 또는 경산 측 입구 → 입구 경내 산책·사찰 관람 → 가벼운 식사·카페 → (체력에 따라) 정상 왕복 또는 대안 동선 → 귀가.",
            "두 측면 중 어디서 오를지 먼저 정하고, 대중교통은 ‘대구 시내버스’ ‘401번 버스’ ‘경산 교통’ 페이지에서 확인하세요.",
          ],
          paragraphsEn: [
            "Home → Gatbawi Daegu-side or Gyeongsan-side entrance → entrance precinct walk & temple viewing → light meal/café → (by fitness) summit round trip or alternative route → return.",
            "Decide which side to ascend first; for transit see the 'Daegu city buses', 'route 401', and 'Gyeongsan transit' pages.",
          ],
        },
        {
          id: "kids",
          headingKo: "아이 동반 팁",
          headingEn: "Tips with kids",
          bulletsKo: [
            "유아는 유모차보다 캐리어·배냇등 권장",
            "가파른 계단 구간은 아이 손 잡고 천천히",
            "짧은 휴식과 먹거리 동선으로 흥미 유지",
          ],
          bulletsEn: [
            "For infants, a carrier beats a stroller",
            "Hold hands and go slow on steep stair sections",
            "Mix in short rests and a snack stop to keep interest",
          ],
        },
        {
          id: "care",
          headingKo: "주의사항",
          headingEn: "Cautions",
          paragraphsKo: [
            "화장실과 식수 위치는 ‘갓바위 화장실·쉼터·식수’ 페이지에서 확인하세요. 성수기·더위·추위에는 당일 통제와 기상청 예보를 먼저 확인하세요.",
            "아이 체력에 따라 정상 대신 대안 동선(‘정상에 오르지 않는 대안 일정’)도 고려하세요.",
          ],
          paragraphsEn: [
            "Check restroom and water locations on the 'Gatbawi toilets, rest areas, water' page. On peak days, heat, or cold, check KNPS restrictions and the KMA forecast first.",
            "Depending on the child's stamina, consider the alternative route (the 'no-summit alternative itinerary') instead of the summit.",
          ],
          calloutKo:
            "아이 안전이 최우선입니다. 돌계단·낭떠러지 구간에서는 손을 놓지 마세요.",
          calloutEn:
            "Child safety comes first. On stair and cliff-edge sections, keep a hand on your child at all times.",
        },
      ],
      faqs: [
        {
          qKo: "아이와 갓바위 당일 나들이 가능한가요?",
          aKo: "네. 입구 경내 산책과 가벼운 식사·카페 위주로도 충분합니다. 체력에 따라 정상까지 고려하세요.",
          qEn: "Can I do a Gatbawi day out with kids?",
          aEn: "Yes. A precinct walk with a light meal and café is enough. Add the summit by fitness.",
        },
        {
          qKo: "유모차를 가도 되나요?",
          aKo: "정상까지 돌계단이 많아 유모차는 어렵습니다. 캐리어를 권장하며, 접근 대안은 ‘휠체어·유모차 접근’ 페이지를 보세요.",
          qEn: "Can I bring a stroller?",
          aEn: "Many stone stairs make a stroller impractical; a carrier is recommended. See the 'wheelchair & stroller access' page.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Family Day Out | Gatbawi Daegu Travel Guide",
      metaDescription:
        "A family day-out plan for Gatbawi with children — safety, meals, rest, and an alternative route instead of the summit.",
      h1: "Gatbawi Family Day Out",
      h1En: "Gatbawi Family Day Out",
      leadEn:
        "A family day-out plan for visiting Gatbawi with children — safety, meals, rest, and an alternative route instead of the summit.",
      updated: "2026-11-01",
      sections: [
        {
          id: "flow",
          headingEn: "Suggested flow",
          paragraphsEn: [
            "Home → Gatbawi Daegu-side or Gyeongsan-side entrance → entrance precinct walk & temple viewing → light meal/café → (by fitness) summit round trip or alternative route → return.",
            "Decide which side to ascend first; for transit see the 'Daegu city buses', 'route 401', and 'Gyeongsan transit' pages.",
          ],
        },
        {
          id: "kids",
          headingEn: "Tips with kids",
          bulletsEn: [
            "For infants, a carrier beats a stroller",
            "Hold hands and go slow on steep stair sections",
            "Mix in short rests and a snack stop to keep interest",
          ],
        },
        {
          id: "care",
          headingEn: "Cautions",
          paragraphsEn: [
            "Check restroom and water locations on the 'Gatbawi toilets, rest areas, water' page. On peak days, heat, or cold, check KNPS restrictions and the KMA forecast first.",
            "Depending on the child's stamina, consider the alternative route (the 'no-summit alternative itinerary') instead of the summit.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can I do a Gatbawi day out with kids?",
          aEn: "Yes. A precinct walk with a light meal and café is enough. Add the summit by fitness.",
          qKo: "아이와 갓바위 당일 나들이 가능한가요?",
          aKo: "네. 입구 경내 산책과 가벼운 식사·카페 위주로도 충분합니다.",
        },
        {
          qEn: "Can I bring a stroller?",
          aEn: "Many stone stairs make a stroller impractical; a carrier is recommended. See the 'wheelchair & stroller access' page.",
          qKo: "유모차를 가도 되나요?",
          aKo: "정상까지 돌계단이 많아 유모차는 어렵습니다. 캐리어를 권장합니다.",
        },
      ],
    },
  },
  {
    slug: "itineraries/seniors-day-out",
    group: "itineraries",
    priority: "P1",
    related: ["routes/for-seniors", "routes/accessibility", "itineraries/no-summit-alternative", "itineraries/daegu-half-day"],
    ko: {
      metaTitle: "갓바위 어르신 당일 나들이 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "어르신이 갓바위를 방문하는 당일 나들이 동선을 정리했습니다. 무릎 보호, 휴식, 정상 대신 대안 코스를 안내합니다.",
      h1: "갓바위 어르신 당일 나들이",
      h1En: "Gatbawi seniors day out",
      leadKo:
        "어르신이 갓바위를 방문하는 당일 나들이 동선을 정리했습니다. 무릎 보호와 휴식, 그리고 정상 대신 누릴 수 있는 대안을 안내합니다.",
      leadEn:
        "A day-out plan for seniors visiting Gatbawi — knee care, rest, and alternatives to enjoy instead of the summit.",
      updated: "2026-11-01",
      sections: [
        {
          id: "flow",
          headingKo: "권장 동선 흐름",
          headingEn: "Suggested flow",
          paragraphsKo: [
            "집 → 갓바위 대구 측 또는 경산 측 입구 → 입구 경내 산책·사찰 관람 → 사찰 카페·식당에서 휴식 → (여력이 되면) 짧은 오르막 또는 대안 동선 → 귀가.",
            "대중교통 이용 시 ‘대구 시내버스’ ‘401번 버스’ ‘경산 교통’ 페이지에서 편과 배치를 확인하세요.",
          ],
          paragraphsEn: [
            "Home → Gatbawi Daegu-side or Gyeongsan-side entrance → entrance precinct walk & temple viewing → rest at a temple café/restaurant → (if able) a short climb or alternative route → return.",
            "For transit, check routes and frequency on the 'Daegu city buses', 'route 401', and 'Gyeongsan transit' pages.",
          ],
        },
        {
          id: "care",
          headingKo: "무릎 보호와 휴식",
          headingEn: "Knee care and rest",
          bulletsKo: [
            "스틱·지팡이로 무릎 부담 분산",
            "구간마다 벤치·쉼터에서 충분히 휴식",
            "수분 섭취와 동행자와 함께 이동",
          ],
          bulletsEn: [
            "Use poles or a cane to spread knee load",
            "Rest fully at benches/rest areas each section",
            "Stay hydrated and move with a companion",
          ],
        },
        {
          id: "alt",
          headingKo: "정상 대신 대안",
          headingEn: "Alternative to the summit",
          paragraphsKo: [
            "계단 오르기가 어렵다면, 입구 경내 관람과 사찰 카페·식당 동선만으로도 충분합니다. ‘정상에 오르지 않는 대안 일정’ 페이지도 참고하세요.",
            "날씨가 덥거나 미끄러운 날에는 무리한 등반보다 안전을 우선하세요.",
          ],
          paragraphsEn: [
            "If the stairs are hard, the precinct walk and a temple café/restaurant route are enough. See also the 'no-summit alternative itinerary' page.",
            "On hot or slippery days, prioritise safety over a forced climb.",
          ],
          calloutKo:
            "‘정상까지 무리 없이 갈 수 있다’는 보장은 없습니다. 본인 컨디션과 당일 날씨·통제를 먼저 확인하세요.",
          calloutEn:
            "We cannot guarantee a trouble-free climb to the summit. Check your condition and the day's weather and restrictions first.",
        },
      ],
      faqs: [
        {
          qKo: "어르신도 갓바위 당일 나들이가 가능한가요?",
          aKo: "네. 입구 경내 산책과 사찰 카페·식당 동선만으로도 충분합니다. 체력에 맞춰 천천히 움직이세요.",
          qEn: "Can seniors do a Gatbawi day out?",
          aEn: "Yes. The precinct walk and a temple café/restaurant route are enough. Move slowly to your fitness.",
        },
        {
          qKo: "정상까지 강권하나요?",
          aKo: "아니요. 가파른 계단이 많아 무리하지 않게 하세요. 어려우면 입구 경내 관람으로 대체합니다.",
          qEn: "Do you recommend the summit for seniors?",
          aEn: "No. With many steep stairs, don't push. Substitute with the precinct walk if difficult.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Seniors Day Out | Gatbawi Daegu Travel Guide",
      metaDescription:
        "A day-out plan for seniors visiting Gatbawi — knee care, rest, and alternatives to enjoy instead of the summit.",
      h1: "Gatbawi Seniors Day Out",
      h1En: "Gatbawi Seniors Day Out",
      leadEn:
        "A day-out plan for seniors visiting Gatbawi — knee care, rest, and alternatives to enjoy instead of the summit.",
      updated: "2026-11-01",
      sections: [
        {
          id: "flow",
          headingEn: "Suggested flow",
          paragraphsEn: [
            "Home → Gatbawi Daegu-side or Gyeongsan-side entrance → entrance precinct walk & temple viewing → rest at a temple café/restaurant → (if able) a short climb or alternative route → return.",
            "For transit, check routes and frequency on the 'Daegu city buses', 'route 401', and 'Gyeongsan transit' pages.",
          ],
        },
        {
          id: "care",
          headingEn: "Knee care and rest",
          bulletsEn: [
            "Use poles or a cane to spread knee load",
            "Rest fully at benches/rest areas each section",
            "Stay hydrated and move with a companion",
          ],
        },
        {
          id: "alt",
          headingEn: "Alternative to the summit",
          paragraphsEn: [
            "If the stairs are hard, the precinct walk and a temple café/restaurant route are enough. See also the 'no-summit alternative itinerary' page.",
            "On hot or slippery days, prioritise safety over a forced climb.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can seniors do a Gatbawi day out?",
          aEn: "Yes. The precinct walk and a temple café/restaurant route are enough. Move slowly to your fitness.",
          qKo: "어르신도 갓바위 당일 나들이가 가능한가요?",
          aKo: "네. 입구 경내 산책만으로도 충분합니다.",
        },
        {
          qEn: "Do you recommend the summit for seniors?",
          aEn: "No. With many steep stairs, don't push. Substitute with the precinct walk if difficult.",
          qKo: "정상까지 강권하나요?",
          aKo: "아니요. 무리하지 않게 하세요.",
        },
      ],
    },
  },
  {
    slug: "itineraries/photo-spot-loop",
    group: "itineraries",
    priority: "P2",
    related: ["season/autumn", "itineraries/daegu-half-day", "heritage/gwanbong-stone-buddha", "nearby/cafes"],
    ko: {
      metaTitle: "갓바위 사진 명소 동선 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위와 팔공산 일대의 사진 명소 동선을 정리했습니다. 계절별 경치와 촬영 시 주의사항을 안내합니다.",
      h1: "갓바위 사진 명소 동선",
      h1En: "Gatbawi photo-spot loop",
      leadKo:
        "갓바위(관봉 석조여래좌상)와 팔공산 일대에서 사진을 즐기려는 분을 위한 동선을 정리했습니다. 단풍·설경 등 계절별 경치와 촬영 시 주의를 안내합니다.",
      leadEn:
        "A route for those who want to photograph Gatbawi (Gwanbong Seokjo Yeorae Jwasang) and Palgongsan — seasonal scenery such as foliage and snow, with shooting cautions.",
      updated: "2026-11-01",
      sections: [
        {
          id: "spots",
          headingKo: "추천 동선과 시기",
          headingEn: "Recommended route and timing",
          paragraphsKo: [
            "갓바위 대구 측(관암사) 입구에서 정상(관봉)까지 오르며, 입구 경내와 사찰, 그리고 팔공산 전망 지점에서 사진을 담을 수 있습니다.",
            "계절별 경치는 ‘갓바위 단풍’ ‘갓바위 겨울’ 페이지에서 정리했습니다. 성수기에는 방문객이 많아 인물 사진보다 풍경 위주로 여유 있게 촬영하세요.",
          ],
          paragraphsEn: [
            "From the Gatbawi Daegu-side (Gwanamsa) entrance up to the peak (Gwanbong), you can photograph the entrance precinct, temples, and Palgongsan viewpoints.",
            "Seasonal scenery is covered on the 'Gatbawi autumn foliage' and 'Gatbawi winter' pages. In peak season crowds are large, so favour landscapes over portraits.",
          ],
        },
        {
          id: "tips",
          headingKo: "촬영 팁",
          headingEn: "Shooting tips",
          bulletsKo: [
            "갓바위 불상과 갓 모양 돌의 관계가 보이도록 각도 잡기",
            "빛이 부드러운 오전·오후 시간대 활용",
            "삼각대 사용 시 통행에 방해가 되지 않게",
          ],
          bulletsEn: [
            "Frame the relationship between the Buddha and the hat-shaped stone",
            "Use soft morning/afternoon light",
            "Keep tripods clear of the walking path",
          ],
        },
        {
          id: "care",
          headingKo: "주의사항",
          headingEn: "Cautions",
          paragraphsKo: [
            "촬영 중 이동 안전(계단·낭떠러지)을 우선하세요. 국립공원 통제와 기상청 예보는 출발 전에 확인하세요.",
            "성수기와 일몰 무렵에는 하산 시간과 조명을 함께 고려하세요.",
          ],
          paragraphsEn: [
            "Prioritise moving safety (stairs, edges) while shooting. Check KNPS restrictions and the KMA forecast before departure.",
            "Around sunset and peak season, consider descent time and light together.",
          ],
          calloutKo:
            "타인의 초상권과 사찰 내 촬영 예절을 존중하세요. 촬영만을 목적으로 무리한 등반은 삼가세요.",
          calloutEn:
            "Respect others' portrait rights and temple photography etiquette. Avoid over-climbing just to shoot.",
        },
      ],
      faqs: [
        {
          qKo: "갓바위는 언제 사진이 예쁜가요?",
          aKo: "단풍철(가을)과 설경(겨울)이 인기가 많습니다. 구체적 시기는 ‘갓바위 단풍’ ‘갓바위 겨울’ 페이지에서 확인하세요.",
          qEn: "When is Gatbawi photogenic?",
          aEn: "Autumn foliage and winter snow are popular. See the 'Gatbawi autumn' and 'Gatbawi winter' pages for timing.",
        },
        {
          qKo: "드론 촬영이 가능한가요?",
          aKo: "국립공원 내 드론 촬영은 통제 대상일 수 있습니다. 현장 안내와 국립공원 규정을 먼저 확인하세요.",
          qEn: "Is drone photography allowed?",
          aEn: "Drone use in national parks may be restricted. Check on-site guidance and KNPS rules first.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Photo-spot Loop | Gatbawi Daegu Travel Guide",
      metaDescription:
        "A route for photographing Gatbawi and Palgongsan — seasonal scenery and shooting cautions.",
      h1: "Gatbawi Photo-spot Loop",
      h1En: "Gatbawi Photo-spot Loop",
      leadEn:
        "A route for those who want to photograph Gatbawi and Palgongsan — seasonal scenery and shooting cautions.",
      updated: "2026-11-01",
      sections: [
        {
          id: "spots",
          headingEn: "Recommended route and timing",
          paragraphsEn: [
            "From the Gatbawi Daegu-side (Gwanamsa) entrance up to the peak (Gwanbong), you can photograph the entrance precinct, temples, and Palgongsan viewpoints.",
            "Seasonal scenery is covered on the 'Gatbawi autumn foliage' and 'Gatbawi winter' pages. In peak season crowds are large, so favour landscapes over portraits.",
          ],
        },
        {
          id: "tips",
          headingEn: "Shooting tips",
          bulletsEn: [
            "Frame the relationship between the Buddha and the hat-shaped stone",
            "Use soft morning/afternoon light",
            "Keep tripods clear of the walking path",
          ],
        },
        {
          id: "care",
          headingEn: "Cautions",
          paragraphsEn: [
            "Prioritise moving safety (stairs, edges) while shooting. Check KNPS restrictions and the KMA forecast before departure.",
            "Around sunset and peak season, consider descent time and light together.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "When is Gatbawi photogenic?",
          aEn: "Autumn foliage and winter snow are popular. See the 'Gatbawi autumn' and 'Gatbawi winter' pages for timing.",
          qKo: "갓바위는 언제 사진이 예쁜가요?",
          aKo: "단풍철과 설경이 인기가 많습니다.",
        },
        {
          qEn: "Is drone photography allowed?",
          aEn: "Drone use in national parks may be restricted. Check on-site guidance and KNPS rules first.",
          qKo: "드론 촬영이 가능한가요?",
          aKo: "국립공원 내 드론 촬영은 통제 대상일 수 있습니다.",
        },
      ],
    },
  },
  {
    slug: "itineraries/sunset-return",
    group: "itineraries",
    priority: "P2",
    related: ["season/winter", "visit/crowds", "transport/return-transport", "transport/daegu-parking"],
    ko: {
      metaTitle: "갓바위 일몰·귀가 동선 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위 방문 후 일몰 시간과 귀가(막차·자차)를 고려한 동선을 정리했습니다. 안전한 하산과 교통을 안내합니다.",
      h1: "갓바위 일몰·귀가 동선",
      h1En: "Gatbawi sunset & return plan",
      leadKo:
        "갓바위 방문 후 일몰 시간과 귀가(대중교통 막차·자차)를 고려한 동선을 정리했습니다. 안전한 하산과 마지막 교통편을 안내합니다.",
      leadEn:
        "A plan for after a Gatbawi visit that accounts for sunset time and the return (last transit connection / by car) — safe descent and final transport.",
      updated: "2026-11-01",
      sections: [
        {
          id: "time",
          headingKo: "일몰과 하산 시간",
          headingEn: "Sunset and descent time",
          paragraphsKo: [
            "해가 짧은 계절에는 일몰 전 하산을 끝내는 것이 안전합니다. 계절별 일몰 시각은 기상청 예보를 확인하세요.",
            "정상 부근은 해가 지면 어둡고 추워지므로, 여유 있는 시간대에 하산을 시작하세요.",
          ],
          paragraphsEn: [
            "In short-day seasons, finish descent before sunset for safety. Check the seasonal sunset time on the KMA forecast.",
            "Near the peak it gets dark and cold after sundown, so start the descent with a comfortable buffer.",
          ],
        },
        {
          id: "transit",
          headingKo: "귀가 교통",
          headingEn: "Return transport",
          bulletsKo: [
            "대중교통 이용 시 막차·배치 간격을 미리 확인",
            "자차는 주차장 혼잡과 산길 야간 운전 주의",
            "귀가 동선은 ‘갓바위 귀가·막차’ 페이지에서 상세히",
          ],
          bulletsEn: [
            "If using transit, check the last connection and frequency in advance",
            "By car, watch parking congestion and night mountain driving",
            "The return route is detailed on the 'Gatbawi return & last transit' page",
          ],
        },
        {
          id: "care",
          headingKo: "주의사항",
          headingEn: "Cautions",
          paragraphsKo: [
            "야간 산길은 시야 확보와 안전이 가장 중요합니다. 손전등과 여분 옷을 준비하세요.",
            "국립공원 통제와 기상청 예보는 출발 전에 반드시 확인하세요.",
          ],
          paragraphsEn: [
            "On night mountain trails, visibility and safety come first. Bring a flashlight and spare clothing.",
            "Always check KNPS restrictions and the KMA forecast before departure.",
          ],
          calloutKo:
            "일몰 후 하산은 사고 위험이 큽니다. 되도록 일몰 전에 산을 내려오세요.",
          calloutEn:
            "Descent after sunset carries high accident risk. Aim to be off the mountain before sunset.",
        },
      ],
      faqs: [
        {
          qKo: "일몰 보고 내려와도 되나요?",
          aKo: "가능은 하지만 야간 산길은 위험합니다. 손전등과 여분 옷을 갖추고, 되도록 일몰 전 하산을 권합니다.",
          qEn: "Can I watch sunset and descend?",
          aEn: "Possible, but night trails are risky. Bring a flashlight and spare clothes, and prefer descent before sunset.",
        },
        {
          qKo: "막차는 몇 시인가요?",
          aKo: "이 안내는 막차 시각을 제시하지 않습니다. ‘갓바위 귀가·막차’ 페이지와 현장 안내에서 확인하세요.",
          qEn: "What time is the last bus?",
          aEn: "This guide does not list last-bus times. See the 'Gatbawi return & last transit' page and on-site guidance.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Sunset & Return Plan | Gatbawi Daegu Travel Guide",
      metaDescription:
        "A plan after a Gatbawi visit accounting for sunset time and the return — safe descent and final transport.",
      h1: "Gatbawi Sunset & Return Plan",
      h1En: "Gatbawi Sunset & Return Plan",
      leadEn:
        "A plan for after a Gatbawi visit that accounts for sunset time and the return — safe descent and final transport.",
      updated: "2026-11-01",
      sections: [
        {
          id: "time",
          headingEn: "Sunset and descent time",
          paragraphsEn: [
            "In short-day seasons, finish descent before sunset for safety. Check the seasonal sunset time on the KMA forecast.",
            "Near the peak it gets dark and cold after sundown, so start the descent with a comfortable buffer.",
          ],
        },
        {
          id: "transit",
          headingEn: "Return transport",
          bulletsEn: [
            "If using transit, check the last connection and frequency in advance",
            "By car, watch parking congestion and night mountain driving",
            "The return route is detailed on the 'Gatbawi return & last transit' page",
          ],
        },
        {
          id: "care",
          headingEn: "Cautions",
          paragraphsEn: [
            "On night mountain trails, visibility and safety come first. Bring a flashlight and spare clothing.",
            "Always check KNPS restrictions and the KMA forecast before departure.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can I watch sunset and descend?",
          aEn: "Possible, but night trails are risky. Bring a flashlight and spare clothes, and prefer descent before sunset.",
          qKo: "일몰 보고 내려와도 되나요?",
          aKo: "가능은 하지만 야간 산길은 위험합니다. 손전등과 여분 옷을 갖추세요.",
        },
        {
          qEn: "What time is the last bus?",
          aEn: "This guide does not list last-bus times. See the 'Gatbawi return & last transit' page and on-site guidance.",
          qKo: "막차는 몇 시인가요?",
          aKo: "막차 시각은 제시하지 않습니다. 해당 페이지와 현장 안내를 보세요.",
        },
      ],
    },
  },
];
