import type { Topic } from "../topics";

export const routesTopics: Topic[] = [
  {
    slug: "routes/daegu-gwanamsa",
    group: "routes",
    priority: "P0",
    related: ["routes/gyeongsan-seonbonsa", "routes/daegu-vs-gyeongsan", "routes/stairs-difficulty", "transport/daegu-parking", "pilgrimage/seonbonsa"],
    ko: {
      metaTitle: "대구 관암사 갓바위 등산코스 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "대구 관암사 방면에서 갓바위(관봉)까지의 등산코스 입구 위치, 거리·경사·계단·난이도, 휴식 구간과 하산 동선을 정리했습니다.",
      h1: "대구 관암사 갓바위 등산코스",
      leadKo:
        "대구 측(동구) 관암사에서 출발해 갓바위(관봉)로 이어지는 공식 접근로의 입구 위치와 특성을 정리했습니다. 거리·계단·난이도와 휴식 구간을 안내합니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "entry",
          headingKo: "출발지와 입구 위치",
          headingEn: "Start and entry point",
          paragraphsKo: [
            "대구 측 갓바위 등산로는 동구 갓바위로 일대의 관암사 방면에서 시작됩니다. 네비게이션에는 ‘갓바위’ 또는 ‘관암사’를 목적지로 잡고, 실제 주차와 탐방안내소 위치를 현장 표지판에서 확인하세요.",
            "국립공원공단은 관암사(대구)—관봉 구간을 관련 탐방로로 안내합니다. 정확한 출발점 명칭과 위치는 국립공원 탐방안내소 안내를 따르세요.",
          ],
          paragraphsEn: [
            "The Daegu-side trail begins around the Gwanamsa area on Gatbawi-ro, Dong-gu. Set your navigation to 'Gatbawi' or 'Gwanamsa', then confirm the actual parking and visitor-centre location with on-site signage.",
            "The Korea National Park Service (KNPS) guides the Gwanamsa (Daegu)–Gwanbong section as a related trail. Follow the park's visitor-centre guidance for the exact start name and location.",
          ],
        },
        {
          id: "profile",
          headingKo: "거리·경사·계단·난이도",
          headingEn: "Distance, grade, stairs, difficulty",
          paragraphsKo: [
            "갓바위 정상(관봉)은 해발 약 850m 내외이며, 입구에서 정상까지는 비교적 짧지만 가파른 오르막이 이어집니다. 구간마다 돌계단이 많아 하체 부담이 큽니다.",
            "정확한 거리와 소요 시간은 날씨·체력·혼잡에 따라 달라집니다. 공식 안내 숫자는 국립공원 탐방안내소와 현장 표지판에서 확인하세요.",
          ],
          paragraphsEn: [
            "The peak (Gwanbong) is around 850 m above sea level, and from the entrance to the top is relatively short but a steep, sustained climb. Many stone stairs per section mean heavy load on the legs.",
            "Exact distance and time vary with weather, fitness, and crowding. Confirm official figures at the KNPS visitor centre and on on-site signboards.",
          ],
          calloutKo:
            "이 안내는 일반적인 안내이며, 당일의 입산 통제·날씨·산길 상태에 따라 실제 코스가 제한될 수 있습니다. 출발 전 국립공원 통제정보를 반드시 확인하세요.",
          calloutEn:
            "This is general guidance; the actual route may be restricted by same-day entry controls, weather, and trail conditions. Always check KNPS restrictions before departure.",
        },
        {
          id: "rest",
          headingKo: "휴식 구간과 하산",
          headingEn: "Rest points and descent",
          paragraphsKo: [
            "오르막 중간에 쉼터와 벤치가 있는 곳이 있지만, 위치와 개수는 구간에 따라 다릅니다. 무리하지 않게 자주 쉬며 오르세요.",
            "하산은 오른 길을 다시 내려오는 것이 일반적입니다. 내리막에서 미끄럼과 무릎 부담에 주의하고, 해가 짧은 계절에는 일몰 전 하산을 끝내세요.",
          ],
          paragraphsEn: [
            "Some sections have rest areas and benches mid-climb, but their location and number vary by route. Rest frequently and do not push too hard.",
            "Descent is generally back down the way you came. Watch for slips and knee strain on the way down, and finish before sunset in short-day seasons.",
          ],
        },
      ],
      faqs: [
        {
          qKo: "대구 측 등산로 시작점은 어디인가요?",
          aKo: "동구 갓바위로 일대의 관암사 방면입니다. 정확한 출발점은 국립공원 탐방안내소 안내를 따르세요.",
          qEn: "Where does the Daegu-side trail start?",
          aEn: "Around the Gwanamsa area on Gatbawi-ro, Dong-gu. Follow the KNPS visitor-centre guidance for the exact start.",
        },
        {
          qKo: "관암사 코스는 어려운가요?",
          aKo: "거리는 짧아도 가파른 오르막과 돌계단이 많아 체력이 필요합니다. 거리·난이도는 현장 표지판을 확인하세요.",
          qEn: "Is the Gwanamsa route difficult?",
          aEn: "Short in distance but steep with many stone stairs, so it demands fitness. Check signboards for distance and difficulty.",
        },
        {
          qKo: "주차는 어디에 하나요?",
          aKo: "대구 측 주차는 ‘대구 갓바위 주차장’ 페이지에서 위치와 이용 정보를 확인하세요.",
          qEn: "Where do I park?",
          aEn: "See the 'Daegu Gatbawi parking' page for location and usage information.",
        },
      ],
    },
    en: {
      metaTitle: "Daegu Gwanamsa to Gatbawi Trail | Gatbawi Daegu Travel Guide",
      metaDescription:
        "The Daegu-side (Gwanamsa) route to Gatbawi (Gwanbong): entry point, distance, grade, stairs, difficulty, rest points, and descent.",
      h1: "Daegu Gwanamsa to Gatbawi Trail",
      leadEn:
        "The entry point and character of the official Daegu-side (Dong-gu) approach via Gwanamsa to Gatbawi (Gwanbong). Distance, stairs, difficulty, and rest points.",
      updated: "2026-11-01",
      sections: [
        {
          id: "entry",
          headingEn: "Start and entry point",
          paragraphsEn: [
            "The Daegu-side trail begins around the Gwanamsa area on Gatbawi-ro, Dong-gu. Set your navigation to 'Gatbawi' or 'Gwanamsa', then confirm the actual parking and visitor-centre location with on-site signage.",
            "The Korea National Park Service (KNPS) guides the Gwanamsa (Daegu)–Gwanbong section as a related trail. Follow the park's visitor-centre guidance for the exact start name and location.",
          ],
        },
        {
          id: "profile",
          headingEn: "Distance, grade, stairs, difficulty",
          paragraphsEn: [
            "The peak (Gwanbong) is around 850 m above sea level, and from the entrance to the top is relatively short but a steep, sustained climb. Many stone stairs per section mean heavy load on the legs.",
            "Exact distance and time vary with weather, fitness, and crowding. Confirm official figures at the KNPS visitor centre and on on-site signboards.",
          ],
        },
        {
          id: "rest",
          headingEn: "Rest points and descent",
          paragraphsEn: [
            "Some sections have rest areas and benches mid-climb, but their location and number vary by route. Rest frequently and do not push too hard.",
            "Descent is generally back down the way you came. Watch for slips and knee strain on the way down, and finish before sunset in short-day seasons.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Where does the Daegu-side trail start?",
          aEn: "Around the Gwanamsa area on Gatbawi-ro, Dong-gu. Follow the KNPS visitor-centre guidance for the exact start.",
          qKo: "대구 측 등산로 시작점은 어디인가요?",
          aKo: "동구 갓바위로 일대의 관암사 방면입니다.",
        },
        {
          qEn: "Is the Gwanamsa route difficult?",
          aEn: "Short in distance but steep with many stone stairs, so it demands fitness. Check signboards for distance and difficulty.",
          qKo: "관암사 코스는 어려운가요?",
          aKo: "거리는 짧아도 가파른 오르막과 돌계단이 많아 체력이 필요합니다.",
        },
        {
          qEn: "Where do I park?",
          aEn: "See the 'Daegu Gatbawi parking' page for location and usage information.",
          qKo: "주차는 어디에 하나요?",
          aKo: "‘대구 갓바위 주차장’ 페이지에서 확인하세요.",
        },
      ],
    },
  },
  {
    slug: "routes/gyeongsan-seonbonsa",
    group: "routes",
    priority: "P0",
    related: ["routes/daegu-gwanamsa", "routes/daegu-vs-gyeongsan", "pilgrimage/seonbonsa", "transport/gyeongsan-parking"],
    ko: {
      metaTitle: "경산 선본사 갓바위 등산코스 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "경산 선본사 방면에서 갓바위(관봉)까지의 등산코스 입구 위치, 거리·경사·계단·난이도, 휴식 구간과 하산 동선을 정리했습니다.",
      h1: "경산 선본사 갓바위 등산코스",
      leadKo:
        "경산 측(와촌면) 선본사에서 출발해 갓바위(관봉)로 이어지는 공식 접근로의 입구 위치와 특성을 정리했습니다. 대구 측과 도로·산길이 다르므로 구분해 안내합니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "entry",
          headingKo: "출발지와 입구 위치",
          headingEn: "Start and entry point",
          paragraphsKo: [
            "경산 측 갓바위 등산로는 경산시 와촌면 갓바위로 일대의 선본사 방면에서 시작됩니다. 네비게이션에는 ‘선본사’ 또는 ‘갓바위’를 목적지로 잡고, 실제 주차와 탐방안내소 위치를 현장 표지판에서 확인하세요.",
            "국립공원공단은 선본사(경산)—관봉 구간을 관련 탐방로로 안내합니다. 정확한 출발점 명칭과 위치는 국립공원 탐방안내소 안내를 따르세요.",
          ],
          paragraphsEn: [
            "The Gyeongsan-side trail begins around the Seonbonsa area on Gatbawi-ro, Wachon-myeon, Gyeongsan. Set navigation to 'Seonbonsa' or 'Gatbawi', then confirm actual parking and the visitor centre on site.",
            "KNPS guides the Seonbonsa (Gyeongsan)–Gwanbong section as a related trail. Follow the park's visitor-centre guidance for the exact start name and location.",
          ],
        },
        {
          id: "profile",
          headingKo: "거리·경사·계단·난이도",
          headingEn: "Distance, grade, stairs, difficulty",
          paragraphsKo: [
            "정상(관봉)까지 해발 약 850m 내외이며, 입구에서 정상까지는 가파른 오르막과 돌계단이 이어집니다. 대구 측과 마찬가지로 하체 부담이 큰 구간입니다.",
            "두 측면의 도로 진입과 산길 형태가 다르므로, 경산에서 오를 때는 경산 주차장·교통 안내를 먼저 확인하세요.",
          ],
          paragraphsEn: [
            "To the peak (Gwanbong), around 850 m above sea level, with a steep climb and stone stairs from the entrance. Like the Daegu side, this is demanding on the legs.",
            "Road access and trail form differ between the two sides, so if ascending from Gyeongsan, check the Gyeongsan parking and transit guidance first.",
          ],
          calloutKo:
            "경산 측과 대구 측은 별개의 진입로입니다. ‘거리가 가깝다’는 이유로 두 측면의 식당·주차·교통을 섞어 설명하지 마세요. 각각 별도 안내로 보세요.",
          calloutEn:
            "The Gyeongsan and Daegu sides are separate approaches. Do not mix restaurants, parking, and transit between the two sides just because they are 'close'; treat each separately.",
        },
        {
          id: "rest",
          headingKo: "휴식 구간과 하산",
          headingEn: "Rest points and descent",
          paragraphsKo: [
            "오르막 중간에 쉼터가 있는 구간이 있으나 위치와 개수는 구간에 따라 다릅니다. 체력에 맞춰 자주 쉬며 오르세요.",
            "하산은 오른 길을 다시 내려오는 것이 일반적입니다. 내리막 안전과 일몰 시간을 고려해 동선을 짜세요.",
          ],
          paragraphsEn: [
            "Some sections have rest areas mid-climb, but location and number vary. Rest often according to your fitness.",
            "Descent is generally back down the way you came. Plan with downhill safety and sunset time in mind.",
          ],
        },
      ],
      faqs: [
        {
          qKo: "경산 측 등산로 시작점은 어디인가요?",
          aKo: "와촌면 갓바위로 일대의 선본사 방면입니다. 정확한 출발점은 국립공원 탐방안내소 안내를 따르세요.",
          qEn: "Where does the Gyeongsan-side trail start?",
          aEn: "Around the Seonbonsa area on Gatbawi-ro, Wachon-myeon. Follow KNPS visitor-centre guidance for the exact start.",
        },
        {
          qKo: "대구 측과 경산 측 중 어느 쪽이 쉬운가요?",
          aKo: "정확한 난이도 비교는 ‘대구 경산 코스 비교’ 페이지에서 정리했습니다. 체력과 출발지에 맞춰 선택하세요.",
          qEn: "Which side, Daegu or Gyeongsan, is easier?",
          aEn: "A detailed comparison is on the 'Daegu vs Gyeongsan routes' page. Choose based on fitness and where you depart from.",
        },
      ],
    },
    en: {
      metaTitle: "Gyeongsan Seonbonsa to Gatbawi Trail | Gatbawi Daegu Travel Guide",
      metaDescription:
        "The Gyeongsan-side (Seonbonsa) route to Gatbawi (Gwanbong): entry point, distance, grade, stairs, difficulty, rest points, and descent.",
      h1: "Gyeongsan Seonbonsa to Gatbawi Trail",
      leadEn:
        "The entry point and character of the official Gyeongsan-side (Wachon-myeon) approach via Seonbonsa. Roads and trails differ from the Daegu side.",
      updated: "2026-11-01",
      sections: [
        {
          id: "entry",
          headingEn: "Start and entry point",
          paragraphsEn: [
            "The Gyeongsan-side trail begins around the Seonbonsa area on Gatbawi-ro, Wachon-myeon, Gyeongsan. Set navigation to 'Seonbonsa' or 'Gatbawi', then confirm actual parking and the visitor centre on site.",
            "KNPS guides the Seonbonsa (Gyeongsan)–Gwanbong section as a related trail. Follow the park's visitor-centre guidance for the exact start name and location.",
          ],
        },
        {
          id: "profile",
          headingEn: "Distance, grade, stairs, difficulty",
          paragraphsEn: [
            "To the peak (Gwanbong), around 850 m above sea level, with a steep climb and stone stairs from the entrance. Like the Daegu side, this is demanding on the legs.",
            "Road access and trail form differ between the two sides, so if ascending from Gyeongsan, check the Gyeongsan parking and transit guidance first.",
          ],
        },
        {
          id: "rest",
          headingEn: "Rest points and descent",
          paragraphsEn: [
            "Some sections have rest areas mid-climb, but location and number vary. Rest often according to your fitness.",
            "Descent is generally back down the way you came. Plan with downhill safety and sunset time in mind.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Where does the Gyeongsan-side trail start?",
          aEn: "Around the Seonbonsa area on Gatbawi-ro, Wachon-myeon. Follow KNPS visitor-centre guidance for the exact start.",
          qKo: "경산 측 등산로 시작점은 어디인가요?",
          aKo: "와촌면 갓바위로 일대의 선본사 방면입니다.",
        },
        {
          qEn: "Which side, Daegu or Gyeongsan, is easier?",
          aEn: "A detailed comparison is on the 'Daegu vs Gyeongsan routes' page. Choose based on fitness and where you depart from.",
          qKo: "대구 측과 경산 측 중 어느 쪽이 쉬운가요?",
          aKo: "‘대구 경산 코스 비교’ 페이지에서 정리했습니다.",
        },
      ],
    },
  },
  {
    slug: "routes/daegu-vs-gyeongsan",
    group: "routes",
    priority: "P0",
    related: ["routes/daegu-gwanamsa", "routes/gyeongsan-seonbonsa", "transport/daegu-parking", "transport/gyeongsan-parking"],
    ko: {
      metaTitle: "갓바위 대구 경산 코스 비교 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위 대구 관암사 방면과 경산 선본사 방면의 차이를 입구 위치, 교통·주차, 거리·난이도, 누구에게 적합한지로 비교했습니다.",
      h1: "갓바위 대구 경산 코스 비교",
      leadKo:
        "갓바위로 향하는 두 공식 접근로인 대구 관암사 방면과 경산 선본사 방면을 입구 위치, 교통·주차, 거리·난이도, 적합한 방문객 기준으로 비교했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "overview",
          headingKo: "두 측면의 기본 차이",
          headingEn: "Basic difference between the two sides",
          paragraphsKo: [
            "갓바위는 하나의 산(팔공산 관봉)에 있지만, 접근로는 대구 동구(관암사 방면)와 경산 와촌면(선본사 방면) 두 곳입니다. 두 곳은 도로 진입과 산길이 다르고, 주차·식당·카페도 별개입니다.",
            "‘갓바위’라는 지명이 겹쳐 두 측면을 섞어 설명하기 쉽지만, 실제 이동 동선은 다릅니다. 출발 전 어느 쪽에서 오를지 먼저 정하세요.",
          ],
          paragraphsEn: [
            "Gatbawi sits on one mountain (Palgongsan Gwanbong), but there are two approaches: the Daegu Dong-gu side (via Gwanamsa) and the Gyeongsan Wachon-myeon side (via Seonbonsa). Roads and trails differ, and so do parking, restaurants, and cafés.",
            "The name 'Gatbawi' overlaps, making it easy to mix the two sides, but the actual travel routes differ. Decide which side you ascend before departure.",
          ],
        },
        {
          id: "table",
          headingKo: "비교 포인트",
          headingEn: "Comparison points",
          bulletsKo: [
            "입구 위치: 대구 측은 동구 갓바위로 / 경산 측은 와촌면 갓바위로",
            "교통·주차: 대구는 시내버스·401번 등 대중교통이 비교적 풍부 / 경산은 선본사 인근 주차와 시외·마을버스 이용",
            "산길: 양측 모두 가파른 오르막과 돌계단이 많음",
            "주변 이용: 대구 측은 갓바위우리식당·갓오브커피 등 / 경산 측은 산천식당·카페803 등 (각 측별 안내 참고)",
          ],
          bulletsEn: [
            "Entry: Daegu side on Gatbawi-ro, Dong-gu / Gyeongsan side on Gatbawi-ro, Wachon-myeon",
            "Transit & parking: Daegu has relatively rich transit (city buses, route 401) / Gyeongsan relies on Seonbonsa-area parking and intercity/village buses",
            "Trail: both sides have steep climbs and many stone stairs",
            "Nearby use: Daegu side e.g. Gatbawi-uri Sikdang, Gatob of Coffee / Gyeongsan side e.g. Sancheon Sikdang, Cafe 803 (see each side's guide)",
          ],
        },
        {
          id: "choose",
          headingKo: "누구에게 적합한가",
          headingEn: "Who each side suits",
          paragraphsKo: [
            "대구 시내에서 대중교통으로 오는 경우 대구 측이 접근이 수월할 수 있습니다. 경산 인근에 숙박하거나 차로 오는 경우 경산 측이 더 가까울 수 있습니다.",
            "정확한 거리·소요 시간 수치는 공식 안내와 현장 표지판에서 확인하세요. 이 안내는 방향성 안내이며, 당일 통제와 날씨에 따라 실제 동선이 제한될 수 있습니다.",
          ],
          paragraphsEn: [
            "If arriving by public transit from central Daegu, the Daegu side may be easier to reach. If staying near Gyeongsan or driving, the Gyeongsan side may be closer.",
            "Confirm exact distance and time from official guidance and signboards. This is directional guidance; same-day restrictions and weather can limit the actual route.",
          ],
        },
      ],
      faqs: [
        {
          qKo: "어느 쪽이 더 가깝나요?",
          aKo: "출발지에 따라 다릅니다. 대구 시내에서는 대구 측, 경산 인근에서는 경산 측이 각각 가깝습니다. 정확한 거리는 현장 안내를 확인하세요.",
          qEn: "Which side is closer?",
          aEn: "It depends on where you start. From central Daegu the Daegu side is closer; from around Gyeongsan the Gyeongsan side is. Confirm exact distance on site.",
        },
        {
          qKo: "두 측면 주차장은 같은 곳인가요?",
          aKo: "아닙니다. 대구 측과 경산 측은 별개 주차장입니다. 각각 ‘대구 갓바위 주차장’, ‘경산 갓바위 주차장’ 페이지에서 확인하세요.",
          qEn: "Are the two sides' parking lots the same?",
          aEn: "No. The Daegu and Gyeongsan sides have separate parking. See the 'Daegu Gatbawi parking' and 'Gyeongsan Gatbawi parking' pages.",
        },
      ],
    },
    en: {
      metaTitle: "Daegu vs Gyeongsan Gatbawi Routes | Gatbawi Daegu Travel Guide",
      metaDescription:
        "The two official approaches to Gatbawi compared: entry location, transit & parking, distance & difficulty, and who each suits.",
      h1: "Daegu vs Gyeongsan Gatbawi Routes",
      leadEn:
        "The two official approaches — Daegu (Gwanamsa) and Gyeongsan (Seonbonsa) — compared by entry, transit & parking, distance & difficulty, and suitability.",
      updated: "2026-11-01",
      sections: [
        {
          id: "overview",
          headingEn: "Basic difference between the two sides",
          paragraphsEn: [
            "Gatbawi sits on one mountain (Palgongsan Gwanbong), but there are two approaches: the Daegu Dong-gu side (via Gwanamsa) and the Gyeongsan Wachon-myeon side (via Seonbonsa). Roads and trails differ, and so do parking, restaurants, and cafés.",
            "The name 'Gatbawi' overlaps, making it easy to mix the two sides, but the actual travel routes differ. Decide which side you ascend before departure.",
          ],
        },
        {
          id: "table",
          headingEn: "Comparison points",
          bulletsEn: [
            "Entry: Daegu side on Gatbawi-ro, Dong-gu / Gyeongsan side on Gatbawi-ro, Wachon-myeon",
            "Transit & parking: Daegu has relatively rich transit (city buses, route 401) / Gyeongsan relies on Seonbonsa-area parking and intercity/village buses",
            "Trail: both sides have steep climbs and many stone stairs",
            "Nearby use: Daegu side e.g. Gatbawi-uri Sikdang, Gatob of Coffee / Gyeongsan side e.g. Sancheon Sikdang, Cafe 803 (see each side's guide)",
          ],
        },
        {
          id: "choose",
          headingEn: "Who each side suits",
          paragraphsEn: [
            "If arriving by public transit from central Daegu, the Daegu side may be easier to reach. If staying near Gyeongsan or driving, the Gyeongsan side may be closer.",
            "Confirm exact distance and time from official guidance and signboards. This is directional guidance; same-day restrictions and weather can limit the actual route.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Which side is closer?",
          aEn: "It depends on where you start. From central Daegu the Daegu side is closer; from around Gyeongsan the Gyeongsan side is. Confirm exact distance on site.",
          qKo: "어느 쪽이 더 가깝나요?",
          aKo: "출발지에 따라 다릅니다. 대구 시내에서는 대구 측, 경산 인근에서는 경산 측이 각각 가깝습니다.",
        },
        {
          qEn: "Are the two sides' parking lots the same?",
          aEn: "No. The Daegu and Gyeongsan sides have separate parking. See the 'Daegu Gatbawi parking' and 'Gyeongsan Gatbawi parking' pages.",
          qKo: "두 측면 주차장은 같은 곳인가요?",
          aKo: "아닙니다. 대구 측과 경산 측은 별개 주차장입니다.",
        },
      ],
    },
  },
  {
    slug: "routes/stairs-difficulty",
    group: "routes",
    priority: "P0",
    related: ["routes/daegu-gwanamsa", "routes/gyeongsan-seonbonsa", "routes/for-seniors", "visit/time-required"],
    ko: {
      metaTitle: "갓바위 계단 수와 등산 난이도 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위 등산로의 계단과 경사, 난이도, 체력 요구 수준을 정리했습니다. 정확한 계단 수는 전승과 구간에 따라 다릅니다.",
      h1: "갓바위 계단 수와 등산 난이도",
      leadKo:
        "갓바위 등산로의 계단과 경사, 전반적인 난이도, 그리고 어느 정도의 체력이 필요한지 정리했습니다. 정확한 수치는 현장 표지판을 확인하세요.",
      updated: "2026-11-01",
      sections: [
        {
          id: "stairs",
          headingKo: "계단 수와 관련 전승",
          headingEn: "Step count and tradition",
          paragraphsKo: [
            "갓바위 정상까지 이어진 돌계단은 ‘1,365칸’으로 불리는 경우가 많습니다. 이 숫자는 전승에 따라 다르게 전해지므로, 정확한 수치는 현장 안내와 표지판을 확인하세요.",
            "계단은 가파르게 이어지는 구간이 많아, 숫자보다 실제 경사와 지속 오르막이 체력 부담의 핵심입니다.",
          ],
          paragraphsEn: [
            "The stone stairway to the peak is widely called the '1,365 steps'. The number is told differently across traditions, so confirm the exact figure on site.",
            "Many stair sections are steep and sustained; more than the count, the actual grade and continuous climb are the core of the fitness load.",
          ],
        },
        {
          id: "difficulty",
          headingKo: "전반적인 난이도",
          headingEn: "Overall difficulty",
          paragraphsKo: [
            "거리는 짧은 편이나 해발차와 경사 때문에 단시간에 큰 에너지가 듭니다. 평소 등산을 하지 않는 분이라면 무리하지 않게 자주 쉬며 오르세요.",
            "어린이·어르신·무릎이 약한 분은 ‘어르신 갓바위 참배 코스’와 ‘아이와 함께 갓바위 등산’ 페이지의 대안을 먼저 보세요.",
          ],
          paragraphsEn: [
            "Distance is on the shorter side, but the elevation gain and grade demand a lot of energy in a short time. If you rarely hike, rest often and don't overdo it.",
            "For children, seniors, or those with weak knees, first see the alternatives on the 'Gatbawi for seniors' and 'Gatbawi with children' pages.",
          ],
          calloutKo:
            "날씨(폭염·빙결·강우)와 국립공원 통제에 따라 등산로가 폐쇄되거나 위험해질 수 있습니다. 출발 전 기상청 예보와 통제정보를 확인하세요.",
          calloutEn:
            "Heatwaves, ice, and rain — plus KNPS restrictions — can close or make trails dangerous. Check the KMA forecast and restriction notices before departure.",
        },
        {
          id: "prepare",
          headingKo: "체력 준비 팁",
          headingEn: "Fitness preparation tips",
          bulletsKo: [
            "등산화나 미끄럼 방지 신발 착용",
            "물과 간식, 그리고 무릎 보호를 위한 스틱 고려",
            "일몰 전 하산을 맞추기 위해 오전 일찍 출발",
            "날씨 변화에 대비한 겉옷 준비",
          ],
          bulletsEn: [
            "Wear hiking shoes or slip-resistant footwear",
            "Bring water and snacks; consider poles for knee protection",
            "Start early in the morning to finish descent before sunset",
            "Carry an outer layer for changing weather",
          ],
        },
      ],
      faqs: [
        {
          qKo: "계단은 정말 1,365개인가요?",
          aKo: "널리 쓰이는 표현이지만 전승과 구간에 따라 실제 수는 다를 수 있습니다. 정확한 수치는 현장 표지판을 확인하세요.",
          qEn: "Are there really 1,365 steps?",
          aEn: "It is a widely used expression, but the actual count may vary by tradition and section. Confirm on site.",
        },
        {
          qKo: "초보자도 오를 수 있나요?",
          aKo: "거리는 짧아도 경사가 가파르므로, 무리하지 않게 자주 쉬며 오르면 가능합니다. 체력이 부족하면 대안 코스를 고려하세요.",
          qEn: "Can beginners climb it?",
          aEn: "Distance is short but the grade is steep; resting often makes it feasible. If unfit, consider the alternative routes.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Steps & Hiking Difficulty | Gatbawi Daegu Travel Guide",
      metaDescription:
        "The stairs, grade, overall difficulty, and fitness level needed for the Gatbawi trail. The exact step count varies by tradition.",
      h1: "Gatbawi Steps & Hiking Difficulty",
      leadEn:
        "The stairs, grade, overall difficulty, and fitness level needed for the Gatbawi trail. Confirm exact counts on site.",
      updated: "2026-11-01",
      sections: [
        {
          id: "stairs",
          headingEn: "Step count and tradition",
          paragraphsEn: [
            "The stone stairway to the peak is widely called the '1,365 steps'. The number is told differently across traditions, so confirm the exact figure on site.",
            "Many stair sections are steep and sustained; more than the count, the actual grade and continuous climb are the core of the fitness load.",
          ],
        },
        {
          id: "difficulty",
          headingEn: "Overall difficulty",
          paragraphsEn: [
            "Distance is on the shorter side, but the elevation gain and grade demand a lot of energy in a short time. If you rarely hike, rest often and don't overdo it.",
            "For children, seniors, or those with weak knees, first see the alternatives on the 'Gatbawi for seniors' and 'Gatbawi with children' pages.",
          ],
        },
        {
          id: "prepare",
          headingEn: "Fitness preparation tips",
          bulletsEn: [
            "Wear hiking shoes or slip-resistant footwear",
            "Bring water and snacks; consider poles for knee protection",
            "Start early in the morning to finish descent before sunset",
            "Carry an outer layer for changing weather",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Are there really 1,365 steps?",
          aEn: "It is a widely used expression, but the actual count may vary by tradition and section. Confirm on site.",
          qKo: "계단은 정말 1,365개인가요?",
          aKo: "널리 쓰이는 표현이지만 실제 수는 다를 수 있습니다.",
        },
        {
          qEn: "Can beginners climb it?",
          aEn: "Distance is short but the grade is steep; resting often makes it feasible. If unfit, consider the alternative routes.",
          qKo: "초보자도 오를 수 있나요?",
          aKo: "거리는 짧아도 경사가 가파르므로 자주 쉬며 오르면 가능합니다.",
        },
      ],
    },
  },
  {
    slug: "routes/for-seniors",
    group: "routes",
    priority: "P1",
    related: ["routes/with-children", "routes/accessibility", "routes/stairs-difficulty", "routes/daegu-gwanamsa"],
    ko: {
      metaTitle: "어르신 갓바위 참배 코스 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "어르신이 갓바위를 참배할 때 고려할 진입로 선택, 휴식·무릎 보호, 대구·경산 측 구분과 대안을 정리했습니다.",
      h1: "어르신 갓바위 참배 코스",
      leadKo:
        "어르신이 갓바위를 방문할 때 진입로 선택, 휴식과 무릎 보호, 측면 구분, 그리고 정상 대신 누릴 수 있는 대안을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "choice",
          headingKo: "진입로 선택과 속도",
          headingEn: "Choosing the route and pace",
          paragraphsKo: [
            "두 측면 모두 가파른 돌계단이 많아 어르신에게는 부담이 될 수 있습니다. ‘쉽다’는 표현보다 ‘천천히, 자주 쉬며’를 기준으로 동선을 짜세요.",
            "정상까지 오르기보다, 입구 근처 사찰과 산책로에서 경내를 둘러보는 것만으로도 방문의 의미를 충분히 누릴 수 있습니다.",
          ],
          paragraphsEn: [
            "Both sides have steep stone stairs that can burden seniors. Plan around 'slowly and often resting' rather than 'easy'.",
            "Rather than reaching the peak, simply visiting the temple near the entrance and the precinct walk can fully satisfy the purpose of the visit.",
          ],
        },
        {
          id: "care",
          headingKo: "무릎 보호와 휴식",
          headingEn: "Knee care and rest",
          bulletsKo: [
            "스틱·지팡이로 무릎 부담 분산",
            "구간마다 벤치·쉼터에서 충분히 휴식",
            "수분 섭취와 일몰 전 하산 시간 확보",
            "동행자와 함께 이동하여 안전 확보",
          ],
          bulletsEn: [
            "Use poles or a cane to spread knee load",
            "Rest fully at benches/rest areas each section",
            "Stay hydrated and secure time to descend before sunset",
            "Move with a companion for safety",
          ],
        },
        {
          id: "alternative",
          headingKo: "정상 대신 누릴 수 있는 대안",
          headingEn: "Alternatives instead of the summit",
          paragraphsKo: [
            "계단 오르기가 어렵다면, 입구 근처 경내 관람과 사찰 카페·식당 동선만으로도 충분합니다. ‘갓바위 정상에 오르지 않는 대안 일정’ 페이지도 참고하세요.",
            "날씨가 덥거나 미끄러운 날에는 무리한 등반보다 안전을 우선하세요.",
          ],
          paragraphsEn: [
            "If the stairs are too hard, the precinct walk and a temple café/restaurant route near the entrance are enough. See also the 'no-summit alternative itinerary' page.",
            "On hot or slippery days, prioritise safety over a forced climb.",
          ],
          calloutKo:
            "‘정상까지 무리 없이 갈 수 있다’는 보장은 드릴 수 없습니다. 본인의 컨디션과 당일 날씨·통제를 가장 먼저 확인하세요.",
          calloutEn:
            "We cannot guarantee a trouble-free climb to the summit. Check your own condition and the day's weather and restrictions first.",
        },
      ],
      faqs: [
        {
          qKo: "어르신도 정상까지 갈 수 있나요?",
          aKo: "체력과 날씨에 따라 다릅니다. 가파른 계단이 많으므로 무리하지 않게 자주 쉬며, 어려우면 입구 경내 관람으로 대체하세요.",
          qEn: "Can seniors reach the summit?",
          aEn: "It depends on fitness and weather. With many steep stairs, rest often; if too hard, substitute with the precinct walk.",
        },
        {
          qKo: "휠체어로 갈 수 있나요?",
          aKo: "돌계단 구간이 많아 정상까지는 어렵습니다. 접근과 대안은 ‘갓바위 휠체어·유모차 접근’ 페이지를 보세요.",
          qEn: "Can a wheelchair reach it?",
          aEn: "Many stone stairs make the summit hard. See the 'Gatbawi wheelchair & stroller access' page for access and alternatives.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi for Seniors | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Route choice, rest and knee care, Daegu/Gyeongsan separation, and alternatives for seniors visiting Gatbawi.",
      h1: "Gatbawi for Seniors",
      leadEn:
        "Route choice, rest and knee care, the distinction between sides, and alternatives for seniors visiting Gatbawi.",
      updated: "2026-11-01",
      sections: [
        {
          id: "choice",
          headingEn: "Choosing the route and pace",
          paragraphsEn: [
            "Both sides have steep stone stairs that can burden seniors. Plan around 'slowly and often resting' rather than 'easy'.",
            "Rather than reaching the peak, simply visiting the temple near the entrance and the precinct walk can fully satisfy the purpose of the visit.",
          ],
        },
        {
          id: "care",
          headingEn: "Knee care and rest",
          bulletsEn: [
            "Use poles or a cane to spread knee load",
            "Rest fully at benches/rest areas each section",
            "Stay hydrated and secure time to descend before sunset",
            "Move with a companion for safety",
          ],
        },
        {
          id: "alternative",
          headingEn: "Alternatives instead of the summit",
          paragraphsEn: [
            "If the stairs are too hard, the precinct walk and a temple café/restaurant route near the entrance are enough. See also the 'no-summit alternative itinerary' page.",
            "On hot or slippery days, prioritise safety over a forced climb.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can seniors reach the summit?",
          aEn: "It depends on fitness and weather. With many steep stairs, rest often; if too hard, substitute with the precinct walk.",
          qKo: "어르신도 정상까지 갈 수 있나요?",
          aKo: "체력과 날씨에 따라 다릅니다. 무리하지 않게 자주 쉬며 가세요.",
        },
        {
          qEn: "Can a wheelchair reach it?",
          aEn: "Many stone stairs make the summit hard. See the 'Gatbawi wheelchair & stroller access' page for access and alternatives.",
          qKo: "휠체어로 갈 수 있나요?",
          aKo: "돌계단 구간이 많아 어렵습니다. 접근·대안 페이지를 보세요.",
        },
      ],
    },
  },
  {
    slug: "routes/with-children",
    group: "routes",
    priority: "P1",
    related: ["routes/for-seniors", "routes/accessibility", "routes/stairs-difficulty", "visit/packing-list"],
    ko: {
      metaTitle: "아이와 함께 갓바위 등산 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "아이와 함께 갓바위를 방문할 때 안전, 코스 선택, 준비물, 휴식과 대안을 정리했습니다.",
      h1: "아이와 함께 갓바위 등산",
      leadKo:
        "아이와 함께 갓바위를 방문할 때 안전 수칙, 진입로 선택, 준비물, 휴식 동선과 대안을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "safety",
          headingKo: "아이 동반 안전 수칙",
          headingEn: "Safety with children",
          paragraphsKo: [
            "가파른 돌계단과 난간이 없는 구간이 있으므로, 아이 손을 잡고 천천히 이동하세요. 유아는 유모차보다 배냇등이나 캐리어가 안전합니다.",
            "정상 부근은 좁고 방문객이 많아 이동 중 유의하세요. 아이가 흥미를 잃지 않도록 짧은 휴식과 먹거리 동선을 섞으세요.",
          ],
          paragraphsEn: [
            "With steep stone stairs and sections without railings, hold children's hands and move slowly. For infants, a carrier is safer than a stroller.",
            "Near the peak it is narrow and crowded; keep watch while moving. Mix in short rests and a snack stop so children don't lose interest.",
          ],
        },
        {
          id: "prep",
          headingKo: "준비물과 동선",
          headingEn: "Preparation and route",
          bulletsKo: [
            "물·간식·모자·선크림과 여분 옷",
            "유모차보다 캐리어·배냇등 권장",
            "화장실 위치는 ‘갓바위 화장실·쉼터·식수’ 페이지 확인",
            "해가 짧은 계절에는 일몰 전 하산",
          ],
          bulletsEn: [
            "Water, snacks, hat, sunscreen, spare clothes",
            "Carrier over stroller recommended",
            "Check restroom locations on the 'Gatbawi toilets, rest areas, water' page",
            "Descend before sunset in short-day seasons",
          ],
        },
        {
          id: "alt",
          headingKo: "정상 대신 대안",
          headingEn: "Alternatives to the summit",
          paragraphsKo: [
            "아이 체력에 따라 정상 대신 입구 경내와 쉼터 위주 동선도 좋습니다. 무리한 등반보다 아이가 즐거웠던 경험이 중요합니다.",
            "더위·추위가 심한 날에는 당일 통제와 기상청 예보를 먼저 확인하세요.",
          ],
          paragraphsEn: [
            "Depending on the child's stamina, a route focused on the entrance precinct and rest areas can be better than the summit. A happy experience matters more than a forced climb.",
            "On very hot or cold days, check KNPS restrictions and the KMA forecast first.",
          ],
        },
      ],
      faqs: [
        {
          qKo: "유모차로 갈 수 있나요?",
          aKo: "정상까지 돌계단이 많아 유모차는 어렵습니다. 캐리어·배냇등을 권장하며, 접근 대안은 ‘휠체어·유모차 접근’ 페이지를 보세요.",
          qEn: "Can we bring a stroller?",
          aEn: "Many stone stairs make a stroller impractical. A carrier is recommended; see the 'wheelchair & stroller access' page for alternatives.",
        },
        {
          qKo: "몇 세부터 오르기 좋나요?",
          aKo: "아이 체력과 날씨에 따라 다릅니다. 가파른 계단이 많아 무리하지 않게 자주 쉬며, 어려우면 입구 경내 관람으로 대체하세요.",
          qEn: "From what age is it good to climb?",
          aEn: "It depends on the child's stamina and weather. Many steep stairs — rest often, and substitute with the precinct walk if needed.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi with Children | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Safety, route choice, packing, rest, and alternatives for visiting Gatbawi with children.",
      h1: "Gatbawi with Children",
      leadEn:
        "Safety rules, route choice, packing, rest, and alternatives for visiting Gatbawi with children.",
      updated: "2026-11-01",
      sections: [
        {
          id: "safety",
          headingEn: "Safety with children",
          paragraphsEn: [
            "With steep stone stairs and sections without railings, hold children's hands and move slowly. For infants, a carrier is safer than a stroller.",
            "Near the peak it is narrow and crowded; keep watch while moving. Mix in short rests and a snack stop so children don't lose interest.",
          ],
        },
        {
          id: "prep",
          headingEn: "Preparation and route",
          bulletsEn: [
            "Water, snacks, hat, sunscreen, spare clothes",
            "Carrier over stroller recommended",
            "Check restroom locations on the 'Gatbawi toilets, rest areas, water' page",
            "Descend before sunset in short-day seasons",
          ],
        },
        {
          id: "alt",
          headingEn: "Alternatives to the summit",
          paragraphsEn: [
            "Depending on the child's stamina, a route focused on the entrance precinct and rest areas can be better than the summit. A happy experience matters more than a forced climb.",
            "On very hot or cold days, check KNPS restrictions and the KMA forecast first.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can we bring a stroller?",
          aEn: "Many stone stairs make a stroller impractical. A carrier is recommended; see the 'wheelchair & stroller access' page for alternatives.",
          qKo: "유모차로 갈 수 있나요?",
          aKo: "정상까지 돌계단이 많아 유모차는 어렵습니다. 캐리어를 권장합니다.",
        },
        {
          qEn: "From what age is it good to climb?",
          aEn: "It depends on the child's stamina and weather. Many steep stairs — rest often, and substitute with the precinct walk if needed.",
          qKo: "몇 세부터 오르기 좋나요?",
          aKo: "아이 체력과 날씨에 따라 다릅니다.",
        },
      ],
    },
  },
  {
    slug: "routes/accessibility",
    group: "routes",
    priority: "P1",
    related: ["routes/for-seniors", "routes/with-children", "routes/daegu-parking", "itineraries/no-summit-alternative"],
    ko: {
      metaTitle: "갓바위 휠체어·유모차 접근과 대안 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위 정상까지의 휠체어·유모차 접근 가능 여부와 입구·경내 접근, 대안 동선을 정리했습니다. 정상까지 무장애 통로는 없음을 안내합니다.",
      h1: "갓바위 휠체어·유모차 접근과 대안",
      leadKo:
        "갓바위 정상(관봉)까지의 휠체어·유모차 접근 가능 여부, 입구와 경내 접근, 그리고 대안 동선을 정리했습니다. ‘무장애로 정상까지 갈 수 있다’는 보장은 없습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "reality",
          headingKo: "정상까지의 접근 현실",
          headingEn: "Access reality to the summit",
          paragraphsKo: [
            "갓바위 정상(관봉)까지는 가파른 돌계단과 비포장 산길이 이어져, 휠체어나 유모차로 정상까지 접근하는 것은 사실상 어렵습니다. ‘휠체어로 정상까지 갈 수 있다’는 표현은 사용하지 마세요.",
            "진입로 입구 근처까지의 도로 접근 여부도 장소마다 다릅니다. 주차장에서 경내 입구까지의 단차와 포장 상태는 현장에서 확인하세요.",
          ],
          paragraphsEn: [
            "To the peak (Gwanbong), steep stone stairs and unpaved mountain paths continue, so wheelchair or stroller access to the summit is effectively difficult. Do not claim a wheelchair can reach the summit.",
            "Road access near the trailhead also varies by location. Check the steps and paving from the parking lot to the precinct entrance on site.",
          ],
          calloutKo:
            "접근성 정보는 현장 변경이 잦습니다. 정확한 단차·경사·장애인 화장실 유무는 해당 탐방안내소와 현장 표지판을 출발 전에 확인하세요.",
          calloutEn:
            "Accessibility information changes often. Confirm exact steps, slopes, and accessible toilets with the visitor centre and on-site signage before departure.",
        },
        {
          id: "entry",
          headingKo: "입구·경내 접근",
          headingEn: "Entrance & precinct access",
          paragraphsKo: [
            "대구 측(관암사)과 경산 측(선본사) 모두 경내 일부는 평탄한 구간이 있으나, 불상까지는 계단이 필수입니다. 휠체어 이용은 입구 경내 관람까지만 계획하세요.",
            "장애인 화장실 등 편의시설은 운영에 따라 다르므로, 국립공원 통제정보와 함께 확인하세요.",
          ],
          paragraphsEn: [
            "Both the Daegu (Gwanamsa) and Gyeongsan (Seonbonsa) sides have some flat precinct areas, but stairs are unavoidable to the Buddha. Plan wheelchair use only up to the entrance precinct.",
            "Accessible toilets and amenities vary by operation; check them along with KNPS restriction notices.",
          ],
        },
        {
          id: "alt",
          headingKo: "대안 동선",
          headingEn: "Alternative routes",
          paragraphsKo: [
            "정상 대신, 입구 경내 산책과 사찰 관람, 주변 카페·식당 동선으로 방문을 즐길 수 있습니다. ‘갓바위 정상에 오르지 않는 대안 일정’ 페이지도 참고하세요.",
            "차량으로 정상 인근까지 접근하는 공식 교통수단은 없으므로, 이동 약자는 입구 관람 위주로 계획하세요.",
          ],
          paragraphsEn: [
            "Instead of the summit, enjoy the entrance precinct walk, temple viewing, and nearby café/restaurant routes. See the 'no-summit alternative itinerary' page too.",
            "There is no official transport to near the summit by vehicle, so plan around the entrance for those with reduced mobility.",
          ],
        },
      ],
      faqs: [
        {
          qKo: "휠체어로 정상에 갈 수 있나요?",
          aKo: "아니요. 정상까지 가파른 돌계단이 이어져 사실상 어렵습니다. 입구 경내 관람까지만 계획하세요.",
          qEn: "Can a wheelchair reach the summit?",
          aEn: "No. Steep stone stairs continue to the summit, making it effectively inaccessible. Plan only up to the entrance precinct.",
        },
        {
          qKo: "장애인 화장실은 있나요?",
          aKo: "운영에 따라 다릅니다. 해당 탐방안내소와 현장 표지판에서 출발 전에 확인하세요.",
          qEn: "Are there accessible toilets?",
          aEn: "It varies by operation. Confirm with the visitor centre and on-site signage before departure.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Wheelchair & Stroller Access | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Wheelchair/stroller access to the Gatbawi summit, entrance and precinct access, and alternative routes. No barrier-free path to the top.",
      h1: "Gatbawi Wheelchair & Stroller Access",
      leadEn:
        "Wheelchair/stroller access to the Gatbawi summit, entrance and precinct access, and alternatives. There is no barrier-free path to the top.",
      updated: "2026-11-01",
      sections: [
        {
          id: "reality",
          headingEn: "Access reality to the summit",
          paragraphsEn: [
            "To the peak (Gwanbong), steep stone stairs and unpaved mountain paths continue, so wheelchair or stroller access to the summit is effectively difficult. Do not claim a wheelchair can reach the summit.",
            "Road access near the trailhead also varies by location. Check the steps and paving from the parking lot to the precinct entrance on site.",
          ],
        },
        {
          id: "entry",
          headingEn: "Entrance & precinct access",
          paragraphsEn: [
            "Both the Daegu (Gwanamsa) and Gyeongsan (Seonbonsa) sides have some flat precinct areas, but stairs are unavoidable to the Buddha. Plan wheelchair use only up to the entrance precinct.",
            "Accessible toilets and amenities vary by operation; check them along with KNPS restriction notices.",
          ],
        },
        {
          id: "alt",
          headingEn: "Alternative routes",
          paragraphsEn: [
            "Instead of the summit, enjoy the entrance precinct walk, temple viewing, and nearby café/restaurant routes. See the 'no-summit alternative itinerary' page too.",
            "There is no official transport to near the summit by vehicle, so plan around the entrance for those with reduced mobility.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can a wheelchair reach the summit?",
          aEn: "No. Steep stone stairs continue to the summit, making it effectively inaccessible. Plan only up to the entrance precinct.",
          qKo: "휠체어로 정상에 갈 수 있나요?",
          aKo: "아니요. 정상까지 가파른 돌계단이 이어져 사실상 어렵습니다.",
        },
        {
          qEn: "Are there accessible toilets?",
          aEn: "It varies by operation. Confirm with the visitor centre and on-site signage before departure.",
          qKo: "장애인 화장실은 있나요?",
          aKo: "운영에 따라 다릅니다. 출발 전 확인하세요.",
        },
      ],
    },
  },
  {
    slug: "routes/facilities",
    group: "routes",
    priority: "P1",
    related: ["routes/daegu-gwanamsa", "routes/gyeongsan-seonbonsa", "transport/daegu-parking", "transport/gyeongsan-parking"],
    ko: {
      metaTitle: "갓바위 화장실·쉼터·식수 위치 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위 등산로와 입구 일대의 화장실, 쉼터, 식수 위치와 이용 시 주의사항을 정리했습니다. 위치는 구간·운영에 따라 다릅니다.",
      h1: "갓바위 화장실·쉼터·식수 위치",
      leadKo:
        "갓바위 등산로와 입구 일대의 화장실, 쉼터, 식수 위치와 이용 시 주의사항을 정리했습니다. 정확한 위치는 현장 표지판을 확인하세요.",
      updated: "2026-11-01",
      sections: [
        {
          id: "toilets",
          headingKo: "화장실 위치",
          headingEn: "Toilets",
          paragraphsKo: [
            "대구 측·경산 측 모두 입구 일대와 탐방안내소 인근에 화장실이 있습니다. 산길 중간 화장실은 구간과 운영에 따라 개폐가 달라집니다.",
            "산길 중간에는 화장실이 드물 수 있으므로, 출발 전 입구 화장실을 이용하고 현장 표지판을 확인하세요.",
          ],
          paragraphsEn: [
            "On both the Daegu and Gyeongsan sides, toilets are near the entrance and the visitor centre. Mid-trail toilets open/close depending on the section and operations.",
            "Mid-trail toilets may be sparse, so use the entrance toilet before starting and check signage.",
          ],
        },
        {
          id: "rest",
          headingKo: "쉼터와 벤치",
          headingEn: "Rest areas and benches",
          paragraphsKo: [
            "오르막 구간 일부에 벤치와 쉼터가 있지만, 위치와 개수는 구간에 따라 다릅니다. 체력에 맞춰 자주 쉬며 오르세요.",
            "성수기에는 쉼터가 혼잡할 수 있으므로, 여유로운 시간대 방문을 권합니다.",
          ],
          paragraphsEn: [
            "Some climbing sections have benches and rest areas, but location and number vary by route. Rest often according to your fitness.",
            "Rest areas can be crowded in peak season, so visiting at off-peak times is recommended.",
          ],
        },
        {
          id: "water",
          headingKo: "식수와 수돗물",
          headingEn: "Drinking water",
          paragraphsKo: [
            "산길 중간 식수대는 운영과 계절에 따라 이용 가능 여부가 다릅니다. 등산 전 물을 충분히 준비하세요.",
            "야생 동물과 수질 안전을 위해, 표시되지 않은 계곡물은 마시지 않는 것이 좋습니다.",
          ],
          paragraphsEn: [
            "Mid-trail water points may or may not be available by season and operation. Prepare enough water before climbing.",
            "For wildlife and water-safety reasons, avoid drinking from unmarked stream water.",
          ],
          calloutKo:
            "시설 위치와 개방 여부는 현장 사정과 국립공원 통제에 따라 바뀝니다. 출발 전 탐방안내소에 문의하세요.",
          calloutEn:
            "Facility locations and opening status change with on-site conditions and KNPS restrictions. Ask the visitor centre before departure.",
        },
      ],
      faqs: [
        {
          qKo: "산 정상에도 화장실이 있나요?",
          aKo: "정상 부근 화장실 유무는 운영에 따라 다릅니다. 출발 전 입구 화장실을 이용하고 현장 표지판을 확인하세요.",
          qEn: "Are there toilets at the summit too?",
          aEn: "Toilets near the summit depend on operations. Use the entrance toilet before starting and check signage.",
        },
        {
          qKo: "식수를 현장에서 받을 수 있나요?",
          aKo: "식수대 운영은 계절·운영에 따라 다릅니다. 등산 전 물을 충분히 준비하세요.",
          qEn: "Can I get drinking water on site?",
          aEn: "Water points vary by season and operation. Prepare enough water before climbing.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Toilets, Rest Areas & Water | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Toilets, rest areas, and drinking water along the Gatbawi trail and at the entrance — locations and cautions. They vary by section and operation.",
      h1: "Gatbawi Toilets, Rest Areas & Water",
      leadEn:
        "Toilets, rest areas, and drinking water along the Gatbawi trail and at the entrance — locations and cautions. Confirm exact spots on site.",
      updated: "2026-11-01",
      sections: [
        {
          id: "toilets",
          headingEn: "Toilets",
          paragraphsEn: [
            "On both the Daegu and Gyeongsan sides, toilets are near the entrance and the visitor centre. Mid-trail toilets open/close depending on the section and operations.",
            "Mid-trail toilets may be sparse, so use the entrance toilet before starting and check signage.",
          ],
        },
        {
          id: "rest",
          headingEn: "Rest areas and benches",
          paragraphsEn: [
            "Some climbing sections have benches and rest areas, but location and number vary by route. Rest often according to your fitness.",
            "Rest areas can be crowded in peak season, so visiting at off-peak times is recommended.",
          ],
        },
        {
          id: "water",
          headingEn: "Drinking water",
          paragraphsEn: [
            "Mid-trail water points may or may not be available by season and operation. Prepare enough water before climbing.",
            "For wildlife and water-safety reasons, avoid drinking from unmarked stream water.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Are there toilets at the summit too?",
          aEn: "Toilets near the summit depend on operations. Use the entrance toilet before starting and check signage.",
          qKo: "산 정상에도 화장실이 있나요?",
          aKo: "정상 부근 화장실 유무는 운영에 따라 다릅니다.",
        },
        {
          qEn: "Can I get drinking water on site?",
          aEn: "Water points vary by season and operation. Prepare enough water before climbing.",
          qKo: "식수를 현장에서 받을 수 있나요?",
          aKo: "식수대 운영은 계절·운영에 따라 다릅니다.",
        },
      ],
    },
  },
];
