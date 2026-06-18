import { useMemo, useState } from "react";
import { stockSeries, ticker } from "@/data/ir";

const RANGES = ["1M", "3M", "1Y", "5Y"] as const;
type Range = (typeof RANGES)[number];

export function StockChart() {
  const [range, setRange] = useState<Range>("1Y");
  const data = stockSeries[range];

  const { path, area, min, max, last, first } = useMemo(() => {
    const w = 800;
    const h = 240;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const span = max - min || 1;
    const step = w / (data.length - 1);
    const pts = data.map((v, i) => [i * step, h - ((v - min) / span) * (h - 24) - 12] as const);
    const path = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const area = `${path} L${w},${h} L0,${h} Z`;
    return { path, area, min, max, last: data[data.length - 1], first: data[0] };
  }, [data]);

  const change = last - first;
  const changePct = (change / first) * 100;
  const up = change >= 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="eyebrow text-foreground/50">{ticker.exchange} · {ticker.symbol} ({ticker.code})</div>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-display text-5xl tracking-tight text-ink">{ticker.price.toFixed(2)}</span>
            <span className="font-mono text-sm text-foreground/60">{ticker.currency}</span>
            <span className={`font-mono text-sm ${up ? "text-emerald-600" : "text-rose-600"}`}>
              {up ? "▲" : "▼"} {Math.abs(change).toFixed(2)} ({changePct.toFixed(2)}%)
            </span>
          </div>
          <div className="mt-1 text-xs text-foreground/50">{ticker.asOf}</div>
        </div>
        <div className="flex rounded-full border border-border p-1">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-4 py-1.5 text-xs font-mono rounded-full transition ${
                range === r ? "bg-ink text-white" : "text-foreground/60 hover:text-ink"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 relative">
        <svg viewBox="0 0 800 240" className="w-full h-[240px]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.58 0.18 252)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="oklch(0.58 0.18 252)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#spark)" />
          <path d={path} fill="none" stroke="oklch(0.58 0.18 252)" strokeWidth="2" />
        </svg>
        <div className="absolute inset-x-0 -bottom-2 flex justify-between text-[10px] font-mono text-foreground/40">
          <span>Low {min.toFixed(2)}</span>
          <span>High {max.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
