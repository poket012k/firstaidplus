import { useEffect, useState, useCallback } from "react";

const KEY = "first-aid-progress-v1";

function read(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setCompleted(read());
  }, []);

  const complete = useCallback((slug: string) => {
    setCompleted((prev) => {
      if (prev.includes(slug)) return prev;
      const next = [...prev, slug];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(KEY);
    setCompleted([]);
  }, []);

  return { completed, complete, reset, isCompleted: (s: string) => completed.includes(s) };
}
