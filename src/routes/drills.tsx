import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Dumbbell, Clock } from "lucide-react";

export const Route = createFileRoute("/drills")({
  head: () => ({
    meta: [
      { title: "First Aid Drills — Practice Scenarios" },
      { name: "description", content: "Run through realistic first aid practice scenarios." },
    ],
  }),
  component: DrillsPage,
});

const drills = [
  { title: "Adult CPR drill", time: "5 min", desc: "Practice 30:2 compressions and rescue breaths on a manikin." },
  { title: "Recovery position", time: "3 min", desc: "Place an unconscious breathing casualty into the recovery position." },
  { title: "Bandaging a bleeding arm", time: "4 min", desc: "Apply direct pressure and a pressure bandage step-by-step." },
  { title: "Choking adult", time: "3 min", desc: "Five back blows, five abdominal thrusts, repeat." },
  { title: "Burn cooling", time: "20 min", desc: "Cool with running water then cover with cling film." },
  { title: "Suspected fracture", time: "6 min", desc: "Steady, support and immobilise a forearm fracture." },
];

function DrillsPage() {
  return (
    <div className="min-h-screen bg-gradient-hero pattern-cross">
      <main className="mx-auto max-w-3xl px-6 py-10">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Home
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent shadow-card">
            <Dumbbell className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-extrabold text-foreground">First Aid Drills</h1>
        </div>

        <ul className="space-y-3">
          {drills.map((d) => (
            <li key={d.title} className="rounded-2xl bg-card p-5 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-foreground">{d.title}</h2>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent px-2 py-1 text-xs font-bold text-accent-foreground">
                  <Clock className="h-3 w-3" /> {d.time}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-muted-foreground">More interactive drills coming soon.</p>
      </main>
    </div>
  );
}