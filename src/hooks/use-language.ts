import { useEffect, useState } from "react";

export type Lang = "en" | "ar";

function apply(lang: Lang) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

/**
 * Lightweight language toggle. Persists the choice and sets the document
 * `lang`/`dir` (so Arabic switches the site to RTL). The toggle always shows
 * the *other* language — العربية while in English, English while in Arabic.
 *
 * NOTE: UI content is currently authored in English; this provides the
 * switch + RTL scaffolding. Translated copy can be layered in later.
 */
export function useLanguage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = (localStorage.getItem("ep-lang") as Lang | null) ?? "en";
    setLang(saved);
    apply(saved);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "ar" : "en";
      localStorage.setItem("ep-lang", next);
      apply(next);
      return next;
    });
  };

  // The label shows the language you would switch TO.
  const switchLabel = lang === "en" ? "العربية" : "English";

  return { lang, toggle, switchLabel };
}
