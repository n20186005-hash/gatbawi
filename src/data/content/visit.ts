import type { Topic } from "../topics";

export const visitTopics: Topic[] = [
  {
    slug: "visit/time-required",
    group: "visit",
    priority: "P0",
    related: ["routes/stairs-difficulty", "visit/hours-fees", "routes/daegu-gwanamsa", "itineraries/daegu-half-day"],
    ko: {
      metaTitle: "갓바위 왕복 시간과 방문 소요시간 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위 왕복 소요 시간, 입구에서 정상까지의 등반 시간, 체력·혼잡·날씨에 따른 변화와 동선 계획 요령을 정리했습니다.",
      h1: "갓바위 왕복 시간과 방문 소요시간",
      leadKo:
        "갓바위 왕복에 얼마나 걸리는지, 입구에서 정상까지 등반 시간, 체력·혼잡·날씨에 따른 변화와 동선 계획 요령을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "overview",
          headingKo: "대략적인 소요 시간",
          headingEn: "Rough time needed",
          paragraphsKo: [
            "입구에서 갓바위 정상(관봉)까지는 거리가 짧아도 가파른 오르막이 이어져, 왕복에 상당한 시간이 듭니다. 정확한 수치는 체력과 혼잡에 따라 크게 다릅니다.",
            "공식 안내 숫자(거리·예상 소요 시간)는 국립공원 탐방안내소와 현장 표지판에서 확인하세요. 이 안내는 계획용 개요입니다.",
          ],
          paragraphsEn: [
            "From the entrance to the Gatbawi peak (Gwanbong), the distance is short but a steep climb continues, so a round trip takes considerable time. Exact figures vary greatly with fitness and crowding.",
            "Confirm official figures (distance, estimated time) at the KNPS visitor centre and on on-site signboards. This is a planning overview.",
          ],
        },
        {
          id: "factors",
          headingKo: "시간에 영향을 주는 요소",
          headingEn: "What affects the time",
          bulletsKo: [
            "체력: 평소 등산 여부에 따라 등반·하산 속도 차이 큼",
            "혼잡: 주말·명절·시험철은 줄 서서 이동해 느려짐",
            "날씨: 폭염·추위·빗길은 안전 속도로 인해 지연",
            "휴식: 쉼터와 사찰 관람에 쓰는 시간",
          ],
          bulletsEn: [
            "Fitness: climbing/descent speed varies widely with hiking habit",
            "Crowding: weekends, holidays, exam season slow you with queuing",
            "Weather: heat, cold, wet trails delay for safety speed",
            "Rest: time spent at rest areas and temple viewing",
          ],
        },
        {
          id: "plan",
          headingKo: "동선 계획 요령",
          headingEn: "Planning the route",
          paragraphsKo: [
            "일몰 전 하산을 맞추려면 오전 일찍 출발하세요. 대구 반일·경산 반일 동선은 ‘대구 반일 코스’·‘경산 반일 코스’ 페이지에서 정리했습니다.",
            "정상까지 오르기보다 입구 경내 관람만 하는 경우 소요 시간은 훨씬 짧습니다.",
          ],
          paragraphsEn: [
            "To finish descent before sunset, start early in the morning. Daegu and Gyeongsan half-day routes are covered on the 'Daegu half-day' and 'Gyeongsan half-day' pages.",
            "If you only view the precinct near the entrance instead of climbing to the peak, the time needed is much shorter.",
          ],
          calloutKo:
            "소요 시간은 추정치이며 당일 날씨·통제·혼잡에 따라 달라집니다. 입산 통제와 일몰 시간을 가장 먼저 확인하세요.",
          calloutEn:
            "Time needed is an estimate and varies with same-day weather, restrictions, and crowding. Check entry restrictions and sunset time first.",
        },
      ],
      faqs: [
        {
          qKo: "왕복 몇 시간 걸리나요?",
          aKo: "체력과 혼잡에 따라 다릅니다. 거리보다 경사와 계단이 부담이므로, 여유 있게 오전 출발을 권합니다.",
          qEn: "How many hours round trip?",
          aEn: "It depends on fitness and crowding. The grade and stairs matter more than distance, so start in the morning with buffer.",
        },
        {
          qKo: "정상까지 얼마나 걸리나요?",
          aKo: "공식 안내 숫자는 현장 표지판과 탐방안내소에서 확인하세요. 이 안내는 계획용 개요입니다.",
          qEn: "How long to the summit?",
          aEn: "Confirm official figures on signboards and at the visitor centre. This is a planning overview.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Round-trip Time Needed | Gatbawi Daegu Travel Guide",
      metaDescription:
        "How long a Gatbawi round trip takes, climb time from entrance to peak, and how fitness, crowding, and weather change it.",
      h1: "Gatbawi Round-trip Time Needed",
      leadEn:
        "How long a Gatbawi round trip takes, climb time from entrance to peak, and how fitness, crowding, and weather change it.",
      updated: "2026-11-01",
      sections: [
        {
          id: "overview",
          headingEn: "Rough time needed",
          paragraphsEn: [
            "From the entrance to the Gatbawi peak (Gwanbong), the distance is short but a steep climb continues, so a round trip takes considerable time. Exact figures vary greatly with fitness and crowding.",
            "Confirm official figures (distance, estimated time) at the KNPS visitor centre and on on-site signboards. This is a planning overview.",
          ],
        },
        {
          id: "factors",
          headingEn: "What affects the time",
          bulletsEn: [
            "Fitness: climbing/descent speed varies widely with hiking habit",
            "Crowding: weekends, holidays, exam season slow you with queuing",
            "Weather: heat, cold, wet trails delay for safety speed",
            "Rest: time spent at rest areas and temple viewing",
          ],
        },
        {
          id: "plan",
          headingEn: "Planning the route",
          paragraphsEn: [
            "To finish descent before sunset, start early in the morning. Daegu and Gyeongsan half-day routes are covered on the 'Daegu half-day' and 'Gyeongsan half-day' pages.",
            "If you only view the precinct near the entrance instead of climbing to the peak, the time needed is much shorter.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "How many hours round trip?",
          aEn: "It depends on fitness and crowding. The grade and stairs matter more than distance, so start in the morning with buffer.",
          qKo: "왕복 몇 시간 걸리나요?",
          aKo: "체력과 혼잡에 따라 다릅니다.",
        },
        {
          qEn: "How long to the summit?",
          aEn: "Confirm official figures on signboards and at the visitor centre. This is a planning overview.",
          qKo: "정상까지 얼마나 걸리나요?",
          aKo: "공식 안내 숫자는 현장 표지판에서 확인하세요.",
        },
      ],
    },
  },
  {
    slug: "visit/hours-fees",
    group: "visit",
    priority: "P0",
    related: ["visit/time-required", "visit/crowds", "routes/daegu-gwanamsa", "transport/daegu-parking"],
    ko: {
      metaTitle: "갓바위 입산시간·입장료·통제 안내 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위 방문 시 입산 시간, 입장료·이용 요금, 국립공원 통제와 사찰 규정의 차이를 정리했습니다. 24시간 개방이 아님을 안내합니다.",
      h1: "갓바위 입산시간·입장료·통제 안내",
      leadKo:
        "갓바위 방문 시 혼동하기 쉬운 입산 시간, 입장료·이용 요금, 국립공원 통제와 사찰 규정을 구분해 정리했습니다. ‘24시간 언제든 갈 수 있다’는 오해를 피하세요.",
      updated: "2026-11-01",
      sections: [
        {
          id: "entry",
          headingKo: "입산 시간과 통제",
          headingEn: "Entry hours and restrictions",
          paragraphsKo: [
            "팔공산은 국립공원이며, 갓바위가 있는 구간은 입산 시간과 통제가 운영될 수 있습니다. ‘24시간 언제든 오를 수 있다’는 오해가 있으나, 실제로는 당일의 기상·안전·시설 사정에 따라 입산이 제한됩니다.",
            "정확한 입산 가능 시간과 통제 여부는 출발 전 국립공원 탐방안내소와 통제 안내를 반드시 확인하세요.",
          ],
          paragraphsEn: [
            "Palgongsan is a national park, and the section with Gatbawi may operate entry hours and restrictions. There is a misconception that you can climb anytime, 24 hours, but in practice entry is limited by same-day weather, safety, and facility conditions.",
            "Always confirm entry hours and any restrictions with the KNPS visitor centre before departure.",
          ],
        },
        {
          id: "fees",
          headingKo: "입장료와 이용 요금",
          headingEn: "Admission and usage fees",
          paragraphsKo: [
            "석불 관람 자체에 대한 입장료는 별도로 부과되지 않는 것이 일반적이며, 주차장·편의시설 이용은 운영 주체에 따라 요금이 있을 수 있습니다.",
            "요금과 운영 여부는 현장 안내와 탐방안내소에서 출발 전 확인하세요. 이 안내는 보장이 아닙니다.",
          ],
          paragraphsEn: [
            "There is generally no separate admission fee to view the stone Buddha itself; parking and facility use may carry fees depending on the operator.",
            "Confirm fees and operations on site and with the visitor centre before departure. This is not a guarantee.",
          ],
          calloutKo:
            "‘입산 시간·입장료·통제’는 성격이 다릅니다. 이 안내는 개요이며, 당일의 국립공원 통제와 사찰 규정은 출발 전 공식 안내로 재확인하세요.",
          calloutEn:
            "Entry hours, admission, and restrictions are different in nature. This is an overview; reconfirm same-day KNPS restrictions and temple rules with official guidance before departure.",
        },
        {
          id: "temple",
          headingKo: "사찰 규정과 예절",
          headingEn: "Temple rules and etiquette",
          paragraphsKo: [
            "경내와 법당은 사찰의 규정(개방 시간·촬영 금지 등)을 따릅니다. 관람 예절은 ‘갓바위 참배 예절’ 페이지를 보세요.",
            "입산 통제와 별개로, 사찰 행사·법회로 경내 이용이 제한될 수 있습니다.",
          ],
          paragraphsEn: [
            "The precinct and halls follow temple rules (opening hours, no photography, etc.). See the 'Gatbawi pilgrimage etiquette' page for viewing manners.",
            "Separate from entry restrictions, precinct use may be limited by temple events and services.",
          ],
        },
      ],
      faqs: [
        {
          qKo: "24시간 언제든 갈 수 있나요?",
          aKo: "아니요. 국립공원 입산 시간과 당일 통제가 적용될 수 있습니다. 출발 전 통제 안내를 확인하세요.",
          qEn: "Can I go anytime, 24 hours?",
          aEn: "No. National park entry hours and same-day restrictions may apply. Check restriction notices before departure.",
        },
        {
          qKo: "입장료가 있나요?",
          aKo: "석불 관람 자체 입장료는 별도 부과가 일반적이지 않습니다. 주차장·편의시설은 운영 주체에 따라 요금이 있을 수 있으니 현장 확인하세요.",
          qEn: "Is there an admission fee?",
          aEn: "There is generally no separate admission to view the Buddha. Parking/facilities may have fees by operator; confirm on site.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Entry Hours, Fees & Restrictions | Gatbawi Daegu Travel Guide",
      metaDescription:
        "Distinguishing entry hours, admission/usage fees, KNPS restrictions, and temple rules for Gatbawi. Not open 24 hours.",
      h1: "Gatbawi Entry Hours, Fees & Restrictions",
      leadEn:
        "Distinguishing entry hours, admission/usage fees, KNPS restrictions, and temple rules for Gatbawi. Not open 24 hours.",
      updated: "2026-11-01",
      sections: [
        {
          id: "entry",
          headingEn: "Entry hours and restrictions",
          paragraphsEn: [
            "Palgongsan is a national park, and the section with Gatbawi may operate entry hours and restrictions. There is a misconception that you can climb anytime, 24 hours, but in practice entry is limited by same-day weather, safety, and facility conditions.",
            "Always confirm entry hours and any restrictions with the KNPS visitor centre before departure.",
          ],
        },
        {
          id: "fees",
          headingEn: "Admission and usage fees",
          paragraphsEn: [
            "There is generally no separate admission fee to view the stone Buddha itself; parking and facility use may carry fees depending on the operator.",
            "Confirm fees and operations on site and with the visitor centre before departure. This is not a guarantee.",
          ],
        },
        {
          id: "temple",
          headingEn: "Temple rules and etiquette",
          paragraphsEn: [
            "The precinct and halls follow temple rules (opening hours, no photography, etc.). See the 'Gatbawi pilgrimage etiquette' page for viewing manners.",
            "Separate from entry restrictions, precinct use may be limited by temple events and services.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Can I go anytime, 24 hours?",
          aEn: "No. National park entry hours and same-day restrictions may apply. Check restriction notices before departure.",
          qKo: "24시간 언제든 갈 수 있나요?",
          aKo: "아니요. 국립공원 입산 시간과 통제가 적용될 수 있습니다.",
        },
        {
          qEn: "Is there an admission fee?",
          aEn: "There is generally no separate admission to view the Buddha. Parking/facilities may have fees by operator; confirm on site.",
          qKo: "입장료가 있나요?",
          aKo: "석불 관람 자체 입장료는 별도 부과가 일반적이지 않습니다.",
        },
      ],
    },
  },
  {
    slug: "visit/packing-list",
    group: "visit",
    priority: "P1",
    related: ["visit/time-required", "routes/stairs-difficulty", "season/winter", "season/rainy-day"],
    ko: {
      metaTitle: "갓바위 등산 준비물 체크리스트 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위 방문 시 챙기면 좋은 준비물, 신발·물·보호 장비·날씨 대비를 정리한 체크리스트를 제공합니다.",
      h1: "갓바위 등산 준비물 체크리스트",
      leadKo:
        "갓바위를 방문할 때 챙기면 좋은 준비물을 신발, 물, 보호 장비, 날씨 대비로 나누어 정리한 체크리스트입니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "shoes",
          headingKo: "신발과 보호",
          headingEn: "Footwear & protection",
          bulletsKo: [
            "미끄럼 방지 등산화 또는 단단한 운동화",
            "무릎 보호용 스틱·지팡이(어르신·아이)",
            "장갑(돌계단 난간 잡을 때)",
            "모자·선크림(여름 자외선)",
          ],
          bulletsEn: [
            "Slip-resistant hiking shoes or sturdy sneakers",
            "Poles/cane for knee protection (seniors, children)",
            "Gloves (for holding stone-stair railings)",
            "Hat, sunscreen (summer UV)",
          ],
        },
        {
          id: "supply",
          headingKo: "수분과 간식",
          headingEn: "Water & snacks",
          bulletsKo: [
            "충분한 물(산길 중간 식수대 운영 불확실)",
            "가벼운 간식과 비상 식량",
            "비타민·개인 상비약",
            "쓰레기 담을 비닐(되가져오기)",
          ],
          bulletsEn: [
            "Enough water (mid-trail water points uncertain)",
            "Light snacks and emergency food",
            "Vitamins and personal remedies",
            "A bag for litter (carry out)",
          ],
        },
        {
          id: "weather",
          headingKo: "날씨 대비",
          headingEn: "Weather readiness",
          bulletsKo: [
            "겉옷(비·바람·일교차)",
            "우비 또는 방수 재킷(장마·소나기)",
            "보온 착용(겨울·고지대)",
            "보조 배터리(스마트폰 내비·연락)",
          ],
          bulletsEn: [
            "Outer layer (rain, wind, temperature swing)",
            "Raincoat or waterproof jacket (monsoon, showers)",
            "Warm layers (winter, high elevation)",
            "Power bank (phone nav/contact)",
          ],
          calloutKo:
            "준비물은 계절과 날씨에 따라 다릅니다. 출발 전 기상청 예보와 국립공원 통제정보를 함께 확인하세요.",
          calloutEn:
            "Packing varies with season and weather. Also check the KMA forecast and KNPS restrictions before departure.",
        },
      ],
      faqs: [
        {
          qKo: "꼭 등산화여야 하나요?",
          aKo: "돌계단과 비탈이 많아 미끄럼 방지 신발이 안전합니다. 단단한 운동화도 가능하지만 샌들은 피하세요.",
          qEn: "Must I wear hiking shoes?",
          aEn: "With many stone stairs and slopes, slip-resistant shoes are safest. Sturdy sneakers work, but avoid sandals.",
        },
        {
          qKo: "물은 얼마나 가져가나요?",
          aKo: "산길 중간 식수대 운영이 불확실하므로, 왕복 내내 쓸 충분한 물을 출발 전 준비하세요.",
          qEn: "How much water should I bring?",
          aEn: "Mid-trail water points are uncertain, so prepare enough water for the whole round trip before starting.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Hiking Packing Checklist | Gatbawi Daegu Travel Guide",
      metaDescription:
        "A packing checklist for visiting Gatbawi — footwear, water, protective gear, and weather readiness.",
      h1: "Gatbawi Hiking Packing Checklist",
      leadEn:
        "A packing checklist for visiting Gatbawi — footwear, water, protective gear, and weather readiness.",
      updated: "2026-11-01",
      sections: [
        {
          id: "shoes",
          headingEn: "Footwear & protection",
          bulletsEn: [
            "Slip-resistant hiking shoes or sturdy sneakers",
            "Poles/cane for knee protection (seniors, children)",
            "Gloves (for holding stone-stair railings)",
            "Hat, sunscreen (summer UV)",
          ],
        },
        {
          id: "supply",
          headingEn: "Water & snacks",
          bulletsEn: [
            "Enough water (mid-trail water points uncertain)",
            "Light snacks and emergency food",
            "Vitamins and personal remedies",
            "A bag for litter (carry out)",
          ],
        },
        {
          id: "weather",
          headingEn: "Weather readiness",
          bulletsEn: [
            "Outer layer (rain, wind, temperature swing)",
            "Raincoat or waterproof jacket (monsoon, showers)",
            "Warm layers (winter, high elevation)",
            "Power bank (phone nav/contact)",
          ],
        },
      ],
      faqs: [
        {
          qEn: "Must I wear hiking shoes?",
          aEn: "With many stone stairs and slopes, slip-resistant shoes are safest. Sturdy sneakers work, but avoid sandals.",
          qKo: "꼭 등산화여야 하나요?",
          aKo: "미끄럼 방지 신발이 안전합니다.",
        },
        {
          qEn: "How much water should I bring?",
          aEn: "Mid-trail water points are uncertain, so prepare enough water for the whole round trip before starting.",
          qKo: "물은 얼마나 가져가나요?",
          aKo: "산길 중간 식수대 운영이 불확실하므로 충분히 준비하세요.",
        },
      ],
    },
  },
  {
    slug: "visit/crowds",
    group: "visit",
    priority: "P1",
    related: ["visit/time-required", "visit/hours-fees", "routes/daegu-gwanamsa", "season/autumn"],
    ko: {
      metaTitle: "갓바위 주말·명절·시험철 혼잡 | 갓바위 (팔공산) 대구 여행 가이드",
      metaDescription:
        "갓바위가 가장 혼잡한 시기(주말·명절·시험철·단풍), 대기와 주차 혼잡 완화 요령을 정리했습니다.",
      h1: "갓바위 주말·명절·시험철 혼잡",
      leadKo:
        "갓바위가 가장 혼잡한 시기와, 줄 서기·주차 만차·대중교통 지연을 줄이기 위한 방문 요령을 정리했습니다.",
      updated: "2026-11-01",
      sections: [
        {
          id: "when",
          headingKo: "혼잡이 심한 시기",
          headingEn: "When it gets crowded",
          paragraphsKo: [
            "갓바위는 주말과 공휴일·명절, 그리고 수험생 기도가 많은 수험철(연말~이듬해 초)에 방문객이 크게 몰립니다. 단풍 시즌(가을)에도 인파가 많습니다.",
            "혼잡은 좁은 정상 부근 관람 동선과 주차장, 대중교통에 영향을 줍니다.",
          ],
          paragraphsEn: [
            "Gatbawi draws large crowds on weekends, public holidays, and the exam season (late year to early next) when many students pray. The autumn foliage season is also busy.",
            "Crowding affects the narrow viewing route near the peak, parking, and public transit.",
          ],
        },
        {
          id: "tip",
          headingKo: "혼잡 완화 요령",
          headingEn: "How to ease the crowding",
          bulletsKo: [
            "평일·이른 아침 방문",
            "주차 만차 대비 대중교통 이용",
            "성수기 막차·배차는 더 길어질 수 있음 고려",
            "정상 대신 입구 경내 관람으로 분산",
          ],
          bulletsEn: [
            "Visit on weekdays or early morning",
            "Use transit to avoid full parking",
            "Expect longer last-bus intervals in peak season",
            "Spread out by viewing the entrance precinct instead of the peak",
          ],
        },
        {
          id: "note",
          headingKo: "안전과 예절",
          headingEn: "Safety and etiquette",
          paragraphsKo: [
            "혼잡한 좁은 동선에서는 서로 양보하고, 타인의 기도·예불을 방해하지 않도록 조용히 이동하세요.",
            "미끄럼과 추락 위험이 큰 구간이므로, 인파 속에서도 천천히 이동하세요.",
          ],
          paragraphsEn: [
            "On crowded narrow routes, yield to others and move quietly so as not to disturb prayers and services.",
            "Some sections carry high slip and fall risk, so move slowly even in crowds.",
          ],
          calloutKo:
            "혼잡 시기의 정확한 통제와 주차 운영은 현장 사정에 따라 다릅니다. 출발 전 탐방안내소 안내를 확인하세요.",
          calloutEn:
            "Restrictions and parking operations during crowded periods vary with on-site conditions. Check the visitor-centre guidance before departure.",
        },
      ],
      faqs: [
        {
          qKo: "언제 가장 붐비나요?",
          aKo: "주말·명절·수험철(연말~이듬해 초)과 가을 단풍 시즌이 가장 붐빕니다.",
          qEn: "When is it most crowded?",
          aEn: "Weekends, holidays, exam season (late year to early next), and autumn foliage season are busiest.",
        },
        {
          qKo: "붐비지 않게 가려면?",
          aKo: "평일과 이른 아침 방문, 대중교통 이용, 그리고 정상 대신 입구 경내 관람을 권합니다.",
          qEn: "How to avoid the crowds?",
          aEn: "Visit on weekdays or early morning, use transit, and consider viewing the entrance precinct instead of the peak.",
        },
      ],
    },
    en: {
      metaTitle: "Gatbawi Crowds: Weekends, Holidays & Exam Season | Gatbawi Daegu Travel Guide",
      metaDescription:
        "When Gatbawi is most crowded (weekends, holidays, exam season, foliage) and how to reduce waiting, parking, and transit delays.",
      h1: "Gatbawi Crowds: Weekends, Holidays & Exam Season",
      leadEn:
        "When Gatbawi is most crowded (weekends, holidays, exam season, foliage) and how to reduce waiting, parking, and transit delays.",
      updated: "2026-11-01",
      sections: [
        {
          id: "when",
          headingEn: "When it gets crowded",
          paragraphsEn: [
            "Gatbawi draws large crowds on weekends, public holidays, and the exam season (late year to early next) when many students pray. The autumn foliage season is also busy.",
            "Crowding affects the narrow viewing route near the peak, parking, and public transit.",
          ],
        },
        {
          id: "tip",
          headingEn: "How to ease the crowding",
          bulletsEn: [
            "Visit on weekdays or early morning",
            "Use transit to avoid full parking",
            "Expect longer last-bus intervals in peak season",
            "Spread out by viewing the entrance precinct instead of the peak",
          ],
        },
        {
          id: "note",
          headingEn: "Safety and etiquette",
          paragraphsEn: [
            "On crowded narrow routes, yield to others and move quietly so as not to disturb prayers and services.",
            "Some sections carry high slip and fall risk, so move slowly even in crowds.",
          ],
        },
      ],
      faqs: [
        {
          qEn: "When is it most crowded?",
          aEn: "Weekends, holidays, exam season (late year to early next), and autumn foliage season are busiest.",
          qKo: "언제 가장 붐비나요?",
          aKo: "주말·명절·수험철과 가을 단풍 시즌이 가장 붐빕니다.",
        },
        {
          qEn: "How to avoid the crowds?",
          aEn: "Visit on weekdays or early morning, use transit, and consider viewing the entrance precinct instead of the peak.",
          qKo: "붐비지 않게 가려면?",
          aKo: "평일과 이른 아침 방문, 대중교통 이용을 권합니다.",
        },
      ],
    },
  },
];
