import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** stagger delay step 1-5 */
  delay?: 1 | 2 | 3 | 4 | 5;
  /** re-trigger every time it enters the viewport */
  once?: boolean;
};

/**
 * Scroll-driven reveal primitive. Adds `is-visible` when the element
 * enters the viewport, powering the consistent fade-up motion language.
 */
export function Reveal({ children, as, className = "", delay, once = true }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
