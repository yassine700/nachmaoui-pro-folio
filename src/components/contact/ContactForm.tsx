import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { PROJECT_TYPES } from "@/data/site";
import { submitContactForm } from "@/lib/contact-fn";

type Errors = Partial<Record<"name" | "email" | "projectType" | "message", string>>;

export function ContactForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form field state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState<string>(PROJECT_TYPES[0]);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot

  function clearError(field: keyof Errors) {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function resetForm() {
    setName("");
    setEmail("");
    setCompany("");
    setProjectType(PROJECT_TYPES[0]);
    setMessage("");
    setWebsite("");
    setErrors({});
    setServerError(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    // Client-side validation
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
    if (!projectType) {
      nextErrors.projectType = "Please select a project type.";
    }
    if (trimmedMessage.length < 10) {
      nextErrors.message = "Please add a few more details about your project (at least 10 characters).";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await submitContactForm({
        data: {
          name: trimmedName,
          email: trimmedEmail,
          company: company.trim() || undefined,
          projectType,
          message: trimmedMessage,
          website: website.trim() || undefined,
        },
      });

      if (response.success) {
        // Confirmed successful delivery by server / Resend -> redirect to dedicated Thank You page
        await navigate({ to: "/thank-you" });
      } else {
        setServerError(response.error || "Failed to send message. Please try again.");
        if (response.fieldErrors) {
          setErrors((prev) => ({ ...prev, ...response.fieldErrors }));
        }
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setServerError(
        "A network error occurred while submitting the form. Please email yassine@nachmaoui.com directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-hairline bg-card/80 p-6 shadow-xs sm:p-8 md:p-10"
    >
      {serverError && (
        <div
          role="alert"
          className="mb-8 flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <p className="leading-relaxed">{serverError}</p>
        </div>
      )}

      {/* Honeypot field for bot protection — hidden from visual users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name field */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium uppercase tracking-[0.14em] text-foreground"
          >
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
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
            aria-describedby={errors.name ? "name-error" : undefined}
            disabled={isSubmitting}
            placeholder="Your name"
            className={`mt-2.5 w-full rounded-lg border bg-surface/50 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-all hover:border-foreground/40 focus:border-foreground focus:bg-background focus:outline-none focus:ring-1 focus:ring-foreground disabled:opacity-50 ${
              errors.name
                ? "border-destructive focus:border-destructive focus:ring-destructive"
                : "border-hairline"
            }`}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email field */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium uppercase tracking-[0.14em] text-foreground"
          >
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
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
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={isSubmitting}
            placeholder="you@company.com"
            className={`mt-2.5 w-full rounded-lg border bg-surface/50 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-all hover:border-foreground/40 focus:border-foreground focus:bg-background focus:outline-none focus:ring-1 focus:ring-foreground disabled:opacity-50 ${
              errors.email
                ? "border-destructive focus:border-destructive focus:ring-destructive"
                : "border-hairline"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company field */}
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-medium uppercase tracking-[0.14em] text-foreground"
          >
            Company <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            disabled={isSubmitting}
            placeholder="Business or trade name"
            className="mt-2.5 w-full rounded-lg border border-hairline bg-surface/50 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-all hover:border-foreground/40 focus:border-foreground focus:bg-background focus:outline-none focus:ring-1 focus:ring-foreground disabled:opacity-50"
          />
        </div>

        {/* Project type field */}
        <div>
          <label
            htmlFor="projectType"
            className="block text-xs font-medium uppercase tracking-[0.14em] text-foreground"
          >
            Project type <span className="text-primary">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={projectType}
            onChange={(e) => {
              setProjectType(e.target.value);
              if (errors.projectType) clearError("projectType");
            }}
            disabled={isSubmitting}
            className="mt-2.5 w-full rounded-lg border border-hairline bg-surface/50 px-4 py-3 text-base text-foreground transition-all hover:border-foreground/40 focus:border-foreground focus:bg-background focus:outline-none focus:ring-1 focus:ring-foreground disabled:opacity-50"
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-background text-foreground py-2">
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p id="projectType-error" className="mt-2 text-xs text-destructive">
              {errors.projectType}
            </p>
          )}
        </div>
      </div>

      {/* Message field */}
      <div className="mt-6">
        <label
          htmlFor="message"
          className="block text-xs font-medium uppercase tracking-[0.14em] text-foreground"
        >
          Message / Project Details <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) clearError("message");
          }}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={isSubmitting}
          placeholder="Tell me about your business, the pages you need, and any specific goals or timelines..."
          className={`mt-2.5 w-full rounded-lg border bg-surface/50 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-all hover:border-foreground/40 focus:border-foreground focus:bg-background focus:outline-none focus:ring-1 focus:ring-foreground disabled:opacity-50 ${
            errors.message
              ? "border-destructive focus:border-destructive focus:ring-destructive"
              : "border-hairline"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <div className="mt-8 flex items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-foreground px-8 py-3.5 text-sm font-medium tracking-wide text-background transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              <span>Sending message...</span>
            </>
          ) : (
            <>
              <span>Send message</span>
              <Send className="size-4" aria-hidden="true" />
            </>
          )}
        </button>

        <span className="text-xs text-muted-foreground">
          Typically replied within 24h
        </span>
      </div>
    </form>
  );
}

