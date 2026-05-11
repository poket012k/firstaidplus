import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Brain } from "lucide-react";
import { useMemo, useState } from "react";
import { lessonCategories } from "@/data/lessons";

const RECENT_KEY = "first-aid-quiz-recent-v1";
const QUIZ_SIZE = 12;

export const Route = createFileRoute("/quizzes")({
  head: () => ({
    meta: [
      { title: "First Aid Quizzes — Test Your Knowledge" },
      { name: "description", content: "Random first aid quiz drawn from all 13 lesson categories." },
    ],
  }),
  component: QuizzesPage,
});

type Q = {
  question: string;
  options: string[];
  answer: number;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  key: string;
};

function inferDifficulty(q: { question: string; options: string[]; difficulty?: string }): "Easy" | "Medium" | "Hard" {
  if (q.difficulty === "easy") return "Easy";
  if (q.difficulty === "medium") return "Medium";
  if (q.difficulty === "hard") return "Hard";
  // Heuristic: longer questions and longer options = harder
  const len = q.question.length + q.options.reduce((a, o) => a + o.length, 0);
  if (len < 120) return "Easy";
  if (len < 220) return "Medium";
  return "Hard";
}

function buildPool(): Q[] {
  return lessonCategories.flatMap((c) =>
    c.quiz.map((q, i) => ({
      ...q,
      topic: c.title,
      difficulty: inferDifficulty(q),
      key: `${c.slug}#${i}`,
    })),
  );
}

function readRecent(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function writeRecent(keys: string[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(RECENT_KEY, JSON.stringify(keys));
}

function pickQuiz(pool: Q[]): Q[] {
  const recent = new Set(readRecent());
  const fresh = pool.filter((q) => !recent.has(q.key));
  // If fresh pool is too small, reset history
  const usable = fresh.length >= QUIZ_SIZE ? fresh : pool;
  if (usable === pool) writeRecent([]);
  // Try to balance difficulty: ~40% easy, 40% medium, 20% hard
  const easy = sample(usable.filter((q) => q.difficulty === "Easy"), Math.round(QUIZ_SIZE * 0.4));
  const med = sample(usable.filter((q) => q.difficulty === "Medium"), Math.round(QUIZ_SIZE * 0.4));
  const hard = sample(usable.filter((q) => q.difficulty === "Hard"), QUIZ_SIZE - easy.length - med.length);
  let combined = [...easy, ...med, ...hard];
  if (combined.length < QUIZ_SIZE) {
    const remaining = usable.filter((q) => !combined.includes(q));
    combined = [...combined, ...sample(remaining, QUIZ_SIZE - combined.length)];
  }
  combined = sample(combined, combined.length);
  const newRecent = [...readRecent(), ...combined.map((q) => q.key)].slice(-pool.length + QUIZ_SIZE);
  writeRecent(newRecent);
  return combined;
}

function QuizzesPage() {
  const pool = useMemo(buildPool, []);
  const [quiz, setQuiz] = useState<Q[]>(() => pickQuiz(pool));
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const score = quiz.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0);

  function newQuiz() {
    setQuiz(pickQuiz(pool));
    setAnswers([]);
    setSubmitted(false);
  }

  return (
    <div className="min-h-screen bg-gradient-hero pattern-cross">
      <main className="mx-auto max-w-3xl px-6 py-10">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Home
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-secondary shadow-card">
            <Brain className="h-7 w-7 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">First Aid Quizzes</h1>
            <p className="text-sm text-muted-foreground">{QUIZ_SIZE} questions drawn only from your lessons.</p>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl bg-card p-6 shadow-card">
          {quiz.map((q, qi) => (
            <div key={qi} className="rounded-xl border border-border p-4">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{q.topic}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                    q.difficulty === "Easy"
                      ? "bg-success/15 text-success"
                      : q.difficulty === "Medium"
                        ? "bg-accent text-accent-foreground"
                        : "bg-destructive/15 text-destructive"
                  }`}
                >
                  {q.difficulty}
                </span>
              </div>
              <p className="mb-3 font-semibold text-foreground">{qi + 1}. {q.question}</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {q.options.map((opt, oi) => {
                  const selected = answers[qi] === oi;
                  const correct = submitted && oi === q.answer;
                  const wrong = submitted && selected && oi !== q.answer;
                  return (
                    <button
                      key={oi}
                      disabled={submitted}
                      onClick={() => {
                        const next = [...answers];
                        next[qi] = oi;
                        setAnswers(next);
                      }}
                      className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                        correct ? "border-success bg-success/10" :
                        wrong ? "border-destructive bg-destructive/10" :
                        selected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={answers.filter((a) => a !== undefined).length !== quiz.length}
              className="w-full rounded-xl bg-gradient-secondary px-6 py-3 font-bold text-primary-foreground shadow-card disabled:opacity-50"
            >
              Submit
            </button>
          ) : (
            <div className="space-y-3">
              <div className="rounded-xl bg-accent/40 p-4 text-center text-lg font-bold text-foreground">
                You scored {score} / {quiz.length}
              </div>
              <button onClick={newQuiz} className="w-full rounded-xl bg-gradient-primary px-6 py-3 font-bold text-primary-foreground">
                New quiz
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function sample<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(n, copy.length));
}
