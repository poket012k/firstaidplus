import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Lock } from "lucide-react";
import { lessonCategories } from "@/data/lessons";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/lessons/")({
  head: () => ({
    meta: [
      { title: "First Aid Lessons — Levels 1 to 13" },
      { name: "description", content: "Step through 13 first aid lessons, unlocking each level by passing the assignment." },
    ],
  }),
  component: LessonsPage,
});

function LessonsPage() {
  const { completed } = useProgress();

  function isUnlocked(index: number) {
    return true;
  }

  return (
    <div className="min-h-screen bg-gradient-hero pattern-cross">
      <main className="mx-auto max-w-3xl px-6 py-10">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Home
        </Link>

        <h1 className="mb-2 text-3xl font-extrabold text-foreground sm:text-4xl">First Aid Lessons</h1>
        <p className="mb-8 text-muted-foreground">Complete each lesson's assignment to unlock the next level.</p>

        <ol className="space-y-4">
          {lessonCategories.map((c, i) => {
            const unlocked = isUnlocked(i);
            const done = completed.includes(c.slug);
            const Tag: any = unlocked ? Link : "div";
            return (
              <li key={c.slug}>
                <Tag
                  {...(unlocked ? { to: "/lessons/$slug", params: { slug: c.slug } } : {})}
                  className={`flex items-center gap-4 rounded-2xl bg-card p-5 shadow-card transition-all ${
                    unlocked ? "hover:-translate-y-0.5 hover:shadow-glow" : "opacity-60"
                  }`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-2xl">
                    {c.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground">
                        Level {c.level}
                      </span>
                      {done && <CheckCircle2 className="h-4 w-4 text-success" />}
                      {!unlocked && <Lock className="h-4 w-4 text-muted-foreground" />}
                    </div>
                    <h2 className="mt-1 truncate text-lg font-bold text-foreground">{c.title}</h2>
                    <p className="truncate text-sm text-muted-foreground">{c.summary}</p>
                  </div>
                </Tag>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}
