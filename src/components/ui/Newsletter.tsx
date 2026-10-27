import { useState, type FormEvent } from "react";
import { Button } from "../ui/Button";

type Status = "idle" | "invalid" | "noted";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(EMAIL.test(email.trim()) ? "noted" : "invalid");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-4">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          aria-invalid={status === "invalid"}
          aria-describedby="newsletter-message"
          className="field sm:flex-1"
        />
        <Button type="submit" variant="ink" className="sm:shrink-0">
          Keep me posted
        </Button>
      </div>

      <p
        id="newsletter-message"
        aria-live="polite"
        className="t-small mt-3 min-h-[2.6em] max-w-[46ch] text-ink/70"
      >
        {status === "invalid" &&
          "That does not read as an email address yet — check for a missing @ or a typo in the domain."}
        {status === "noted" &&
          "Nothing was sent. ROAM is a design study with no mailing list, so this address never left the page."}
        {status === "idle" && "This form validates your address locally. It has nowhere to send it."}
      </p>
    </form>
  );
}
