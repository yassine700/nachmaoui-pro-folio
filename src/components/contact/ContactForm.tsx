import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PROJECT_TYPES } from "@/data/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const FIELD =
  "mt-2 w-full rounded-none border-0 border-b border-hairline bg-transparent px-0 py-3 text-base outline-none transition-colors focus-visible:border-foreground";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (message.length < 10) next.message = "Please add a few more details about your project.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // TODO: connect to a real submission endpoint. For now the email fallback below is the live path.
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="border-t border-hairline pt-8"
      >
        <CheckCircle2 className="mx-auto size-8 text-primary" aria-hidden="true" />
        <p className="mt-4 font-display text-2xl">Thank you — your details are ready to send.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          This form is not yet connected to a mail service, so please send your message by email so
          nothing gets lost. It is the fastest way to reach me either way.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Edit the form again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={FIELD}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-sm text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={FIELD}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-sm text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium">
            Company <span className="text-muted-foreground">(optional)</span>
          </label>
          <input id="company" name="company" autoComplete="organization" className={FIELD} />
        </div>

        <div>
          <label htmlFor="projectType" className="text-sm font-medium">
            Project type
          </label>
          <select id="projectType" name="projectType" className={FIELD} defaultValue={PROJECT_TYPES[0]}>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={FIELD}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="editorial-link justify-self-start text-base"
      >
        Send message
      </button>
    </form>
  );
}
