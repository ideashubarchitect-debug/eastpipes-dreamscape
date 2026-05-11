import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-ink text-white border-t border-white/10">
      <div className="container-wide py-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Get news &amp; updates from East Pipes
          </h3>
          <p className="mt-3 text-white/65 max-w-xl">
            Project announcements, plant news and engineering insights — delivered occasionally, never spammy.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setDone(true);
          }}
          className="flex items-center bg-white rounded-full p-1.5 max-w-xl md:ml-auto w-full"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={done ? "Subscribed — thank you" : "Your email"}
            disabled={done}
            className="flex-1 bg-transparent px-5 py-3 text-ink placeholder:text-ink/50 outline-none"
          />
          <button
            type="submit"
            disabled={done}
            className="rounded-full bg-ink text-white px-6 py-3 text-sm font-medium hover:bg-brand transition disabled:opacity-60"
          >
            {done ? "Done" : "Sign up"}
          </button>
        </form>
      </div>
    </section>
  );
}
