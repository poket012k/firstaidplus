import "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway";

const SYSTEM_PROMPT = `You are an expert first aid instructor assisting a first aider during an emergency. Provide accurate, clear, evidence-based guidance following recognized standards (Red Cross, AHA, ERC).

Rules:
- ALWAYS first remind the user to call emergency services (e.g. 911/999/112) for any life-threatening situation.
- Ask brief clarifying questions ONLY if essential (consciousness, breathing, bleeding severity, mechanism of injury).
- Give numbered, step-by-step instructions in short, calm, action-oriented language.
- Cover: scene safety (DR), check response, airway/breathing, severe bleeding, shock, then specific injury care.
- Include CPR ratio 30:2, compression depth 5-6 cm, rate 100-120/min when relevant.
- For burns: cool with running water 20 minutes, no ice/butter.
- For fractures: immobilize, do not realign.
- For suspected spinal injury: do NOT move.
- State clearly what NOT to do.
- End each response with: "⚠️ This is guidance only — get professional medical help immediately."
- Use markdown formatting with headings, bold, and numbered lists.
- Be calm, reassuring, and concise.`;

type ChatRequestBody = { messages?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        try {
          const gateway = createLovableAiGatewayProvider(key);
          const model = gateway("google/gemini-3-flash-preview");
          const result = streamText({
            model,
            system: SYSTEM_PROMPT,
            messages: await convertToModelMessages(messages as UIMessage[]),
          });
          return result.toUIMessageStreamResponse({
            originalMessages: messages as UIMessage[],
          });
        } catch (err) {
          const message = err instanceof Error ? err.message : "Unknown error";
          return new Response(message, { status: 500 });
        }
      },
    },
  },
});