import { createFileRoute, Link, useNavigate, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";
import { lessonCategories } from "@/data/lessons";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/lessons/$slug")({
  component: LessonDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <Link to="/lessons" className="text-primary underline">Back to lessons</Link>
    </div>
  ),
});

function LessonDetail() {
  const { slug } = Route.useParams();
  const lesson = lessonCategories.find((c) => c.slug === slug);
  const { complete, isCompleted } = useProgress();
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  if (!lesson) throw notFound();

  const score = lesson.quiz.reduce(
    (acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0),
    0,
  );
  const passed = submitted && score === lesson.quiz.length;

  function handleSubmit() {
    setSubmitted(true);
    if (lesson && answers.length === lesson.quiz.length && answers.every((a, i) => a === lesson.quiz[i].answer)) {
      complete(lesson.slug);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-hero pattern-cross">
      <main className="mx-auto max-w-3xl px-6 py-10">
        <Link to="/lessons" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> All lessons
        </Link>

        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-3xl shadow-card">
            {lesson.icon}
          </div>
          <div>
            <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground">
              Level {lesson.level}
            </span>
            <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">{lesson.title}</h1>
          </div>
        </div>

        {!showQuiz && (
          <article className="space-y-6 rounded-2xl bg-card p-6 shadow-card">
            <p className="text-base text-muted-foreground">{lesson.summary}</p>
            {lesson.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="mb-2 text-lg font-bold text-foreground">{s.heading}</h2>
                <ul className="space-y-1.5 text-sm text-foreground/90">
                  {s.body.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <button
              onClick={() => setShowQuiz(true)}
              className="w-full rounded-xl bg-gradient-primary px-6 py-3 font-bold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
            >
              {isCompleted(lesson.slug) ? "Retake assignment" : "Start assignment"}
            </button>
          </article>
        )}

        {showQuiz && (
          <div className="space-y-4 rounded-2xl bg-card p-6 shadow-card">
            <h2 className="text-xl font-bold text-foreground">Assignment</h2>
            <p className="text-sm text-muted-foreground">Answer all questions correctly to unlock the next level.</p>

            {lesson.quiz.map((q, qi) => (
              <div key={qi} className="rounded-xl border border-border p-4">
                <p className="mb-3 font-semibold text-foreground">{qi + 1}. {q.question}</p>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => {
                    const selected = answers[qi] === oi;
                    const isCorrect = submitted && oi === q.answer;
                    const isWrong = submitted && selected && oi !== q.answer;
                    return (
                      <button
                        key={oi}
                        disabled={submitted}
                        onClick={() => {
                          const next = [...answers];
                          next[qi] = oi;
                          setAnswers(next);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg border px-4 py-2 text-left text-sm transition-colors ${
                          isCorrect
                            ? "border-success bg-success/10 text-foreground"
                            : isWrong
                              ? "border-destructive bg-destructive/10 text-foreground"
                              : selected
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                        }`}
                      >
                        {opt}
                        {isCorrect && <CheckCircle2 className="h-4 w-4 text-success" />}
                        {isWrong && <XCircle className="h-4 w-4 text-destructive" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={answers.length !== lesson.quiz.length || answers.some((a) => a === undefined)}
                className="w-full rounded-xl bg-gradient-primary px-6 py-3 font-bold text-primary-foreground shadow-card disabled:opacity-50"
              >
                Submit answers
              </button>
            ) : (
              <div className="space-y-3">
                <div className={`rounded-xl p-4 text-center font-bold ${passed ? "bg-success/15 text-success" : "bg-destructive/10 text-destructive"}`}>
                  Score: {score} / {lesson.quiz.length} {passed ? "— Level unlocked!" : "— try again to unlock the next level."}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => { setSubmitted(false); setAnswers([]); }}
                    className="flex-1 rounded-xl border border-border bg-card px-4 py-2 font-semibold text-foreground"
                  >
                    Retry
                  </button>
                  <button
                    onClick={() => navigate({ to: "/lessons" })}
                    className="flex-1 rounded-xl bg-gradient-primary px-4 py-2 font-semibold text-primary-foreground"
                  >
                    Back to lessons
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
