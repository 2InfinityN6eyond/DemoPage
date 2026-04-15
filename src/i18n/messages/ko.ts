import type { SiteDictionary } from "@/i18n/schema";

export const ko: SiteDictionary = {
  meta: {
    siteName: "LogK",
    homeTitle: "LogK | 최고의 AI 모델들 사이를 위임하는 방식",
    homeDescription:
      "LogK는 여러 AI 모델을 함께 선택하고, 예상 비용을 먼저 확인한 뒤, 질문을 위임하고, 결과를 비교하거나 집계할 수 있게 해주는 서비스입니다.",
    productTitle: "LogK Product | 멀티모델 AI 위임 서비스",
    productDescription: "모델 선택, 비용 예측, 멀티모델 위임, 결과 집계, 검증 루프, 개인정보 차단까지 LogK 제품 구조를 살펴보세요."
  },
  nav: {
    items: [
      { key: "company", label: "회사 소개", href: "#company" },
      { key: "solution", label: "솔루션", href: "#solution" },
      { key: "technology", label: "기술", href: "#technology" },
      { key: "contact", label: "문의", href: "#contact" }
    ],
    product: "제품",
    talkToSales: "도입 문의",
    home: "홈",
    bookDemo: "데모 요청"
  },
  theme: {
    light: "라이트",
    dark: "다크",
    toggleLabel: "색상 테마 전환"
  },
  localeSwitcher: {
    label: "언어"
  },
  hero: {
    eyebrow: "멀티모델 AI 위임",
    title: "모델들 사이로 위임하고.",
    titleAccent: "근거를 보고 결정합니다.",
    lede:
      "LogK는 ChatGPT, Claude, Gemini 같은 여러 AI 모델을 하나의 대시보드에서 함께 선택하고, 예상 비용을 먼저 확인한 뒤, 질문을 위임하고, 결과를 비교하거나 집계할 수 있게 합니다.",
    primaryCta: "제품 보기",
    secondaryCta: "시스템 살펴보기",
    metrics: [
      { value: "1 question", label: "하나의 질문을 여러 모델에 동시에 fan-out" },
      { value: "live estimate", label: "실행 전에 예상 크레딧 비용을 확인" },
      { value: "privacy filter", label: "민감 정보는 위임 전에 차단 또는 가림 처리" }
    ]
  },
  trust: [
    "ChatGPT, Claude, Gemini 등 다양한 모델 대응",
    "팀과 파워 유저를 위한 설계",
    "비용이 보이는 크레딧 기반 과금",
    "프로바이더 전송 전 개인정보 차단"
  ],
  solution: {
    eyebrow: "솔루션",
    title: "하나의 질문을 여러 AI 서비스에 보낼 수 있습니다.",
    description:
      "현재 시장의 많은 제품은 개발자 게이트웨이, 단일 채팅 인터페이스, 혹은 관측성에 집중합니다. LogK는 그 위에서 사용자가 모델을 고르고, 가격을 보고, 위임하고, 검증하는 의사결정 레이어를 만듭니다.",
    cards: [
      {
        index: "01",
        title: "하나의 대시보드에서 여러 모델을 선택합니다",
        body:
          "사용자는 하나의 모델만 고를 수도 있고, 여러 모델 카드를 함께 선택해 비교, 집계, 혹은 작업별 최적 조합을 구성할 수도 있습니다.",
        bullets: [
          "프로바이더, 속도, 품질, 모달리티별 모델 카드",
          "여러 답변을 한 번에 비교",
          "현재 질문에 맞는 추천 스택 제공"
        ],
        tall: true
      },
      {
        index: "02",
        title: "위임 전에 비용을 확인합니다",
        body:
          "LogK는 요청 실행 전에 예상 비용을 보여주어, 사용자가 가격과 품질, 범위 사이에서 의도적인 선택을 할 수 있게 합니다."
      },
      {
        index: "03",
        title: "자동 후속 검증을 붙일 수 있습니다",
        body:
          "모델 간 의견이 갈리거나 신뢰도가 낮을 때, 혹은 한 번 더 확인이 필요할 때 자동으로 후속 질문과 검증 루프를 실행할 수 있습니다."
      }
    ]
  },
  showcase: {
    eyebrow: "제품 인터페이스",
    title: "하나의 제품, 세 가지 핵심 모드.",
    description:
      "작업 흐름은 분명합니다. 모델 스택을 고르고, 여러 프로바이더에 위임하고, 마지막으로 결과를 비교하고 검증합니다.",
    tabs: [
      {
        id: "plan",
        label: "선택",
        title: "작업에 맞는 모델 스택을 고릅니다",
        body:
          "빠른 응답이 필요하면 한 모델을, 비교가 필요하면 여러 모델을, 그리고 글쓰기나 코딩, 리서치처럼 작업 특성이 분명하면 추천 스택을 선택할 수 있습니다.",
        visualLabel: "모델 스택",
        visualTitle: "GPT-5.2, Claude Sonnet, Gemini Pro 이사회 검토 스택",
        bullets: [
          "실행 전 예상 크레딧 확인",
          "품질, 지연시간, 개인정보 정책을 함께 고려",
          "반복 업무용 스택 저장"
        ]
      },
      {
        id: "build",
        label: "위임",
        title: "한 번의 요청으로 여러 프로바이더에 위임합니다",
        body:
          "LogK는 선택된 모델들로 요청을 fan-out하고, 비용을 중앙에서 추적하며, 프로바이더와 후속 단계가 달라도 전체 실행 흐름을 일관되게 유지합니다.",
        stack: [
          "OpenAI: 도구 사용이 필요한 1차 답변",
          "Anthropic: 추론과 비판적 검토",
          "Google: 검증 및 멀티모달 후속 확인"
        ]
      },
      {
        id: "review",
        label: "검증",
        title: "최종 답변을 집계하고 검증합니다",
        body:
          "한 모델의 답을 그대로 믿게 하지 않고, 모델 간 차이와 신뢰도 격차, 검증 패스를 보여주어 더 믿을 수 있는 결론에 도달하게 합니다.",
        reviewLines: [
          "프로바이더 간 불일치를 집계 전에 표시",
          "신뢰도가 낮을 때 verifier 프롬프트 실행",
          "모델 추적 정보와 함께 최종 집계 답변 생성"
        ]
      }
    ]
  },
  technology: {
    eyebrow: "기술",
    title: "모델 선택, 비용 통제, 개인정보 보호를 함께 고려한 위임 계층.",
    description:
      "이 시스템은 단순한 모델 스위처가 아닙니다. 사용자가 더 좋은 모델을 선택하고, 크레딧 비용을 관리하며, 민감한 문맥을 안전하지 않은 경로로 보내지 않도록 돕는 라우팅 및 의사결정 레이어입니다.",
    graphicEyebrow: "Routing graph",
    graphicTitle: "작업 인식형 모델 오케스트레이션",
    graphicBody:
      "질문이 프로바이더로 나가기 전에, 후보 모델 스택, 개인정보 정책, 예상 비용, 검증 단계까지 먼저 계산합니다.",
    cards: [
      {
        index: "A",
        title: "멀티모델 추천과 라우팅",
        body:
          "현재 프롬프트에 맞는 모델 혹은 모델 스택을 추천하고, 가격, 품질, 가용성, 워크플로 프리셋에 따라 요청을 라우팅합니다."
      },
      {
        index: "B",
        title: "개인정보 차단과 비용 거버넌스",
        body:
          "위임 전에 가림 처리나 차단 규칙을 적용하고, 크레딧 기반 과금을 실행 단위, 팀 단위, 계정 단위로 계속 보이게 유지합니다."
      }
    ],
    stats: [
      { value: 7, label: "데모 시나리오에서 위임 전 평가되는 모델 및 프로바이더 경로 수" },
      { value: 3, label: "핵심 사용자 행동: 선택, 위임, 검증" },
      { value: 100, label: "요청이 LogK를 떠나기 전 점검되는 민감 필드 비율" }
    ]
  },
  company: {
    eyebrow: "회사 소개",
    title: "AI 모델 생태계를 위한 위임 레이어를 만듭니다.",
    description:
      "모델은 계속 늘어나지만 사용자의 실제 워크플로는 더 파편화되고 있습니다. LogK는 많은 AI 서비스를 더 경제적이고, 일관되고, 믿을 수 있게 사용하는 방식을 만들고자 합니다.",
    cards: [
      {
        index: "Mission",
        title: "모델 선택을 부담이 아닌 제품 기능으로 만듭니다.",
        body: "사용자는 최고의 답을 얻기 위해 여러 탭을 열고 수동 복사-붙여넣기를 반복할 필요가 없어야 합니다."
      },
      {
        index: "Approach",
        title: "모델 위에 있지만 사용자 가까이에 있습니다.",
        body:
          "시장은 이미 개발자 게이트웨이와 관측성 도구를 가지고 있습니다. LogK는 사용자-facing 레이어, 즉 모델 선택, 위임 UX, 답변 비교, 신뢰에 집중합니다."
      },
      {
        index: "Operating principles",
        wide: true,
        principles: [
          { title: "보이는 경제성", body: "비용은 요청 이후가 아니라 실행 전에 이해 가능해야 합니다." },
          { title: "기본은 보호", body: "민감 정보는 차단되거나 가려지거나 의도적으로만 라우팅되어야 합니다." },
          { title: "비교를 통한 신뢰", body: "더 좋은 답은 단일 모델에 대한 맹신이 아니라 구조화된 불일치와 검증에서 나옵니다." }
        ]
      }
    ]
  },
  contact: {
    eyebrow: "문의",
    title: "LogK를 당신의 AI 워크플로에 연결하세요.",
    body:
      "LogK는 여러 모델 사이로 질문을 위임하고, 비용을 먼저 확인하고, 개인정보를 통제하며, 더 신뢰할 수 있는 결과를 얻고 싶은 팀과 고급 사용자들을 위해 설계되었습니다.",
    primaryCta: "hello@logk.ai",
    secondaryCta: "제품 상세 보기"
  },
  footer: {
    copyright: "GitHub Pages용 Astro 데모로 제작되었습니다."
  },
  productPage: {
    eyebrow: "제품",
    title: "AI 모델들 사이에서 선택하고 위임하고 검증하는 대시보드.",
    description:
      "LogK는 멀티모델 AI의 실제 사용자 흐름을 중심으로 구성됩니다. 스택을 고르고, 비용을 확인하고, 여러 프로바이더에 위임하고, 마지막으로 결과를 비교하거나 검증합니다.",
    stages: [
      {
        label: "선택",
        title: "하나 혹은 여러 모델을 고릅니다",
        body: "빠른 응답이 필요하면 한 모델을, 비교나 집계가 필요하면 여러 모델 스택을 선택합니다."
      },
      {
        label: "예측",
        title: "실행 전 예상 크레딧을 확인합니다",
        body: "질문 하나에 얼마나 넓게 위임할지 사용자가 가격 기준으로 미리 판단할 수 있게 합니다."
      },
      {
        label: "위임",
        title: "여러 프로바이더에 분산 실행합니다",
        body: "LogK는 하나의 시스템 안에서 프로바이더 선택, 비용 추적, 워크플로 구조화를 함께 처리합니다."
      },
      {
        label: "검증",
        title: "필요하면 후속 확인을 붙입니다",
        body: "모델 간 비교, verifier 패스, 최종 집계를 통해 첫 응답에서 멈추지 않는 더 믿을 수 있는 결과를 만듭니다."
      }
    ],
    surfaces: [
      {
        index: "Surface 01",
        title: "지능적인 선택을 위한 모델 보드",
        body:
          "LogK는 모델 선택을 카드, 프리셋, 추천, 비용 가시성으로 구성된 분명한 제품 표면으로 바꿉니다.",
        wide: true
      },
      {
        index: "Surface 02",
        title: "비용을 고려한 위임",
        body:
          "크레딧 예측과 중앙 과금 덕분에 여러 모델로 fan-out하더라도 비용을 잃어버리지 않습니다."
      },
      {
        index: "Surface 03",
        title: "답변 집계와 불일치 처리",
        body:
          "LogK는 여러 출력 결과를 비교하고, 불일치를 표시하고, 직접 비교 혹은 집계형 종합 중 무엇이 적절한지 선택하게 합니다."
      },
      {
        index: "Surface 04",
        title: "개인정보와 정책 제어",
        body:
          "민감한 입력은 제품을 떠나기 전에 정책에 따라 차단되거나 가려지거나 의도된 경로로만 전송됩니다."
      }
    ],
    flowEyebrow: "흐름",
    flowTitle: "사용자가 몇 초 안에 이해하는 제품 스토리.",
    flowDescription:
      "좋은 스타트업 사이트는 제품 흐름이 즉시 읽혀야 합니다. LogK는 모델 선택, 비용 확인, 위임, 검증, 결정의 루프를 빠르게 보여줘야 합니다.",
    steps: [
      { number: "01", title: "질문을 한 번 작성합니다", body: "최적의 답이 필요한 질문, 작업, 혹은 파일 세트로 시작합니다." },
      { number: "02", title: "모델 스택을 선택합니다", body: "직접 하나 혹은 여러 모델을 고르거나, 현재 질문에 대한 LogK 추천을 받아들입니다." },
      { number: "03", title: "제어와 함께 위임합니다", body: "예상 크레딧을 보고, 개인정보 차단 규칙을 적용한 뒤, 하나의 시스템에서 위임합니다." },
      { number: "04", title: "결과를 검토하고 검증합니다", body: "출력을 비교하고, 필요시 verifier를 실행하고, 마지막에는 실제로 믿을 수 있는 답으로 정리합니다." }
    ],
    nextEyebrow: "다음 단계",
    nextTitle: "홈페이지 히어로에서 연결되는 제품 목적지로 사용하세요.",
    nextBody:
      "실제 회사 사이트에서는 이 페이지를 가격, 개인정보 보호 보장, 모델 커버리지, 엔터프라이즈 워크플로 설명으로 확장할 수 있습니다.",
    primaryCta: "제품 데모 요청",
    secondaryCta: "홈으로 돌아가기"
  }
};
