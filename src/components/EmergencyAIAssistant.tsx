import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, User, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

const SUGGESTIONS = [
  "Someone collapsed and isn't breathing",
  "Deep cut with heavy bleeding",
  "Suspected broken arm after a fall",
  "Severe burn from boiling water",
  "Choking adult — back blows not working",
];

export function EmergencyAIAssistant() {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (!isLoading) inputRef.current?.focus();
  }, [isLoading]);

  const submit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <section className="rounded-2xl bg-card shadow-card overflow-hidden border border-border">
      <div className="flex items-center gap-3 bg-gradient-primary p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/20">
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary-foreground">AI First Aid Assistant</h2>
          <p className="text-xs text-primary-foreground/80">
            Describe the situation — get step-by-step guidance instantly.
          </p>
        </div>
      </div>

      <div ref={scrollRef} className="max-h-[420px] min-h-[260px] overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Try a common emergency or type your own:
            </p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => submit(s)}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) => {
          const text = m.parts
            .map((p) => (p.type === "text" ? p.text : ""))
            .join("");
          const isUser = m.role === "user";
          return (
            <div key={m.id} className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  isUser ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                }`}
              >
                {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>
              {isUser ? (
                <div className="rounded-2xl bg-primary px-4 py-2 text-sm text-primary-foreground max-w-[85%]">
                  {text}
                </div>
              ) : (
                <div className="prose prose-sm max-w-[85%] text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-li:my-0.5">
                  <ReactMarkdown>{text || "…"}</ReactMarkdown>
                </div>
              )}
            </div>
          );
        })}

        {status === "submitted" && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Thinking...
          </div>
        )}

        {error && (
          <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
            {error.message || "Something went wrong. Please try again."}
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="border-t border-border p-3 flex gap-2 items-end bg-background"
      >
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit(input);
            }
          }}
          rows={2}
          placeholder="Describe the injury or situation..."
          disabled={isLoading}
          className="flex-1 resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-emergency text-primary-foreground shadow-glow disabled:opacity-50"
          aria-label="Send"
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </button>
      </form>
    </section>
  );
}