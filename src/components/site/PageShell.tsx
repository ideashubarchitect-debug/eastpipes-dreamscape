import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

export function PageShell({ children, overlay = true }: { children: ReactNode; overlay?: boolean }) {
  return (
    <div className="bg-background">
      <ScrollProgress />
      <Header overlay={overlay} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
