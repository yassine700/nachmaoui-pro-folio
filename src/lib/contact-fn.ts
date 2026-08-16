import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters)."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().optional(),
  projectType: z.string().trim().min(1, "Please select a project type."),
  message: z.string().trim().min(10, "Please add a few more details (at least 10 characters)."),
  // Honeypot field — bots fill this out, real users don't see it
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactResponse =
  | { success: true; error?: never; fieldErrors?: never }
  | { success: false; error: string; fieldErrors?: Record<string, string> };

/**
 * Retrieves environment variables/secrets seamlessly across both
 * Cloudflare Workers (env bindings/secrets) and local Node.js (.env).
 */
function getSecret(key: string): string | undefined {
  // 1. Cloudflare Workers environment bindings (passed via global context in src/server.ts)
  const g = globalThis as unknown as { __cloudflare_env__?: Record<string, unknown> };
  const cfVal = g.__cloudflare_env__?.[key];
  if (typeof cfVal === "string" && cfVal.trim().length > 0) {
    return cfVal.trim();
  }

  // 2. Local Node.js / Vite process.env
  if (typeof process !== "undefined" && process.env) {
    const nodeVal = process.env[key];
    if (typeof nodeVal === "string" && nodeVal.trim().length > 0) {
      return nodeVal.trim();
    }
  }

  return undefined;
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return contactSchema.safeParse(data);
  })
  .handler(async ({ data: parseResult }): Promise<ContactResponse> => {
    if (!parseResult.success) {
      const fieldErrors: Record<string, string> = {};
      parseResult.error.errors.forEach((err) => {
        const fieldName = String(err.path[0]);
        if (fieldName) {
          fieldErrors[fieldName] = err.message;
        }
      });
      return {
        success: false,
        error: "Please correct the highlighted fields.",
        fieldErrors,
      };
    }

    const data = parseResult.data;

    // Honeypot check: If the hidden honeypot field is filled, silently discard spam
    if (data.website && data.website.trim().length > 0) {
      return { success: true };
    }

    const apiKey = getSecret("RESEND_API_KEY");
    const recipientEmail = "yassine@nachmaoui.com";

    // If no email service is configured, inform the user clearly
    if (!apiKey) {
      console.warn(
        "Contact form submission received, but RESEND_API_KEY is not configured.",
        {
          name: data.name,
          email: data.email,
          company: data.company,
          projectType: data.projectType,
        },
      );
      return {
        success: false,
        error:
          "The email delivery service is not yet configured with RESEND_API_KEY. Please set the secret in Cloudflare or .env, or email yassine@nachmaoui.com directly.",
      };
    }

    try {
      const fromEmail =
        getSecret("RESEND_FROM_EMAIL") || "Nachmaoui Portfolio <onboarding@resend.dev>";
      const submissionDate = new Date().toLocaleString("en-US", {
        timeZone: "UTC",
        dateStyle: "full",
        timeStyle: "long",
      });

      const emailText = [
        "New contact form submission from Nachmaoui.com:",
        "",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Company: ${data.company || "Not provided"}`,
        `Project type: ${data.projectType}`,
        `Date: ${submissionDate} (UTC)`,
        "",
        "Message:",
        data.message,
      ].join("\n");

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          reply_to: data.email,
          subject: "New website enquiry — Nachmaoui.com",
          text: emailText,
        }),
      });

      if (!response.ok) {
        const errorData = (await response.json().catch(() => ({}))) as Record<string, unknown>;
        console.error("Resend API error:", errorData);
        return {
          success: false,
          error:
            "Failed to deliver email through Resend. Please reach out to yassine@nachmaoui.com directly.",
        };
      }

      return { success: true };
    } catch (err) {
      console.error("Error sending contact email:", err);
      return {
        success: false,
        error:
          "A network error occurred while sending your message. Please try again or email yassine@nachmaoui.com directly.",
      };
    }
  });


