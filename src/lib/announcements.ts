import { createServerFn } from "@tanstack/react-start";
import { getTadawulAnnouncements } from "@/lib/tadawul";
import type { LiveAnnouncement } from "@/lib/news";

/** Builds a stable, URL-safe slug from an announcement's date and title. */
function makeSlug(iso: string, title: string): string {
  const base = `${iso}-${title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return base || `announcement-${iso}`;
}

/**
 * Server-only fetch of live company announcements from the Tadawul feed
 * (same getDetailQuoteForCompany call used for the stock quote).
 *
 * Returns an empty array when the feed carries no populated announcements —
 * which is currently the case, as the feed returns nil announcement slots. The
 * News page falls back to managed articles in that case.
 */
export const getAnnouncements = createServerFn({ method: "GET" }).handler(
  async (): Promise<LiveAnnouncement[]> => {
    try {
      const raw = await getTadawulAnnouncements();
      return raw
        .map((a) => {
          const title = a.title || a.titleAr || a.body.replace(/\s+/g, " ").trim().slice(0, 80);
          const body = a.body || a.bodyAr || a.title;
          const iso = a.date;
          return {
            slug: makeSlug(iso, title),
            iso,
            time: a.time,
            title,
            body,
          } satisfies LiveAnnouncement;
        })
        .filter((a) => a.title || a.body)
        .sort((a, b) => (a.iso < b.iso ? 1 : a.iso > b.iso ? -1 : 0));
    } catch {
      return [];
    }
  },
);
