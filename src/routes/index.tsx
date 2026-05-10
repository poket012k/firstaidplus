import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Brain, Siren, Heart, Plus, Activity } from "lucide-react";
import logo from "@/faplus";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "First Aid App — Be Ready to Save a Life" },
      { name: "description", content: "Bite-sized first aid lessons, quizzes and emergency guidance — all in one place." },
    ],
  }),
  component: Index,
});

const tiles = [
  { to: "/lessons", title: "First Aid Lessons", desc: "13 levels — from kits to CPR.", icon: BookOpen, gradient: "bg-gradient-primary" },
  { to: "/quizzes", title: "First Aid Quizzes", desc: "Test your knowledge.", icon: Brain, gradient: "bg-gradient-secondary" },
  { to: "/emergency", title: "Emergency Guidance", desc: "Quick steps when seconds matter.", icon: Siren, gradient: "bg-gradient-emergency" },
] as const;

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-hero pattern-cross">
      {/* Floating decorative crosses & hearts */}
      <div className="pointer-events-none absolute inset-0">
        <Plus className="absolute top-12 left-8 h-10 w-10 text-primary/30 animate-float" />
        <Heart className="absolute top-32 right-12 h-8 w-8 text-primary/40 animate-pulse-soft" />
        <Plus className="absolute bottom-24 left-1/4 h-14 w-14 text-secondary/30 animate-float" style={{ animationDelay: "1s" }} />
        <Activity className="absolute bottom-12 right-1/3 h-12 w-12 text-accent-foreground/20 animate-pulse-soft" />
        <Plus className="absolute top-1/2 right-8 h-6 w-6 text-primary/30 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center px-6 py-12">
        <header className="mb-10 text-center">
          <img
  src={logo}
  alt="FirstAid Plus Logo"
  className="mx-auto mb-4 h-28 w-auto object-contain"
/>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            First Aid App
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Learn it. Practice it. Be ready when it counts.
          </p>
        </header>

        <section className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
          {tiles.map((t) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                className="group relative overflow-hidden rounded-3xl bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 ${t.gradient}`} />
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${t.gradient} shadow-card`}>
                  <Icon className="h-7 w-7 text-primary-foreground" strokeWidth={2.4} />
                </div>
                <h2 className="text-xl font-bold text-foreground">{t.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-primary group-hover:underline">
                  Open →
                </span>
              </Link>
            );
          })}
        </section>

        <footer className="mt-12 text-center text-xs text-muted-foreground">
          Educational content only. In a real emergency, always call your local emergency number.
        </footer>
      </main>
    </div>
  );
}
