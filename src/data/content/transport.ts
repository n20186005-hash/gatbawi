import type { Topic } from "../topics";

export const transportTopics: Topic[] = [
  {
    slug: "transport/dongdaegu-station",
    group: "transport",
    priority: "P0",
    related: ["transport/daegu-city-bus", "transport/bus-401", "transport/daegu-parking", "routes/daegu-gwanamsa"],
    ko: {
      metaTitle: "동대구역에서 갓바위 가는 법 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "동대구역에서 갓바위(대구 관암사 방면)까지의 대중교통과 택시, 환승 동선, 막차 확인 요령을 정리했습니다. 노선·요금은 출발 전 재확인하세요.",
      h1: "동대구역에서 갓바위 가는 법",
      leadKo:
        "동대구역에서 갓바위 대구 측(관암사 방면) 입구까지 대중교통과 택시로 어떻게 가는지, 환승 동선과 막차 확인 요령을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "bus",
          headingKo: "대중교통 이용 동선",
          headingEn: "Using public transit",
          paragraphsKo: [
            "동대구역 인근에서 갓바위 방면으로 가는 시내버스가 운행됩니다. 노선 번호와 배차는 운영에 따라 바뀌므로, 출발 전 대구광역시 버스 안내(정류장 안내단말·앱)에서 ‘갓바위’ 또는 ‘관암사’ 행 노선을 확인하세요.",
            "‘대구 시내에서 갓바위 버스 이용’과 ‘대구 401번 버스’ 페이지에서 노선과 탑승 요령을 더 자세히 다룹니다.",
          ],
          paragraphsEn: [
            "City buses toward the Gatbawi area run from near Dongdaegu Station. Route numbers and frequency change with operations, so before leaving check the Daegu City bus guidance (stop displays, app) for routes to 'Gatbawi' or 'Gwanamsa'.",
            "The 'Daegu city buses to Gatbawi' and 'Daegu route 401' pages cover routes and boarding in more detail.",
          ],
        },
        {
          id: "taxi",
          headingKo: "택시·승차공유 이용",
          headingEn: "Taxi & ride-hailing",
          paragraphsKo: [
            "동대구역에서 택시나 승차공유로 갓바위 입구까지 직행할 수 있습니다. 교통 상황에 따라 소요 시간이 크게 달라지므로 여유를 두세요.",
            "목적지는 ‘갓바위’ 또는 ‘관암사’로 말하고, 실제 주차장·탐방안내소 위치를 현장 표지판에서 확인하세요.",
          ],
          paragraphsEn: [
            "From Dongdaegu Station you can take a taxi or ride-hail directly to the Gatbawi entrance. Travel time varies greatly with traffic, so allow a buffer.",
            "Set the destination to 'Gatbawi' or 'Gwanamsa', then confirm the actual parking lot and visitor centre on site.",
          ],
        },
        {
          id: "last",
          headingKo: "막차와 귀가 확인",
          headingEn: "Last bus and return",
          paragraphsKo: [
            "갓바위 하산 후 동대구역으로 돌아갈 때는 막차 시간을 미리 확인하세요. 성수기와 평일은 배차가 다를 수 있습니다.",
            "귀가 교통은 ‘갓바위 하산 후 귀가 교통·막차 확인’ 페이지에서 정리했습니다.",
          ],
          paragraphsEn: [
            "When returning from Gatbawi to Dongdaegu Station after descent, check the last-bus time in advance. Frequency differs between peak and weekdays.",
            "Return transport is covered on the 'Gatbawi post-descent return & last connections' page.",
          ],
          calloutKo:
            "대중교통 노선·배차·요금은 항상 변경될 수 있습니다. 이 안내는 동선 개요이며, 출발 직전 공식 버스 안내로 재확인하세요.",
          calloutEn:
            "Bus routes, frequency, and fares can always change. This is an overview of the route; reconfirm with official bus guidance right before departure.",
        },
      ],
      faqs: [
        {
          qKo: "동대구역에서 갓바위까지 버스가 있나요?",
          aKo: "네, 갓바위 방면 시내버스가 운행됩니다. 정확한 번호와 배차는 대구시 버스 안내에서 출발 전 확인하세요.",
          qEn: "Is there a bus from Dongdaegu Station to Gatbawi?",
          aEn: "Yes, city buses toward Gatbawi run. Confirm the exact number and frequency with Daegu bus guidance before departure.",
        },
        {
          qKo: "택시로 얼마나 걸리나요?",
          aKo: "교통 상황에 따라 다릅니다. 정확한 소요 시간은 공식 안내를 참고하고 여유 있게 이동하세요.",
          qEn: "How long by taxi?",
          aEn: "It varies with traffic. Check official guidance for an estimate and allow a buffer.",
        },
      ],
    },
    en: {
      metaTitle: "Dongdaegu Station to Gatbawi | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Transit and taxi from Dongdaegu Station to the Gatbawi Daegu (Gwanamsa) entrance, transfer route, and last-connection checks. Verify routes before departure.",
      h1: "Dongdaegu Station to Gatbawi",
      leadEn:
        "How to reach the Gatbawi Daegu-side (Gwanamsa) entrance from Dongdaegu Station by transit and taxi, the transfer route, and how to check last connections.",
      updated: "2026-11-01",
      sections: [
        {
          id: "bus",
          headingEn: "Using public transit",
          paragraphsEn: [
            "City buses toward the Gatbawi area run from near Dongdaegu Station. Route numbers and frequency change with operations, so before leaving check the Daegu City bus guidance (stop displays, app) for routes to 'Gatbawi' or 'Gwanamsa'.",
            "The 'Daegu city buses to Gatbawi' and 'Daegu route 401' pages cover routes and boarding in more detail.",
          ],
        },
        {
          id: "taxi",
          headingEn: "Taxi & ride-hailing",
          paragraphsEn: [
            "From Dongdaegu Station you can take a taxi or ride-hail directly to the Gatbawi entrance. Travel time varies greatly with traffic, so allow a buffer.",
            "Set the destination to 'Gatbawi' or 'Gwanamsa', then confirm the actual parking lot and visitor centre on site.",
          ],
        },
        {
          id: "last",
          headingEn: "Last bus and return",
          paragraphsEn: [
            "When returning from Gatbawi to Dongdaegu Station after descent, check the last-bus time in advance. Frequency differs between peak and weekdays.",
            "Return transport is covered on the 'Gatbawi post-descent return & last connections' page.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Is there a bus from Dongdaegu Station to Gatbawi?",
          aEn: "Yes, city buses toward Gatbawi run. Confirm the exact number and frequency with Daegu bus guidance before departure.",
          qKo: "동대구역에서 갓바위까지 버스가 있나요?",
          aKo: "네, 갓바위 방면 시내버스가 운행됩니다.",
        },
        {
          qEn: "How long by taxi?",
          aEn: "It varies with traffic. Check official guidance for an estimate and allow a buffer.",
          qKo: "택시로 얼마나 걸리나요?",
          aKo: "교통 상황에 따라 다릅니다.",
        },
      ],
    },
  },
  {
    slug: "transport/daegu-airport",
    group: "transport",
    priority: "P1",
    related: ["transport/dongdaegu-station", "transport/daegu-city-bus", "transport/daegu-parking"],
    ko: {
      metaTitle: "대구국제공항에서 갓바위 가는 법 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "대구국제공항에서 갓바위(대구 관암사 방면)까지의 이동 동선, 환승과 택시, 막차 확인 요령을 정리했습니다. 노선은 출발 전 재확인하세요.",
      h1: "대구국제공항에서 갓바위 가는 법",
      leadKo:
        "대구국제공항에서 갓바위 대구 측 입구까지 대중교통과 택시로 어떻게 가는지, 환승 동선과 주의사항을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "route",
          headingKo: "이동 동선",
          headingEn: "Travel route",
          paragraphsKo: [
            "대구국제공항에서 갓바위까지는 대중교통으로 환승이 필요한 경우가 많습니다. 공항 인근 정류장에서 시내버스로 갓바위 방면 노선을 이용하거나, 시내로 나가 동대구역 등에서 환승하세요.",
            "정확한 노선·배차는 대구시 버스 안내와 공항 안내에서 출발 전 확인하세요.",
          ],
          paragraphsEn: [
            "From Daegu International Airport to Gatbawi, transfers are often needed. From the stops near the airport take a city bus toward Gatbawi, or go into the city and transfer at Dongdaegu Station and so on.",
            "Confirm exact routes and frequency with Daegu bus guidance and airport information before departure.",
          ],
        },
        {
          id: "taxi",
          headingKo: "택시·승차공유",
          headingEn: "Taxi & ride-hailing",
          paragraphsKo: [
            "공항에서 택시나 승차공유로 갓바위 입구까지 직행할 수 있습니다. 교통 상황에 따라 소요 시간이 달라집니다.",
            "목적지는 ‘갓바위’ 또는 ‘관암사’로 말하고, 실제 위치는 현장 표지판에서 확인하세요.",
          ],
          paragraphsEn: [
            "From the airport you can take a taxi or ride-hail directly to the Gatbawi entrance. Travel time varies with traffic.",
            "Set the destination to 'Gatbawi' or 'Gwanamsa', then confirm the actual location on site.",
          ],
        },
        {
          id: "note",
          headingKo: "주의사항",
          headingEn: "Cautions",
          bulletsKo: [
            "공항발 노선은 배차가 길 수 있으니 여유 시간 확보",
            "짐이 많으면 택시·승차공유 고려",
            "귀가 막차·공항 가는 차편을 왕복 모두 확인",
            "날씨·교통 통제로 인한 지연 가능성 고려",
          ],
          bulletsEn: [
            "Airport-origin routes may have long intervals; allow buffer time",
            "With lots of luggage, consider taxi/ride-hail",
            "Check both outbound and return last connections to the airport",
            "Allow for delays from weather and traffic controls",
          ],
          calloutKo:
            "노선·요금·배차는 운영에 따라 변경됩니다. 이 안내는 동선 개요이며 출발 전 공식 안내로 재확인하세요.",
          calloutEn:
            "Routes, fares, and frequency change with operations. This is an overview; reconfirm with official guidance before departure.",
        },
      ],
      faqs: [
        {
          qKo: "공항에서 대중교통으로 갈 수 있나요?",
          aKo: "네, 단 환승이 필요한 경우가 많습니다. 정확한 노선은 대구시 버스 안내에서 출발 전 확인하세요.",
          qEn: "Can I use public transit from the airport?",
          aEn: "Yes, but transfers are often needed. Confirm the exact route with Daegu bus guidance before departure.",
        },
        {
          qKo: "택시 요금 대략 얼마인가요?",
          aKo: "거리와 교통 상황에 따라 다릅니다. 정확한 요금은 공식 안내를 참고하세요.",
          qEn: "About how much is the taxi fare?",
          aEn: "It depends on distance and traffic. Check official guidance for an estimate.",
        },
      ],
    },
    en: {
      metaTitle: "Daegu Airport to Gatbawi | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Travel route, transfers, taxi, and last-connection checks from Daegu International Airport to the Gatbawi Daegu entrance. Verify routes before departure.",
      h1: "Daegu Airport to Gatbawi",
      leadEn:
        "How to reach the Gatbawi Daegu-side entrance from Daegu International Airport by transit and taxi, the transfer route, and cautions.",
      updated: "2026-11-01",
      sections: [
        {
          id: "route",
          headingEn: "Travel route",
          paragraphsEn: [
            "From Daegu International Airport to Gatbawi, transfers are often needed. From the stops near the airport take a city bus toward Gatbawi, or go into the city and transfer at Dongdaegu Station and so on.",
            "Confirm exact routes and frequency with Daegu bus guidance and airport information before departure.",
          ],
        },
        {
          id: "taxi",
          headingEn: "Taxi & ride-hailing",
          paragraphsEn: [
            "From the airport you can take a taxi or ride-hail directly to the Gatbawi entrance. Travel time varies with traffic.",
            "Set the destination to 'Gatbawi' or 'Gwanamsa', then confirm the actual location on site.",
          ],
        },
        {
          id: "note",
          headingEn: "Cautions",
          bulletsEn: [
            "Airport-origin routes may have long intervals; allow buffer time",
            "With lots of luggage, consider taxi/ride-hail",
            "Check both outbound and return last connections to the airport",
            "Allow for delays from weather and traffic controls",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can I use public transit from the airport?",
          aEn: "Yes, but transfers are often needed. Confirm the exact route with Daegu bus guidance before departure.",
          qKo: "공항에서 대중교통으로 갈 수 있나요?",
          aKo: "네, 단 환승이 필요한 경우가 많습니다.",
        },
        {
          qEn: "About how much is the taxi fare?",
          aEn: "It depends on distance and traffic. Check official guidance for an estimate.",
          qKo: "택시 요금 대략 얼마인가요?",
          aKo: "거리와 교통 상황에 따라 다릅니다.",
        },
      ],
    },
  },
  {
    slug: "transport/daegu-city-bus",
    group: "transport",
    priority: "P0",
    related: ["transport/bus-401", "transport/dongdaegu-station", "transport/daegu-parking", "routes/daegu-gwanamsa"],
    ko: {
      metaTitle: "대구 시내에서 갓바위 버스 이용 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "대구 시내에서 갓바위(관암사 방면)로 가는 시내버스 탑승 요령, 정류장·환승, 요금과 막차 확인을 정리했습니다. 노선은 출발 전 재확인하세요.",
      h1: "대구 시내에서 갓바위 버스 이용",
      leadKo:
        "대구 시내에서 갓바위 대구 측 입구(관암사 방면)로 가는 시내버스 탑승 요령과 정류장·환승, 요금·막차 확인 요령을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "board",
          headingKo: "탑승 요령과 정류장",
          headingEn: "Boarding and stops",
          paragraphsKo: [
            "대구 시내 여러 거점(동대구역, 시내 버스 환승센터 등)에서 갓바위 방면 버스를 탈 수 있습니다. 정류장 안내단말과 버스 안내 앱에서 ‘갓바위’ 또는 ‘관암사’ 행 노선을 검색하세요.",
            "노선 번호와 기·종점은 운영에 따라 바뀔 수 있습니다. 탑승 전 안내단말로 실시간 도착을 확인하세요.",
          ],
          paragraphsEn: [
            "From various Daegu hubs (Dongdaegu Station, city bus transfer centres, etc.) you can catch a bus toward Gatbawi. Search the stop displays and bus app for routes to 'Gatbawi' or 'Gwanamsa'.",
            "Route numbers and terminals can change with operation. Check real-time arrivals on the stop display before boarding.",
          ],
        },
        {
          id: "fare",
          headingKo: "요금과 환승",
          headingEn: "Fare and transfers",
          paragraphsKo: [
            "대구 시내버스는 기본 요금 체계를 따르며, 카드 결제와 환승 할인이 적용됩니다. 정확한 요금은 공식 안내를 확인하세요.",
            "환승 지점과 배차는 노선마다 다르므로, 목적지까지의 정확한 동선은 출발 전 버스 안내로 확인하세요.",
          ],
          paragraphsEn: [
            "Daegu city buses follow the standard fare system, with card payment and transfer discounts. Confirm the exact fare with official guidance.",
            "Transfer points and frequency differ by route, so confirm the precise route to your destination with bus guidance before departure.",
          ],
        },
        {
          id: "last",
          headingKo: "막차와 하산 후 귀가",
          headingEn: "Last bus and return after descent",
          paragraphsKo: [
            "하산 후 시내로 돌아갈 때는 막차 시간을 미리 확인하세요. 성수기와 평일 배차가 다를 수 있습니다.",
            "귀가 동선은 ‘갓바위 하산 후 귀가 교통·막차 확인’ 페이지에서 정리했습니다.",
          ],
          paragraphsEn: [
            "When returning to the city after descent, check the last-bus time in advance. Peak and weekday frequency can differ.",
            "Return routes are covered on the 'Gatbawi post-descent return & last connections' page.",
          ],
          calloutKo:
            "버스 노선·배차·요금은 항상 변경될 수 있습니다. 이 안내는 개요이며, 출발 직전 공식 버스 안내로 재확인하세요.",
          calloutEn:
            "Bus routes, frequency, and fares can always change. This is an overview; reconfirm with official bus guidance right before departure.",
        },
      ],
      faqs: [
        {
          qKo: "갓바위 가는 버스 번호가 뭐예요?",
          aKo: "운영에 따라 바뀝니다. 대구시 버스 안내(안내단말·앱)에서 ‘갓바위’ 또는 ‘관암사’ 행 노선을 출발 전 검색하세요.",
          qEn: "What is the bus number to Gatbawi?",
          aEn: "It changes with operations. Search official Daegu bus guidance for routes to 'Gatbawi' or 'Gwanamsa' before departure.",
        },
        {
          qKo: "카드 결제가 되나요?",
          aKo: "대구 시내버스는 카드 결제와 환승 할인이 일반적입니다. 정확한 요금은 공식 안내를 확인하세요.",
          qEn: "Can I pay by card?",
          aEn: "Card payment and transfer discounts are standard on Daegu city buses. Confirm exact fares with official guidance.",
        },
      ],
    },
    en: {
      metaTitle: "Daegu City Buses to Gatbawi | Gatbawi Daegu Travel Guide",
      metaDescription:
        "How to ride Daegu city buses to the Gatbawi (Gwanamsa) entrance — boarding, stops, transfers, fare, and last-bus checks. Verify routes before departure.",
      h1: "Daegu City Buses to Gatbawi",
      leadEn:
        "How to ride Daegu city buses to the Gatbawi Daegu-side (Gwanamsa) entrance — boarding, stops, transfers, fare, and last-bus checks.",
      updated: "2026-11-01",
      sections: [
        {
          id: "board",
          headingEn: "Boarding and stops",
          paragraphsEn: [
            "From various Daegu hubs (Dongdaegu Station, city bus transfer centres, etc.) you can catch a bus toward Gatbawi. Search the stop displays and bus app for routes to 'Gatbawi' or 'Gwanamsa'.",
            "Route numbers and terminals can change with operation. Check real-time arrivals on the stop display before boarding.",
          ],
        },
        {
          id: "fare",
          headingEn: "Fare and transfers",
          paragraphsEn: [
            "Daegu city buses follow the standard fare system, with card payment and transfer discounts. Confirm the exact fare with official guidance.",
            "Transfer points and frequency differ by route, so confirm the precise route to your destination with bus guidance before departure.",
          ],
        },
        {
          id: "last",
          headingEn: "Last bus and return after descent",
          paragraphsEn: [
            "When returning to the city after descent, check the last-bus time in advance. Peak and weekday frequency can differ.",
            "Return routes are covered on the 'Gatbawi post-descent return & last connections' page.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "What is the bus number to Gatbawi?",
          aEn: "It changes with operations. Search official Daegu bus guidance for routes to 'Gatbawi' or 'Gwanamsa' before departure.",
          qKo: "갓바위 가는 버스 번호가 뭐예요?",
          aKo: "운영에 따라 바뀝니다. 대구시 버스 안내에서 출발 전 검색하세요.",
        },
        {
          qEn: "Can I pay by card?",
          aEn: "Card payment and transfer discounts are standard on Daegu city buses. Confirm exact fares with official guidance.",
          qKo: "카드 결제가 되나요?",
          aKo: "대구 시내버스는 카드 결제와 환승 할인이 일반적입니다.",
        },
      ],
    },
  },
  {
    slug: "transport/bus-401",
    group: "transport",
    priority: "P1",
    related: ["transport/daegu-city-bus", "transport/dongdaegu-station", "routes/daegu-gwanamsa"],
    ko: {
      metaTitle: "대구 401번 버스 갓바위 이동 안내 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "대구 401번 버스의 갓바위 방면 운행과 탑승 요령, 배차·요금·막차 확인 주의사항을 정리했습니다. 노선 변경 가능성은 출발 전 재확인하세요.",
      h1: "대구 401번 버스 갓바위 이동 안내",
      leadKo:
        "대구 401번 버스가 갓바위 방면으로 널리 알려져 있으나, 배차·요금·노선은 변경될 수 있어 출발 전 재확인이 필요합니다. 탑승 요령을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "known",
          headingKo: "401번과 갓바위",
          headingEn: "Route 401 and Gatbawi",
          paragraphsKo: [
            "대구에서는 401번 버스가 갓바위 방면으로 가는 노선으로 널리 알려져 있습니다. 다만 노선 번호·경유지·배차는 운영에 따라 바뀔 수 있으므로, 출발 전 반드시 대구시 버스 안내로 재확인하세요.",
            "갓바위 방면 정류장과 하차 위치는 현장 안내단말과 표지판에서 확인하세요.",
          ],
          paragraphsEn: [
            "In Daegu, route 401 is widely known as a bus toward Gatbawi. But the route number, via points, and frequency can change with operations, so reconfirm with Daegu bus guidance before departure.",
            "Confirm the Gatbawi-side stop and alighting point with on-site displays and signage.",
          ],
        },
        {
          id: "how",
          headingKo: "탑승 요령",
          headingEn: "How to ride",
          bulletsKo: [
            "출발 전 안내단말·앱으로 실시간 도착 확인",
            "목적지 ‘갓바위’ 또는 ‘관암사’ 행 노선 탑승",
            "카드 결제와 환승 할인 적용 확인",
            "하차 후 입구까지 안내 표지판 따라 이동",
          ],
          bulletsEn: [
            "Check real-time arrivals on the display/app before boarding",
            "Board a route to 'Gatbawi' or 'Gwanamsa'",
            "Confirm card payment and transfer discount",
            "Follow signage from the stop to the entrance",
          ],
        },
        {
          id: "caution",
          headingKo: "주의: 노선·배차·막차",
          headingEn: "Caution: route, interval, last bus",
          paragraphsKo: [
            "401번 외에도 갓바위 방면 노선이 운행될 수 있습니다. 특정 번호만 고집하기보다, ‘갓바위’ 행 노선을 안내에서 검색하는 것이 안전합니다.",
            "하산 후 귀가 막차는 성수기·평일에 따라 다릅니다. ‘갓바위 하산 후 귀가 교통·막차 확인’ 페이지도 참고하세요.",
          ],
          paragraphsEn: [
            "Routes other than 401 may also serve Gatbawi. Rather than insisting on one number, searching for routes to 'Gatbawi' on guidance is safer.",
            "The last bus home after descent varies by peak season and weekdays. See the 'Gatbawi post-descent return & last connections' page too.",
          ],
          calloutKo:
            "이 안내는 401번이 ‘널리 알려진’ 노선임을 안내할 뿐, 노선 번호·배차·요금을 보장하지 않습니다. 출발 직전 공식 안내로 반드시 재확인하세요.",
          calloutEn:
            "This guide notes that 401 is a 'widely known' route; it does not guarantee the route number, frequency, or fare. Always reconfirm with official guidance right before departure.",
        },
      ],
      faqs: [
        {
          qKo: "401번이 갓바위에 가나요?",
          aKo: "갓바위 방면 노선으로 널리 알려져 있으나, 노선·배차는 변경될 수 있습니다. 출발 전 대구시 버스 안내로 재확인하세요.",
          qEn: "Does route 401 go to Gatbawi?",
          aEn: "It is widely known as a route toward Gatbawi, but routes and frequency can change. Reconfirm with Daegu bus guidance before departure.",
        },
        {
          qKo: "막차는 몇 시예요?",
          aKo: "배차와 막차는 운영에 따라 다릅니다. 공식 버스 안내에서 당일 기준으로 확인하세요.",
          qEn: "What time is the last bus?",
          aEn: "Frequency and last bus vary by operation. Check on the official bus guidance for the day.",
        },
      ],
    },
    en: {
      metaTitle: "Daegu Route 401 to Gatbawi | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Route 401 is widely known to serve Gatbawi, but interval, fare, and route can change — recheck before departure. Boarding tips included.",
      h1: "Daegu Route 401 to Gatbawi",
      leadEn:
        "Route 401 is widely known to serve Gatbawi, but interval, fare, and route can change — recheck before departure. Boarding tips included.",
      updated: "2026-11-01",
      sections: [
        {
          id: "known",
          headingEn: "Route 401 and Gatbawi",
          paragraphsEn: [
            "In Daegu, route 401 is widely known as a bus toward Gatbawi. But the route number, via points, and frequency can change with operations, so reconfirm with Daegu bus guidance before departure.",
            "Confirm the Gatbawi-side stop and alighting point with on-site displays and signage.",
          ],
        },
        {
          id: "how",
          headingEn: "How to ride",
          bulletsEn: [
            "Check real-time arrivals on the display/app before boarding",
            "Board a route to 'Gatbawi' or 'Gwanamsa'",
            "Confirm card payment and transfer discount",
            "Follow signage from the stop to the entrance",
          ],
        },
        {
          id: "caution",
          headingEn: "Caution: route, interval, last bus",
          paragraphsEn: [
            "Routes other than 401 may also serve Gatbawi. Rather than insisting on one number, searching for routes to 'Gatbawi' on guidance is safer.",
            "The last bus home after descent varies by peak season and weekdays. See the 'Gatbawi post-descent return & last connections' page too.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Does route 401 go to Gatbawi?",
          aEn: "It is widely known as a route toward Gatbawi, but routes and frequency can change. Reconfirm with Daegu bus guidance before departure.",
          qKo: "401번이 갓바위에 가나요?",
          aKo: "갓바위 방면 노선으로 널리 알려져 있으나 변경 가능합니다.",
        },
        {
          qEn: "What time is the last bus?",
          aEn: "Frequency and last bus vary by operation. Check on the official bus guidance for the day.",
          qKo: "막차는 몇 시예요?",
          aKo: "배차와 막차는 운영에 따라 다릅니다.",
        },
      ],
    },
  },
  {
    slug: "transport/gyeongsan-transit",
    group: "transport",
    priority: "P1",
    related: ["transport/daegu-city-bus", "routes/gyeongsan-seonbonsa", "transport/gyeongsan-parking"],
    ko: {
      metaTitle: "경산 선본사 대중교통 이용 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "경산에서 선본사(갓바위 경산 측)까지의 대중교통 동선, 시외·마을버스와 택시, 주의사항을 정리했습니다. 노선은 출발 전 재확인하세요.",
      h1: "경산 선본사 대중교통 이용",
      leadKo:
        "경산 시내에서 선본사(갓바위 경산 측 입구)까지 대중교통으로 어떻게 가는지, 시외·마을버스와 택시 동선을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "route",
          headingKo: "이동 동선",
          headingEn: "Travel route",
          paragraphsKo: [
            "경산 시내에서 선본사 방면으로 가는 시외·마을버스가 운행됩니다. 정확한 노선 번호·배차는 경산시와 버스 안내에서 출발 전 확인하세요.",
            "‘대구 경산 코스 비교’와 ‘경산 갓바위 주차장’ 페이지도 참고하세요.",
          ],
          paragraphsEn: [
            "Intercity and village buses toward Seonbonsa run from central Gyeongsan. Confirm exact route numbers and frequency with Gyeongsan City and bus guidance before departure.",
            "Also see the 'Daegu vs Gyeongsan routes' and 'Gyeongsan Gatbawi parking' pages.",
          ],
        },
        {
          id: "taxi",
          headingKo: "택시·승차공유",
          headingEn: "Taxi & ride-hailing",
          paragraphsKo: [
            "경산 시내에서 택시나 승차공유로 선본사 입구까지 직행할 수 있습니다. 교통 상황에 따라 소요 시간이 달라집니다.",
            "목적지는 ‘선본사’ 또는 ‘갓바위’로 말하고, 실제 위치는 현장 표지판에서 확인하세요.",
          ],
          paragraphsEn: [
            "From central Gyeongsan you can take a taxi or ride-hail directly to the Seonbonsa entrance. Travel time varies with traffic.",
            "Set the destination to 'Seonbonsa' or 'Gatbawi', then confirm the actual location on site.",
          ],
        },
        {
          id: "note",
          headingKo: "주의사항",
          headingEn: "Cautions",
          paragraphsKo: [
            "경산 측과 대구 측은 별개 진입로입니다. 경산에서 오를 때는 경산 주차장·교통 안내를 먼저 확인하세요.",
            "하산 후 귀가 막차는 성수기·평일에 따라 다릅니다. 출발 전 버스 안내로 재확인하세요.",
          ],
          paragraphsEn: [
            "The Gyeongsan and Daegu sides are separate approaches. If ascending from Gyeongsan, check the Gyeongsan parking and transit guidance first.",
            "The last bus home after descent varies by peak season and weekdays. Reconfirm with bus guidance before departure.",
          ],
          calloutKo:
            "노선·배차·요금은 운영에 따라 변경됩니다. 이 안내는 개요이며, 출발 전 공식 안내로 재확인하세요.",
          calloutEn:
            "Routes, frequency, and fares change with operations. This is an overview; reconfirm with official guidance before departure.",
        },
      ],
      faqs: [
        {
          qKo: "경산에서 선본사까지 버스가 있나요?",
          aKo: "네, 시외·마을버스가 운행됩니다. 정확한 번호와 배차는 경산시 버스 안내에서 출발 전 확인하세요.",
          qEn: "Is there a bus from Gyeongsan to Seonbonsa?",
          aEn: "Yes, intercity/village buses run. Confirm the exact number and frequency with Gyeongsan bus guidance before departure.",
        },
        {
          qKo: "대구 측과 같은 주차장인가요?",
          aKo: "아닙니다. 경산 측은 별개 주차장입니다. ‘경산 갓바위 주차장’ 페이지를 보세요.",
          qEn: "Is it the same parking as the Daegu side?",
          aEn: "No, the Gyeongsan side has separate parking. See the 'Gyeongsan Gatbawi parking' page.",
        },
      ],
    },
    en: {
      metaTitle: "Gyeongsan Public Transit to Seonbonsa | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Travel route, intercity/village buses and taxi from Gyeongsan to Seonbonsa (Gatbawi Gyeongsan entrance). Verify routes before departure.",
      h1: "Gyeongsan Public Transit to Seonbonsa",
      leadEn:
        "How to reach Seonbonsa (Gatbawi Gyeongsan entrance) from central Gyeongsan by transit — intercity/village buses and taxi. Verify routes before departure.",
      updated: "2026-11-01",
      sections: [
        {
          id: "route",
          headingEn: "Travel route",
          paragraphsEn: [
            "Intercity and village buses toward Seonbonsa run from central Gyeongsan. Confirm exact route numbers and frequency with Gyeongsan City and bus guidance before departure.",
            "Also see the 'Daegu vs Gyeongsan routes' and 'Gyeongsan Gatbawi parking' pages.",
          ],
        },
        {
          id: "taxi",
          headingEn: "Taxi & ride-hailing",
          paragraphsEn: [
            "From central Gyeongsan you can take a taxi or ride-hail directly to the Seonbonsa entrance. Travel time varies with traffic.",
            "Set the destination to 'Seonbonsa' or 'Gatbawi', then confirm the actual location on site.",
          ],
        },
        {
          id: "note",
          headingEn: "Cautions",
          paragraphsEn: [
            "The Gyeongsan and Daegu sides are separate approaches. If ascending from Gyeongsan, check the Gyeongsan parking and transit guidance first.",
            "The last bus home after descent varies by peak season and weekdays. Reconfirm with bus guidance before departure.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Is there a bus from Gyeongsan to Seonbonsa?",
          aEn: "Yes, intercity/village buses run. Confirm the exact number and frequency with Gyeongsan bus guidance before departure.",
          qKo: "경산에서 선본사까지 버스가 있나요?",
          aKo: "네, 시외·마을버스가 운행됩니다.",
        },
        {
          qEn: "Is it the same parking as the Daegu side?",
          aEn: "No, the Gyeongsan side has separate parking. See the 'Gyeongsan Gatbawi parking' page.",
          qKo: "대구 측과 같은 주차장인가요?",
          aKo: "아닙니다. 경산 측은 별개 주차장입니다.",
        },
      ],
    },
  },
  {
    slug: "transport/daegu-parking",
    group: "transport",
    priority: "P0",
    related: ["routes/daegu-gwanamsa", "transport/dongdaegu-station", "routes/facilities", "transport/return-transport"],
    ko: {
      metaTitle: "대구 갓바위 주차장 위치와 이용 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "대구 측(동구 갓바위로) 갓바위 주차장의 위치, 이용 요령, 요금·시설 확인과 주의사항을 정리했습니다. 위치는 현장 표지판에서 확인하세요.",
      h1: "대구 갓바위 주차장 위치와 이용",
      leadKo:
        "대구 측(동구 갓바위로) 갓바위 주차장의 위치와 이용 요령, 주차 요금·시설 확인과 주의사항을 정리했습니다. 경산 측과는 별개입니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "loc",
          headingKo: "주차장 위치",
          headingEn: "Parking location",
          paragraphsKo: [
            "대구 측 갓바위 주차장은 동구 갓바위로 일대에 있습니다. 정확한 위치와 명칭은 네비게이션 ‘갓바위’ 또는 ‘관암사’ 검색과 현장 표지판에서 확인하세요.",
            "경산 측 주차장과는 별개이므로, 대구에서 오를 때는 대구 주차장을 이용하세요.",
          ],
          paragraphsEn: [
            "The Daegu-side Gatbawi parking is around Gatbawi-ro, Dong-gu. Confirm the exact location and name via navigation search for 'Gatbawi' or 'Gwanamsa' and on-site signage.",
            "It is separate from the Gyeongsan-side lot, so if ascending from Daegu, use the Daegu parking.",
          ],
        },
        {
          id: "use",
          headingKo: "이용 요령과 시설",
          headingEn: "Usage and facilities",
          paragraphsKo: [
            "주차 요금, 운영 시간, 시설(화장실·식수 등)은 운영에 따라 바뀝니다. 출발 전 현장 안내와 국립공원 통제정보를 확인하세요.",
            "성수기와 주말·명절에는 만차가 빈번하므로 이른 시간 방문을 권합니다.",
          ],
          paragraphsEn: [
            "Parking fees, operating hours, and facilities (toilets, water, etc.) change with operations. Check on-site guidance and KNPS restriction notices before departure.",
            "In peak season, weekends, and holidays, full lots are common, so an early visit is recommended.",
          ],
        },
        {
          id: "note",
          headingKo: "주의사항",
          headingEn: "Cautions",
          bulletsKo: [
            "경산 측 주차장과 혼동하지 않도록 ‘대구 측’임을 명확히",
            "요금·운영 시간은 현장 안내로 재확인",
            "주차 후 입구까지 도보 이동 거리와 단차 확인",
            "만차 시 대체 주차와 대중교통 고려",
          ],
          bulletsEn: [
            "Be clear it is the 'Daegu side', not the Gyeongsan lot",
            "Reconfirm fee and hours on site",
            "Check walking distance and steps from the lot to the entrance",
            "Consider alternative parking and transit when full",
          ],
          calloutKo:
            "주차장 위치·요금·개방 여부는 현장 사정과 국립공원 통제에 따라 바뀝니다. 이 안내는 개요이며, 출발 전 탐방안내소에 문의하세요.",
          calloutEn:
            "Parking location, fees, and opening status change with on-site conditions and KNPS restrictions. This is an overview; ask the visitor centre before departure.",
        },
      ],
      faqs: [
        {
          qKo: "대구 측 주차장은 어디인가요?",
          aKo: "동구 갓바위로 일대입니다. 정확한 위치는 네비게이션과 현장 표지판에서 확인하세요.",
          qEn: "Where is the Daegu-side parking?",
          aEn: "Around Gatbawi-ro, Dong-gu. Confirm the exact spot via navigation and on-site signage.",
        },
        {
          qKo: "주차 요금이 얼마인가요?",
          aKo: "운영에 따라 다릅니다. 현장 안내와 탐방안내소에서 출발 전 확인하세요.",
          qEn: "How much is parking?",
          aEn: "It varies by operation. Check on-site guidance and the visitor centre before departure.",
        },
      ],
    },
    en: {
      metaTitle: "Daegu Gatbawi Parking | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Location and usage of the Daegu-side (Dong-gu) Gatbawi parking — fees, facilities, and cautions. Separate from the Gyeongsan lot.",
      h1: "Daegu Gatbawi Parking",
      leadEn:
        "Location and usage of the Daegu-side (Dong-gu) Gatbawi parking — fees, facilities, and cautions. Separate from the Gyeongsan lot.",
      updated: "2026-11-01",
      sections: [
        {
          id: "loc",
          headingEn: "Parking location",
          paragraphsEn: [
            "The Daegu-side Gatbawi parking is around Gatbawi-ro, Dong-gu. Confirm the exact location and name via navigation search for 'Gatbawi' or 'Gwanamsa' and on-site signage.",
            "It is separate from the Gyeongsan-side lot, so if ascending from Daegu, use the Daegu parking.",
          ],
        },
        {
          id: "use",
          headingEn: "Usage and facilities",
          paragraphsEn: [
            "Parking fees, operating hours, and facilities (toilets, water, etc.) change with operations. Check on-site guidance and KNPS restriction notices before departure.",
            "In peak season, weekends, and holidays, full lots are common, so an early visit is recommended.",
          ],
        },
        {
          id: "note",
          headingEn: "Cautions",
          bulletsEn: [
            "Be clear it is the 'Daegu side', not the Gyeongsan lot",
            "Reconfirm fee and hours on site",
            "Check walking distance and steps from the lot to the entrance",
            "Consider alternative parking and transit when full",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Where is the Daegu-side parking?",
          aEn: "Around Gatbawi-ro, Dong-gu. Confirm the exact spot via navigation and on-site signage.",
          qKo: "대구 측 주차장은 어디인가요?",
          aKo: "동구 갓바위로 일대입니다.",
        },
        {
          qEn: "How much is parking?",
          aEn: "It varies by operation. Check on-site guidance and the visitor centre before departure.",
          qKo: "주차 요금이 얼마인가요?",
          aKo: "운영에 따라 다릅니다.",
        },
      ],
    },
  },
  {
    slug: "transport/gyeongsan-parking",
    group: "transport",
    priority: "P0",
    related: ["routes/gyeongsan-seonbonsa", "transport/gyeongsan-transit", "routes/facilities", "transport/return-transport"],
    ko: {
      metaTitle: "경산 갓바위 주차장 위치와 이용 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "경산 측(와촌면 갓바위로) 갓바위 주차장의 위치, 이용 요령, 요금·시설 확인과 주의사항을 정리했습니다. 대구 측과는 별개입니다.",
      h1: "경산 갓바위 주차장 위치와 이용",
      leadKo:
        "경산 측(와촌면 갓바위로) 갓바위 주차장의 위치와 이용 요령, 주차 요금·시설 확인과 주의사항을 정리했습니다. 대구 측과는 별개 주차장입니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "loc",
          headingKo: "주차장 위치",
          headingEn: "Parking location",
          paragraphsKo: [
            "경산 측 갓바위 주차장은 경산시 와촌면 갓바위로 일대에 있습니다. 정확한 위치와 명칭은 네비게이션 ‘갓바위’ 또는 ‘선본사’ 검색과 현장 표지판에서 확인하세요.",
            "대구 측 주차장과는 별개이므로, 경산에서 오를 때는 경산 주차장을 이용하세요.",
          ],
          paragraphsEn: [
            "The Gyeongsan-side Gatbawi parking is around Gatbawi-ro, Wachon-myeon, Gyeongsan. Confirm the exact location and name via navigation search for 'Gatbawi' or 'Seonbonsa' and on-site signage.",
            "It is separate from the Daegu-side lot, so if ascending from Gyeongsan, use the Gyeongsan parking.",
          ],
        },
        {
          id: "use",
          headingKo: "이용 요령과 시설",
          headingEn: "Usage and facilities",
          paragraphsKo: [
            "주차 요금, 운영 시간, 시설은 운영에 따라 바뀝니다. 출발 전 현장 안내와 국립공원 통제정보를 확인하세요.",
            "성수기와 주말·명절에는 만차가 빈번하므로 이른 시간 방문을 권합니다.",
          ],
          paragraphsEn: [
            "Parking fees, operating hours, and facilities change with operations. Check on-site guidance and KNPS restriction notices before departure.",
            "In peak season, weekends, and holidays, full lots are common, so an early visit is recommended.",
          ],
        },
        {
          id: "note",
          headingKo: "주의사항",
          headingEn: "Cautions",
          bulletsKo: [
            "대구 측 주차장과 혼동하지 않도록 ‘경산 측’임을 명확히",
            "요금·운영 시간은 현장 안내로 재확인",
            "주차 후 입구까지 도보 이동 거리와 단차 확인",
            "만차 시 대체 주차와 대중교통 고려",
          ],
          bulletsEn: [
            "Be clear it is the 'Gyeongsan side', not the Daegu lot",
            "Reconfirm fee and hours on site",
            "Check walking distance and steps from the lot to the entrance",
            "Consider alternative parking and transit when full",
          ],
          calloutKo:
            "주차장 위치·요금·개방 여부는 현장 사정과 국립공원 통제에 따라 바뀝니다. 이 안내는 개요이며, 출발 전 탐방안내소에 문의하세요.",
          calloutEn:
            "Parking location, fees, and opening status change with on-site conditions and KNPS restrictions. This is an overview; ask the visitor centre before departure.",
        },
      ],
      faqs: [
        {
          qKo: "경산 측 주차장은 어디인가요?",
          aKo: "와촌면 갓바위로 일대입니다. 정확한 위치는 네비게이션과 현장 표지판에서 확인하세요.",
          qEn: "Where is the Gyeongsan-side parking?",
          aEn: "Around Gatbawi-ro, Wachon-myeon. Confirm the exact spot via navigation and on-site signage.",
        },
        {
          qKo: "대구 측 주차장과 같은 곳인가요?",
          aKo: "아닙니다. 경산 측은 별개 주차장입니다. 대구에서 오를 때는 ‘대구 갓바위 주차장’ 페이지를 보세요.",
          qEn: "Is it the same as the Daegu-side lot?",
          aEn: "No, the Gyeongsan side has separate parking. For the Daegu approach, see the 'Daegu Gatbawi parking' page.",
        },
      ],
    },
    en: {
      metaTitle: "Gyeongsan Gatbawi Parking | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Location and usage of the Gyeongsan-side (Wachon-myeon) Gatbawi parking — fees, facilities, and cautions. Separate from the Daegu lot.",
      h1: "Gyeongsan Gatbawi Parking",
      leadEn:
        "Location and usage of the Gyeongsan-side (Wachon-myeon) Gatbawi parking — fees, facilities, and cautions. Separate from the Daegu lot.",
      updated: "2026-11-01",
      sections: [
        {
          id: "loc",
          headingEn: "Parking location",
          paragraphsEn: [
            "The Gyeongsan-side Gatbawi parking is around Gatbawi-ro, Wachon-myeon, Gyeongsan. Confirm the exact location and name via navigation search for 'Gatbawi' or 'Seonbonsa' and on-site signage.",
            "It is separate from the Daegu-side lot, so if ascending from Gyeongsan, use the Gyeongsan parking.",
          ],
        },
        {
          id: "use",
          headingEn: "Usage and facilities",
          paragraphsEn: [
            "Parking fees, operating hours, and facilities change with operations. Check on-site guidance and KNPS restriction notices before departure.",
            "In peak season, weekends, and holidays, full lots are common, so an early visit is recommended.",
          ],
        },
        {
          id: "note",
          headingEn: "Cautions",
          bulletsEn: [
            "Be clear it is the 'Gyeongsan side', not the Daegu lot",
            "Reconfirm fee and hours on site",
            "Check walking distance and steps from the lot to the entrance",
            "Consider alternative parking and transit when full",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Where is the Gyeongsan-side parking?",
          aEn: "Around Gatbawi-ro, Wachon-myeon. Confirm the exact spot via navigation and on-site signage.",
          qKo: "경산 측 주차장은 어디인가요?",
          aKo: "와촌면 갓바위로 일대입니다.",
        },
        {
          qEn: "Is it the same as the Daegu-side lot?",
          aEn: "No, the Gyeongsan side has separate parking. For the Daegu approach, see the 'Daegu Gatbawi parking' page.",
          qKo: "대구 측 주차장과 같은 곳인가요?",
          aKo: "아닙니다. 경산 측은 별개 주차장입니다.",
        },
      ],
    },
  },
  {
    slug: "transport/return-transport",
    group: "transport",
    priority: "P1",
    related: ["transport/dongdaegu-station", "transport/bus-401", "transport/gyeongsan-transit", "transport/daegu-parking"],
    ko: {
      metaTitle: "갓바위 하산 후 귀가 교통·막차 확인 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위 하산 후 동대구역·시내·경산으로 돌아가는 귀가 교통과 막차·배차 확인 요령을 정리했습니다. 노선은 출발 전 재확인하세요.",
      h1: "갓바위 하산 후 귀가 교통·막차 확인",
      leadKo:
        "갓바위 하산 후 대구(동대구역·시내)와 경산으로 돌아가는 귀가 교통과 막차·배차 확인 요령, 안전 수칙을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "return",
          headingKo: "귀가 동선",
          headingEn: "Return routes",
          paragraphsKo: [
            "하산 후에는 오를 때 이용한 측면(대구 또는 경산)의 정류장·주차장에서 귀가 교통을 이용하세요. 출발 측면과 다른 곳으로 돌아갈 때는 환승 동선을 미리 짜두세요.",
            "대중교통은 ‘동대구역에서 갓바위 가는 법’, ‘대구 시내에서 갓바위 버스 이용’, ‘경산 선본사 대중교통 이용’ 페이지에서 정리했습니다.",
          ],
          paragraphsEn: [
            "After descent, use return transport from the same side you ascended (Daegu or Gyeongsan) — its stops and parking. If returning somewhere other than your start, plan the transfer route in advance.",
            "Public transit is covered on the 'Dongdaegu Station to Gatbawi', 'Daegu city buses to Gatbawi', and 'Gyeongsan transit to Seonbonsa' pages.",
          ],
        },
        {
          id: "last",
          headingKo: "막차·배차 확인",
          headingEn: "Last bus & interval checks",
          bulletsKo: [
            "하산 시작 전 막차 시간과 배차를 안내단말·앱으로 확인",
            "성수기·주말·명절은 배차와 만차가 다름",
            "대중교통이 끊기면 택시·승차공유 고려(대기 시간 발생 가능)",
            "운전자는 음주·피로 운전 주의",
          ],
          bulletsEn: [
            "Before starting descent, check last-bus time and interval on displays/apps",
            "Peak season, weekends, holidays differ in interval and crowding",
            "If transit ends, consider taxi/ride-hail (wait times possible)",
            "Drivers: avoid drunk and fatigued driving",
          ],
        },
        {
          id: "safe",
          headingKo: "안전 수칙",
          headingEn: "Safety notes",
          paragraphsKo: [
            "하산은 오르막보다 무릎 부담이 큽니다. 일몰 전 귀가 동선을 끝내고, 어둠 속 산길 이동을 피하세요.",
            "날씨가 나빠지면 통제와 귀가 차질이 생길 수 있으니, 기상청 예보와 국립공원 통제정보를 먼저 확인하세요.",
          ],
          paragraphsEn: [
            "Descent loads the knees more than climbing. Finish the return route before sunset and avoid walking mountain trails in the dark.",
            "If weather worsens, restrictions and disruption to return can occur; check the KMA forecast and KNPS restrictions first.",
          ],
          calloutKo:
            "막차·배차·노선은 항상 변경될 수 있습니다. 이 안내는 개요이며, 당일 공식 안내로 반드시 재확인하세요.",
          calloutEn:
            "Last bus, frequency, and routes can always change. This is an overview; always reconfirm with official guidance for the day.",
        },
      ],
      faqs: [
        {
          qKo: "막차를 놓치면 어떡하나요?",
          aKo: "대중교통이 끊기면 택시·승차공유를 고려하세요. 대기 시간이 생길 수 있으니 이른 하산을 권합니다.",
          qEn: "What if I miss the last bus?",
          aEn: "If transit ends, consider taxi/ride-hail. Wait times are possible, so an early descent is recommended.",
        },
        {
          qKo: "경산 측에서 대구로 돌아갈 수 있나요?",
          aKo: "네, 단 환승 동선이 길어집니다. 출발 전 귀가 경로를 안내에서 미리 확인하세요.",
          qEn: "Can I return to Daegu from the Gyeongsan side?",
          aEn: "Yes, but the transfer route is longer. Check the return path on guidance before departure.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Return Transport & Last Bus | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Return transport from Gatbawi after descent to Dongdaegu Station, central Daegu, and Gyeongsan — last bus and interval checks. Verify before departure.",
      h1: "Gatbawi Return Transport & Last Bus",
      leadEn:
        "Return transport from Gatbawi after descent to Dongdaegu Station, central Daegu, and Gyeongsan — last bus and interval checks. Verify before departure.",
      updated: "2026-11-01",
      sections: [
        {
          id: "return",
          headingEn: "Return routes",
          paragraphsEn: [
            "After descent, use return transport from the same side you ascended (Daegu or Gyeongsan) — its stops and parking. If returning somewhere other than your start, plan the transfer route in advance.",
            "Public transit is covered on the 'Dongdaegu Station to Gatbawi', 'Daegu city buses to Gatbawi', and 'Gyeongsan transit to Seonbonsa' pages.",
          ],
        },
        {
          id: "last",
          headingEn: "Last bus & interval checks",
          bulletsEn: [
            "Before starting descent, check last-bus time and interval on displays/apps",
            "Peak season, weekends, holidays differ in interval and crowding",
            "If transit ends, consider taxi/ride-hail (wait times possible)",
            "Drivers: avoid drunk and fatigued driving",
          ],
        },
        {
          id: "safe",
          headingEn: "Safety notes",
          paragraphsEn: [
            "Descent loads the knees more than climbing. Finish the return route before sunset and avoid walking mountain trails in the dark.",
            "If weather worsens, restrictions and disruption to return can occur; check the KMA forecast and KNPS restrictions first.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "What if I miss the last bus?",
          aEn: "If transit ends, consider taxi/ride-hail. Wait times are possible, so an early descent is recommended.",
          qKo: "막차를 놓치면 어떡하나요?",
          aKo: "대중교통이 끊기면 택시·승차공유를 고려하세요.",
        },
        {
          qEn: "Can I return to Daegu from the Gyeongsan side?",
          aEn: "Yes, but the transfer route is longer. Check the return path on guidance before departure.",
          qKo: "경산 측에서 대구로 돌아갈 수 있나요?",
          aKo: "네, 단 환승 동선이 길어집니다.",
        },
      ],
    },
  },
];
