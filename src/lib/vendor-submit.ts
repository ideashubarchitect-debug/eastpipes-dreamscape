import { createServerFn } from "@tanstack/react-start";
import {
  vendorSchema,
  buildVendorEmailBody,
  VENDOR_SUBMISSION_EMAIL,
  type VendorFormData,
} from "@/lib/vendor-form";

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "send_failed" };

/**
 * Sends the vendor submission email via Resend (https://resend.com).
 *
 * Configure with environment variables (e.g. Cloudflare secrets):
 *   RESEND_API_KEY    — Resend API key (required to actually send)
 *   VENDOR_FROM_EMAIL — verified sender, e.g. "East Pipes <noreply@eastpipes.com>"
 *   VENDOR_TO_EMAIL   — recipient; defaults to info@eastpipes.com
 *
 * When RESEND_API_KEY is not set the function reports "not_configured" so the
 * form can fall back to opening the visitor's email client (mailto). This keeps
 * the page working before the mail provider is set up.
 */
async function sendVendorEmail(data: VendorFormData): Promise<SubmitResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, reason: "not_configured" };

  const from = process.env.VENDOR_FROM_EMAIL ?? "East Pipes Website <noreply@eastpipes.com>";
  const to = process.env.VENDOR_TO_EMAIL ?? VENDOR_SUBMISSION_EMAIL;
  const subject = `Vendor Approval Request — ${data.supplierName}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject,
        text: buildVendorEmailBody(data),
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return { ok: false, reason: "send_failed" };
    return { ok: true };
  } catch {
    return { ok: false, reason: "send_failed" };
  }
}

/**
 * Server function: validates the vendor form and emails it to procurement.
 * Runs server-side so the API key never reaches the client.
 */
export const submitVendorApplication = createServerFn({ method: "POST" })
  .validator((data: unknown) => vendorSchema.parse(data))
  .handler(async ({ data }): Promise<SubmitResult> => {
    return sendVendorEmail(data);
  });
