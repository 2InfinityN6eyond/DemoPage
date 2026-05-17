import type { Chat } from "./types";

export const CHATS: Chat[] = [
  {
    id: "arch",
    title: "Backend Architecture",
    preview: "Which architecture fits best for real-time chat with 10k users?",
    time: "2 min ago",
    runPlan: ["GPT-4o", "Claude Sonnet", "Synthesis"],
    turns: [
      {
        id: "q1",
        role: "user",
        text: "Which backend architecture fits best for a real-time chat app with 10,000 concurrent users?",
      },
      {
        id: "a1",
        role: "model-answers",
        models: [
          {
            name: "GPT-4o",
            provider: "OpenAI",
            cost: "$0.003",
            body: "For 10k concurrent users, use WebSockets with horizontal scaling and a pub/sub broker (Redis or Kafka) to fan messages across nodes. Each server holds open connections; the broker handles cross-node delivery.",
          },
          {
            name: "Claude Sonnet",
            provider: "Anthropic",
            cost: "$0.004",
            body: "At 10k concurrent, the key constraint is connection state. A managed WebSocket layer keeps your API nodes stateless. Stateless nodes scale linearly — add capacity without re-balancing sessions.",
          },
        ],
        synthesis:
          "Both models agree: WebSocket + pub/sub is the right foundation. GPT-4o focuses on infrastructure topology; Claude emphasizes managed connection abstraction for stateless scaling. Recommendation: managed WebSocket layer + Redis pub/sub + stateless API nodes.",
      },
    ],
  },
  {
    id: "code",
    title: "Code Review",
    preview: "Review this Python paginate() function for edge cases",
    time: "18 min ago",
    runPlan: ["Claude Opus", "Review"],
    turns: [
      {
        id: "q1",
        role: "user",
        text: "Review this Python function for edge cases:\n\ndef paginate(items, page, size=20):\n    return items[page * size : (page + 1) * size]",
      },
      {
        id: "a1",
        role: "model-answers",
        models: [
          {
            name: "Claude Opus",
            provider: "Anthropic",
            cost: "$0.015",
            body: "Three edge cases: (1) negative page or size — add input guards. (2) page beyond bounds — silently returns empty list; consider raising IndexError or returning None explicitly. (3) size=0 causes a zero-length slice, which is harmless but probably unintended. Recommend validating inputs and documenting the empty-list behavior.",
          },
        ],
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy Gateway",
    preview: "Process HR document with PII masking before routing",
    time: "1 hr ago",
    runPlan: ["Privacy Gate", "GPT-4o", "Verifier"],
    turns: [
      {
        id: "q1",
        role: "user",
        text: "Summarize the performance review for John Smith (employee ID 10482, SSN ending 4821) focusing on leadership.",
      },
      {
        id: "a1",
        role: "model-answers",
        models: [
          {
            name: "GPT-4o",
            provider: "OpenAI",
            cost: "$0.002",
            body: "[EMPLOYEE_NAME] (ID [EMP_ID], SSN [REDACTED]) shows strong cross-functional leadership. Highlights: led 3 product launches, mentored 5 junior engineers, drove a 22% improvement in team velocity over Q3.",
            privacyNote: "PII masked before routing · SSN redacted · Name anonymized",
          },
        ],
      },
    ],
  },
  {
    id: "research",
    title: "Research Synthesis",
    preview: "Compare LoRA, QLoRA, and full fine-tuning for production",
    time: "Yesterday",
    runPlan: ["GPT-4o", "Gemini Pro", "Claude Sonnet", "Synthesis"],
    turns: [
      {
        id: "q1",
        role: "user",
        text: "Compare LoRA, QLoRA, and full fine-tuning for a production customer-support LLM. Consider cost, quality, and iteration speed.",
      },
      {
        id: "a1",
        role: "model-answers",
        models: [
          {
            name: "GPT-4o",
            provider: "OpenAI",
            cost: "$0.005",
            body: "LoRA offers the best cost/quality tradeoff for most teams. Full fine-tuning is 10–40× more expensive and rarely justifies the gap unless you need extreme domain specificity.",
          },
          {
            name: "Gemini Pro",
            provider: "Google",
            cost: "$0.002",
            body: "QLoRA extends LoRA with 4-bit quantization, cutting VRAM by ~60% with minimal quality loss. Ideal when GPU budget is constrained.",
          },
          {
            name: "Claude Sonnet",
            provider: "Anthropic",
            cost: "$0.004",
            body: "For iteration speed, LoRA wins — typical runs finish in 2–6 hours on a single A100. QLoRA enables consumer GPUs but adds quantization complexity.",
          },
        ],
        synthesis:
          "Consensus: LoRA for most teams (best balance of cost, quality, and speed). QLoRA when GPU budget is tight. Full fine-tuning only for extreme specialization needs.",
      },
    ],
  },
];
