import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { Section } from "../layout/Section";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/data/site";
import { submitContactForm } from "@/lib/contact-fn";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * Homepage contact section: prominent phone/email details beside a compact
 * Name / Email / Message form that posts through the same Resend-backed
 * server function as the full contact page.
 */
export function HomeContact() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot

  function clearError(field: keyof Errors) {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const nextErrors: Errors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      nextErrors.name = "Please enter your name (at least 2 characters).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (trimmedMessage.length < 10) {
      nextErrors.message = "Please add a few more details (at least 10 characters).";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await submitContactForm({
        data: {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          website: website.trim() || undefined,
        },
      });

      if (response.success) {
        await navigate({ to: "/thank-you" });
      } else {
        setServerError(response.error || "Failed to send message. Please try again.");
        if (response.fieldErrors) {
          setErrors((prev) => ({ ...prev, ...response.fieldErrors }));
        }
      }
    } catch {
      setServerError(
        "A network error occurred while submitting the form. Please email yassine@nachmaoui.com directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass = (hasError: boolean) =>
    `mt-2.5 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-foreground placeholder:text-zinc-400 transition-all hover:border-white/20 focus:border-white/40 focus:bg-white/[0.02] focus:outline-none focus:ring-1 focus:ring-white/40 disabled:opacity-50 ${
      hasError ? "border-destructive focus:border-destructive focus:ring-destructive" : ""
    }`;

  return (
    <Section id="contact" label="Contact">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-6 text-[2rem] leading-[1.06] md:text-5xl">Get in touch</h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Tell me about your project — I typically reply within 24 hours.
          </p>

          <div className="mt-12">
            <p className="eyebrow">Phone</p>
            <a
              href={CONTACT_PHONE_HREF}
              className="editorial-link mt-3 inline-block font-display text-3xl leading-tight md:text-4xl"
            >
              {CONTACT_PHONE}
            </a>
          </div>

          <div className="mt-10">
            <p className="eyebrow">Email</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="editorial-link mt-3 inline-block text-lg"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="self-start rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8"
        >
          {serverError && (
            <div
              role="alert"
              className="mb-6 flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive"
            >
              <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <p className="leading-relaxed">{serverError}</p>
            </div>
          )}

          {/* Honeypot field for bot protection — hidden from visual users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="home-website">Website</label>
            <input
              id="home-website"
              name="website"
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="home-name"
                className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
              >
                Name <span className="text-primary">*</span>
              </label>
              <input
                id="home-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) clearError("name");
                }}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "home-name-error" : undefined}
                disabled={isSubmitting}
                placeholder="Your name"
                className={inputClass(Boolean(errors.name))}
              />
              {errors.name && (
                <p id="home-name-error" className="mt-2 text-xs text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="home-email"
                className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
              >
                Email <span className="text-primary">*</span>
              </label>
              <input
                id="home-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) clearError("email");
                }}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "home-email-error" : undefined}
                disabled={isSubmitting}
                placeholder="you@company.com"
                className={inputClass(Boolean(errors.email))}
              />
              {errors.email && (
                <p id="home-email-error" className="mt-2 text-xs text-destructive">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="home-message"
              className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
            >
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              id="home-message"
              name="message"
              rows={5}
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) clearError("message");
              }}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "home-message-error" : undefined}
              disabled={isSubmitting}
              placeholder="Tell me about your business and what you need..."
              className={inputClass(Boolean(errors.message))}
            />
            {errors.message && (
              <p id="home-message-error" className="mt-2 text-xs text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <div className="mt-8">
            <button
              type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-zinc-100 px-8 py-3.5 text-sm font-medium tracking-wide text-zinc-950 transition-all hover:bg-zinc-200 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send message</span>
                  <Send className="size-4" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
