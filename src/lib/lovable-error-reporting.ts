/**
 * Lovable error-reporting stub.
 * In the Lovable sandbox this is injected by the platform. Outside of Lovable
 * (local dev, Cloudflare Workers) we provide a no-op so the import resolves.
 */
export function reportLovableError(
  _error: unknown,
  _context: Record<string, unknown> = {},
): void {
  // No-op outside the Lovable sandbox
}
