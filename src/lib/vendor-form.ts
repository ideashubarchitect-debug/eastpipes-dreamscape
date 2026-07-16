import { z } from "zod";

/**
 * Shared, client-safe definitions for the vendor approval form
 * (Vendor Approval for Spares, Consumables and Lab Items — EPC/PROC/F/09, Rev. 2).
 * Imported by both the form UI (src/routes/vendors.tsx) and the server-side
 * submission handler (src/lib/vendor-submit.ts).
 */

/**
 * Interim destination for submissions. The client asked to use
 * info@eastpipes.com for now and will provide the dedicated procurement address
 * later — update this (or set VENDOR_TO_EMAIL in the environment) when received.
 */
export const VENDOR_SUBMISSION_EMAIL = "info@eastpipes.com";

/** Field labels, in the order they appear on the form / in the email. */
export const VENDOR_FIELD_LABELS = {
  supplierName: "Name of Supplier",
  address: "Address of Supplier",
  country: "Country",
  contactPerson: "Contact person's name & designation",
  email: "Contact Email Id",
  phone: "Contact Mobile / Tel No.",
  scope: "Type of Company / Scope of work / Qualified products & services",
  paymentTerms: "Payment Terms",
  crNumber: "CR No / Expiry date",
  vatNumber: "VAT Registration No",
  currency: "Order Currency",
  relatedParty: "Related Party transaction",
  relatedPartyDetail: "Related party clarification",
  approvalBasis: "Basis of Approval",
} as const;

export type VendorFieldKey = keyof typeof VENDOR_FIELD_LABELS;

export const vendorSchema = z.object({
  supplierName: z.string().trim().min(1, "Supplier name is required"),
  address: z.string().trim().min(1, "Address is required"),
  country: z.string().trim().min(1, "Country is required"),
  contactPerson: z.string().trim().min(1, "Contact person is required"),
  email: z.string().trim().email("A valid email is required"),
  phone: z.string().trim().min(1, "Contact number is required"),
  scope: z.string().trim().min(1, "Scope of supply is required"),
  paymentTerms: z.string().trim().optional().default(""),
  crNumber: z.string().trim().optional().default(""),
  vatNumber: z.string().trim().optional().default(""),
  currency: z.string().trim().optional().default("SAR"),
  relatedParty: z.enum(["Yes", "No"]).default("No"),
  relatedPartyDetail: z.string().trim().optional().default(""),
  approvalBasis: z.string().trim().optional().default(""),
});

export type VendorFormData = z.infer<typeof vendorSchema>;

/** Builds the plain-text email body sent to the procurement team. */
export function buildVendorEmailBody(data: VendorFormData): string {
  const lines: string[] = ["EAST PIPES — VENDOR APPROVAL SUBMISSION", ""];
  for (const key of Object.keys(VENDOR_FIELD_LABELS) as VendorFieldKey[]) {
    if (key === "relatedPartyDetail" && data.relatedParty !== "Yes") continue;
    const value = (data[key] ?? "").toString().trim();
    lines.push(`${VENDOR_FIELD_LABELS[key]}: ${value || "-"}`);
  }
  lines.push("", "Format ref: EPC/PROC/F/09 (Rev. 2)");
  return lines.join("\n");
}
