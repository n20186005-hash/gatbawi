import type { Topic } from "../topics";

export const pilgrimageTopics: Topic[] = [
  {
    slug: "pilgrimage/etiquette",
    group: "pilgrimage",
    priority: "P1",
    related: ["pilgrimage/wish-legend", "pilgrimage/seonbonsa", "routes/daegu-gwanamsa", "heritage/medicine-buddha"],
    ko: {
      metaTitle: "갓바위 참배 예절과 주의사항 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위 참배 시 지켜야 할 예절, 사찰과 산길에서의 주의사항, 소음과 쓰레기, 기도와 관련한 안내를 정리했습니다.",
      h1: "갓바위 참배 예절과 주의사항",
      leadKo:
        "사찰과 산길, 석불을 방문할 때 지키면 좋은 예절과 주의사항을 정리했습니다. 신앙과 전통을 존중하며 안전한 방문을 돕습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "temple",
          headingKo: "사찰 방문 예절",
          headingEn: "Temple visit etiquette",
          paragraphsKo: [
            "갓바위로 이어지는 길목에는 관암사(대구 측)와 선본사(경산 측) 같은 사찰이 있습니다. 법당 내부에서는 조용히 머물고, 촬영이 금지된 구역은 규정을 따르세요.",
            "신발을 벗는 공간이나 경내에서는 타인의 예불·기도를 방해하지 않도록 움직임과 대화를 가라앉히는 것이 좋습니다.",
          ],
          paragraphsEn: [
            "Temples such as Gwanamsa (Daegu side) and Seonbonsa (Gyeongsan side) lie along the routes to Gatbawi. Inside halls, stay quiet and obey rules against photography in restricted areas.",
            "In shoe-removal areas and the temple precinct, keep movement and conversation calm so as not to disturb others' services or prayers.",
          ],
        },
        {
          id: "stone",
          headingKo: "석불 관람 예절",
          headingEn: "Viewing the stone Buddha",
          paragraphsKo: [
            "석불 주변은 좁고 많은 방문객이 모입니다. 줄을 서서 관람하고, 불상에 기대거나 손을 짚는 행동은 삼가세요.",
            "소원을 빌거나 기도하는 분위기를 존중해, 큰 소리나 인라이브 방송·촬영 조명 등은 피하는 것이 좋습니다.",
          ],
          paragraphsEn: [
            "The area around the Buddha is narrow and draws many visitors. Queue to view it and avoid leaning on or touching the figure.",
            "Respect the atmosphere of prayer; avoid loud voices, live streaming, or photography lighting that could disturb others.",
          ],
        },
        {
          id: "nature",
          headingKo: "산길과 환경 주의사항",
          headingEn: "Trail and environment notes",
          paragraphsKo: [
            "팔공산은 국립공원입니다. 쓰레기는 되가져오고, 지정된 길 이외로 진입하거나 식생을 훼손하지 마세요.",
            "등산로에는 급경사와 돌계단이 많습니다. 타인에게 방해가 되는 큰 단체 행동보다는 조용한 이동을 권합니다.",
          ],
          paragraphsEn: [
            "Palgongsan is a national park. Carry out all litter and do not step off marked trails or damage vegetation.",
            "The route has steep grades and stone stairs. Prefer quiet movement over large-group activity that could disturb others.",
          ],
          calloutKo:
            "참배와 관람은 개인의 신앙·문화 활동입니다. 이 안내는 예절과 안전을 돕기 위한 것이며, 종교적 효험을 보장하지 않습니다.",
          calloutEn:
            "Pilgrimage and viewing are personal faith and cultural activities. This guide supports etiquette and safety only; it does not guarantee any religious efficacy.",
        },
      ],
      faqs: [
        {
          qKo: "사찰 법당에서 사진을 찍어도 되나요?",
          aKo: "법당 내부는 사찰의 규정에 따라 촬영이 금지된 곳이 많습니다. 안내 표지와 현장 안내를 따르세요.",
          qEn: "May I photograph inside the temple hall?",
          aEn: "Inside halls, photography is often prohibited by temple rules. Follow signage and on-site guidance.",
        },
        {
          qKo: "석불에 손을 대도 되나요?",
          aKo: "되도록 touching을 피하고, 줄을 서서 관람하세요. 문화재 보호와 타인 관람 예절을 위해 권장합니다.",
          qEn: "May I touch the stone Buddha?",
          aEn: "Please avoid touching and view it in a queue. This protects the heritage and respects other visitors.",
        },
        {
          qKo: "기도할 때 지켜야 할 것이 있나요?",
          aKo: "조용히 머무르고, 타인의 예불을 방해하지 않으며, 쓰레기를 되가져가는 것이 기본입니다.",
          qEn: "Any rules when praying?",
          aEn: "Stay quiet, do not disturb others' services, and carry out your litter — that is the baseline.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Pilgrimage Etiquette & Cautions | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Etiquette for visiting Gatbawi, cautions at temples and on the trail, plus notes on noise, litter, and prayer.",
      h1: "Gatbawi Pilgrimage Etiquette & Cautions",
      leadEn:
        "Etiquette and cautions worth keeping when visiting the temple, the trail, and the stone Buddha. We help you visit respectfully and safely.",
      updated: "2026-11-01",
      sections: [
        {
          id: "temple",
          headingEn: "Temple visit etiquette",
          paragraphsEn: [
            "Temples such as Gwanamsa (Daegu side) and Seonbonsa (Gyeongsan side) lie along the routes to Gatbawi. Inside halls, stay quiet and obey rules against photography in restricted areas.",
            "In shoe-removal areas and the temple precinct, keep movement and conversation calm so as not to disturb others' services or prayers.",
          ],
        },
        {
          id: "stone",
          headingEn: "Viewing the stone Buddha",
          paragraphsEn: [
            "The area around the Buddha is narrow and draws many visitors. Queue to view it and avoid leaning on or touching the figure.",
            "Respect the atmosphere of prayer; avoid loud voices, live streaming, or photography lighting that could disturb others.",
          ],
        },
        {
          id: "nature",
          headingEn: "Trail and environment notes",
          paragraphsEn: [
            "Palgongsan is a national park. Carry out all litter and do not step off marked trails or damage vegetation.",
            "The route has steep grades and stone stairs. Prefer quiet movement over large-group activity that could disturb others.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "May I photograph inside the temple hall?",
          aEn: "Inside halls, photography is often prohibited by temple rules. Follow signage and on-site guidance.",
          qKo: "사찰 법당에서 사진을 찍어도 되나요?",
          aKo: "법당 내부는 촬영이 금지된 곳이 많습니다. 안내를 따르세요.",
        },
        {
          qEn: "May I touch the stone Buddha?",
          aEn: "Please avoid touching and view it in a queue. This protects the heritage and respects other visitors.",
          qKo: "석불에 손을 대도 되나요?",
          aKo: "되도록 touching을 피하고 줄을 서서 관람하세요.",
        },
        {
          qEn: "Any rules when praying?",
          aEn: "Stay quiet, do not disturb others' services, and carry out your litter — that is the baseline.",
          qKo: "기도할 때 지켜야 할 것이 있나요?",
          aKo: "조용히 머무르고 쓰레기를 되가져가는 것이 기본입니다.",
        },
      ],
    },
  },
  {
    slug: "pilgrimage/wish-legend",
    group: "pilgrimage",
    priority: "P2",
    related: ["pilgrimage/etiquette", "heritage/medicine-buddha", "pilgrimage/seonbonsa"],
    ko: {
      metaTitle: "갓바위 한 가지 소원 전설 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위와 관련해 전해지는 소원 전설과 백일기도 등 민간 전승을 신앙의 영역으로 정리했습니다. 역사적 사실과 구분합니다.",
      h1: "갓바위 한 가지 소원 전설",
      leadKo:
        "갓바위와 관련해 오래도록 전해지는 소원 기도의 전통과 전설을 신앙과 전승의 영역으로 정리했습니다. 역사적 사실과 구분합니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "legend",
          headingKo: "전해지는 이야기",
          headingEn: "The stories told",
          paragraphsKo: [
            "갓바위에는 소원을 빌면 이루어진다는 민간의 전승이 오래도록 이어져 왔습니다. 정성을 다해 백일기도를 올리는 관습도 그런 전통의 하나입니다.",
            "이러한 이야기들은 방문 문화의 중요한 부분이지만, 이 안내는 이를 역사적 사실이나 의학적 효과로 단정하지 않습니다. 신앙과 전승으로 이해하세요.",
          ],
          paragraphsEn: [
            "A folk tradition that wishes made here come true has endured for a long time. The custom of offering a devoted 100-day prayer (baek-il gido) is part of that tradition.",
            "These stories are an important part of visiting culture, but this guide does not present them as historical facts or medical effects. Understand them as faith and tradition.",
          ],
        },
        {
          id: "practice",
          headingKo: "기도 전통과 정성",
          headingEn: "Prayer tradition and devotion",
          paragraphsKo: [
            "정상까지 이어진 계단을 ‘1,365칸’으로 세어 기도하는 관습이 널리 알려져 있습니다. 숫자는 전승에 따라 다르게 전해질 수 있습니다.",
            "기도를 하는 분들의 마음을 존중하며, 타인의 예불을 방해하지 않도록 조용히 머무는 것이 가장 기본적인 예절입니다.",
          ],
          paragraphsEn: [
            "The custom of counting the stairway to the peak — widely called the '1,365 steps' — as an act of devotion is well known. The number may be told differently across traditions.",
            "Respect the devotion of those who pray, and remaining quiet so as not to disturb others' services is the most basic etiquette.",
          ],
          calloutKo:
            "이 페이지의 내용은 민간 전승과 신앙의 영역입니다. 기도의 성취나 효험을 사실로 보장하는 표현이 아닙니다.",
          calloutEn:
            "This page's content belongs to folk tradition and faith. It is not an expression guaranteeing the fulfilment or efficacy of prayer.",
        },
      ],
      faqs: [
        {
          qKo: "정말 소원이 이루어지나요?",
          aKo: "민간 전승으로 전해지는 이야기이며, 이 안내는 기도의 성취를 사실로 보장하지 않습니다. 신앙의 영역으로 이해하세요.",
          qEn: "Do wishes really come true?",
          aEn: "It is a story passed down in folk tradition; this guide does not guarantee the fulfilment of prayers. Understand it as faith.",
        },
        {
          qKo: "계단은 정말 1,365개인가요?",
          aKo: "‘1,365계단’은 널리 알려진 표현이지만, 전승과 구간에 따라 실제 수는 다를 수 있습니다. 정확한 수치는 현장 안내를 확인하세요.",
          qEn: "Are there really 1,365 steps?",
          aEn: "The '1,365 steps' is a widely known expression, but the actual count may vary by tradition and section. Confirm on site.",
        },
      ],
    },
    en: {
      metaTitle: "The Gatbawi Wish Legend | Gatbawi Daegu Travel Guide",
      metaDescription:
        "The folk wish-prayer tradition and legends around Gatbawi, presented as faith and tradition, distinct from historical fact.",
      h1: "The Gatbawi Wish Legend",
      leadEn:
        "The long-standing wish-prayer tradition and legends around Gatbawi, presented as faith and tradition — distinct from historical fact.",
      updated: "2026-11-01",
      sections: [
        {
          id: "legend",
          headingEn: "The stories told",
          paragraphsEn: [
            "A folk tradition that wishes made here come true has endured for a long time. The custom of offering a devoted 100-day prayer (baek-il gido) is part of that tradition.",
            "These stories are an important part of visiting culture, but this guide does not present them as historical facts or medical effects. Understand them as faith and tradition.",
          ],
        },
        {
          id: "practice",
          headingEn: "Prayer tradition and devotion",
          paragraphsEn: [
            "The custom of counting the stairway to the peak — widely called the '1,365 steps' — as an act of devotion is well known. The number may be told differently across traditions.",
            "Respect the devotion of those who pray, and remaining quiet so as not to disturb others' services is the most basic etiquette.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Do wishes really come true?",
          aEn: "It is a story passed down in folk tradition; this guide does not guarantee the fulfilment of prayers. Understand it as faith.",
          qKo: "정말 소원이 이루어지나요?",
          aKo: "민간 전승으로 전해지는 이야기이며 이 안내는 보장하지 않습니다.",
        },
        {
          qEn: "Are there really 1,365 steps?",
          aEn: "The '1,365 steps' is a widely known expression, but the actual count may vary by tradition and section. Confirm on site.",
          qKo: "계단은 정말 1,365개인가요?",
          aKo: "널리 알려진 표현이지만 실제 수는 다를 수 있습니다.",
        },
      ],
    },
  },
  {
    slug: "pilgrimage/seonbonsa",
    group: "pilgrimage",
    priority: "P1",
    related: ["routes/gyeongsan-seonbonsa", "heritage/gwanbong-stone-buddha", "itineraries/temples-day-trip"],
    ko: {
      metaTitle: "선본사와 갓바위 부처님의 관계 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "경산 선본사가 갓바위 석불과 어떻게 연결되는지, 경산 측 참배 동선에서의 위치와 문화적 의미를 정리했습니다.",
      h1: "선본사와 갓바위 부처님의 관계",
      leadKo:
        "갓바위 석불과 가장 가까이 연결된 사찰인 선본사(경산 측)의 관계와, 경산 방면 참배 동선에서의 위치를 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "relation",
          headingKo: "선본사와 석불의 연결",
          headingEn: "Seonbonsa and the stone Buddha",
          paragraphsKo: [
            "선본사(禪本寺)는 경산 측 접근로에 있는 사찰로, 갓바위 석불과 긴밀하게 연결되어 있습니다. 공개 관광 자료와 사찰 안내에서도 경산 방면 참배 동선의 중심으로 소개됩니다.",
            "석불은 사찰의 말사(작은 절) 성격으로 설명되기도 합니다. 정확한 역사적 관계는 국가유산청과 사찰 공식 자료를 함께 참고하세요.",
          ],
          paragraphsEn: [
            "Seonbonsa (禪本寺) is a temple on the Gyeongsan approach and is closely linked to the Gatbawi stone Buddha. Public tourism and temple guidance present it as the centre of the Gyeongsan-side pilgrimage route.",
            "The Buddha is sometimes described as a small branch temple (malsa) of the main temple. For the precise historical relationship, consult both the National Heritage Administration and the temple's official materials.",
          ],
        },
        {
          id: "route",
          headingKo: "경산 측 참배 동선에서의 위치",
          headingEn: "Position on the Gyeongsan route",
          paragraphsKo: [
            "경산 측에서 갓바위로 향할 때는 선본사를 거쳐 올라가는 동선이 공개 자료에 소개됩니다. 선본사에서 출발해 정상 방향으로 이어지는 길을 따라가세요.",
            "경산 측과 대구 측은 도로와 산길이 다르므로, 출발 전 어느 쪽에서 오르는지 명확히 정하세요. 두 측면의 식당·카페·주차도 별도 안내로 보세요.",
          ],
          paragraphsEn: [
            "Public sources introduce a route from Gyeongsan that passes through Seonbonsa and climbs toward the peak. Start at Seonbonsa and follow the path toward the summit.",
            "The Daegu and Gyeongsan sides differ in roads and trails, so decide clearly which side you ascend before departure. Restaurants, cafés, and parking on each side are covered separately.",
          ],
        },
        {
          id: "caution",
          headingKo: "확인과 주의",
          headingEn: "Verification and cautions",
          paragraphsKo: [
            "사찰의 법회·개방 시간, 요금, 주차는 운영에 따라 바뀝니다. 출발 직전 사찰 안내와 국립공원 통제정보를 확인하세요.",
            "선본사와 갓바위는 같은 산자락에 있지만, 정상까지의 산길 상태는 날씨와 통제에 따라 달라집니다.",
          ],
          paragraphsEn: [
            "Temple service times, fees, and parking change with operations. Check the temple notice and KNPS restrictions just before leaving.",
            "Seonbonsa and Gatbawi share the same mountain slope, but trail conditions to the peak vary with weather and restrictions.",
          ],
        },
      ],
      faqs: [
        {
          qKo: "갓바위와 선본사는 어떤 관계인가요?",
          aKo: "선본사는 경산 측 접근로의 사찰로 갓바위 석불과 긴밀히 연결되어 있습니다. 정확한 역사적 관계는 공적 자료를 참고하세요.",
          qEn: "How is Gatbawi related to Seonbonsa?",
          aEn: "Seonbonsa is the temple on the Gyeongsan approach, closely linked to the Gatbawi stone Buddha. Consult public records for the precise history.",
        },
        {
          qKo: "경산 측에서 갓바위로 가려면 선본사를 거치나요?",
          aKo: "네. 공개 자료는 경산 방면 참배 동선을 선본사를 거쳐 올라가는 형태로 소개합니다.",
          qEn: "Do I pass Seonbonsa to reach Gatbawi from Gyeongsan?",
          aEn: "Yes. Public sources present the Gyeongsan approach as climbing via Seonbonsa.",
        },
      ],
    },
    en: {
      metaTitle: "Seonbonsa & the Gatbawi Buddha | Gatbawi Daegu Travel Guide",
      metaDescription:
        "How Seonbonsa (Gyeongsan) connects to the Gatbawi stone Buddha, and its position on the Gyeongsan-side pilgrimage route.",
      h1: "Seonbonsa & the Gatbawi Buddha",
      leadEn:
        "The temple most closely tied to the Gatbawi stone Buddha — Seonbonsa (Gyeongsan) — and its position on the Gyeongsan-side pilgrimage route.",
      updated: "2026-11-01",
      sections: [
        {
          id: "relation",
          headingEn: "Seonbonsa and the stone Buddha",
          paragraphsEn: [
            "Seonbonsa (禪本寺) is a temple on the Gyeongsan approach and is closely linked to the Gatbawi stone Buddha. Public tourism and temple guidance present it as the centre of the Gyeongsan-side pilgrimage route.",
            "The Buddha is sometimes described as a small branch temple (malsa) of the main temple. For the precise historical relationship, consult both the National Heritage Administration and the temple's official materials.",
          ],
        },
        {
          id: "route",
          headingEn: "Position on the Gyeongsan route",
          paragraphsEn: [
            "Public sources introduce a route from Gyeongsan that passes through Seonbonsa and climbs toward the peak. Start at Seonbonsa and follow the path toward the summit.",
            "The Daegu and Gyeongsan sides differ in roads and trails, so decide clearly which side you ascend before departure. Restaurants, cafés, and parking on each side are covered separately.",
          ],
        },
        {
          id: "caution",
          headingEn: "Verification and cautions",
          paragraphsEn: [
            "Temple service times, fees, and parking change with operations. Check the temple notice and KNPS restrictions just before leaving.",
            "Seonbonsa and Gatbawi share the same mountain slope, but trail conditions to the peak vary with weather and restrictions.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "How is Gatbawi related to Seonbonsa?",
          aEn: "Seonbonsa is the temple on the Gyeongsan approach, closely linked to the Gatbawi stone Buddha. Consult public records for the precise history.",
          qKo: "갓바위와 선본사는 어떤 관계인가요?",
          aKo: "선본사는 경산 측 접근로의 사찰로 갓바위와 연결되어 있습니다.",
        },
        {
          qEn: "Do I pass Seonbonsa to reach Gatbawi from Gyeongsan?",
          aEn: "Yes. Public sources present the Gyeongsan approach as climbing via Seonbonsa.",
          qKo: "경산 측에서 갓바위로 가려면 선본사를 거치나요?",
          aKo: "네. 경산 방면 동선은 선본사를 거쳐 올라가는 형태입니다.",
        },
      ],
    },
  },
];
