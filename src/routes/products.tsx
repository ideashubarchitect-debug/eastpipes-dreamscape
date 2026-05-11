import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — East Pipes" },
      { name: "description", content: "LSAW, HSAW pipes and coatings from East Pipes." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div>
      <Header overlay={false} />
      <main className="container-wide pt-40 pb-32">
        <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">Products</span>
        <h1 className="mt-4 text-5xl md:text-7xl font-semibold leading-[1.05]">
          Pipes engineered for the world.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Full Products page coming next.
        </p>
      </main>
      <Footer />
    </div>
  );
}
