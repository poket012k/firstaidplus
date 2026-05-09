import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, Siren } from "lucide-react";
import { EmergencyAIAssistant } from "@/components/EmergencyAIAssistant";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Guidance — Quick First Aid Steps" },
      { name: "description", content: "Quick first aid steps for life-threatening emergencies." },
    ],
  }),
  component: EmergencyPage,
});

const guides = [
  {
    title: "Unconscious & not breathing",
    steps: ["Call ambulance immediately.", "Open airway: head-tilt chin-lift.", "Start CPR — 30 compressions : 2 breaths.", "Use AED as soon as available."],
  },
  {
    title: "Severe bleeding",
    steps: ["Apply firm direct pressure with a clean cloth.", "Elevate the limb if possible.", "Add more dressings on top — never remove the first.", "Treat for shock and call for help."],
  },
  {
    title: "Choking (adult)",
    steps: ["Encourage them to cough.", "5 back blows between the shoulder blades.", "5 abdominal thrusts.", "Repeat until cleared or they become unconscious — then start CPR."],
  },
  {
    title: "Suspected stroke (FAST)",
    steps: ["Face — is one side drooping?", "Arms — can both be raised?", "Speech — is it slurred?", "Time — call emergency services NOW."],
  },
  {
    title: "Severe burn",
    steps: ["Cool with running water for at least 20 minutes.", "Remove jewellery / loose clothing near burn (not stuck).", "Cover with cling film or a clean non-fluffy cloth.", "Seek urgent medical care."],
  },
];

function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gradient-hero pattern-cross">
      <main className="mx-auto max-w-3xl px-6 py-10">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Home
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-emergency shadow-glow">
            <Siren className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-extrabold text-foreground">Emergency Guidance</h1>
        </div>

        <a
          href="tel:911"
          className="mb-6 flex items-center justify-center gap-3 rounded-2xl bg-gradient-emergency px-6 py-4 text-lg font-extrabold text-primary-foreground shadow-glow"
        >
          <Phone className="h-6 w-6" /> Call Emergency Services
        </a>

        <div className="mb-6">
          <EmergencyAIAssistant />
        </div>

        <div className="space-y-4">
          {guides.map((g) => (
            <section key={g.title} className="rounded-2xl bg-card p-5 shadow-card">
              <h2 className="mb-2 text-lg font-bold text-foreground">{g.title}</h2>
              <ol className="space-y-2 text-sm text-foreground/90">
                {g.steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Educational only. Always call your local emergency number in a real emergency.
        </p>
      </main>
    </div>
  );
}