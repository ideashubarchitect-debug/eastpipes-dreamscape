import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PERFORMANCE, LISTING } from "@/lib/market";

export function StockChart() {
  return (
    <div className="h-72 w-full md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={PERFORMANCE} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="brandFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0072ce" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#0072ce" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#6b6b6b" }}
            dy={8}
          />
          <YAxis
            domain={["dataMin - 8", "dataMax + 8"]}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#6b6b6b" }}
            width={56}
            tickFormatter={(v) => `${v}`}
          />
          <Tooltip
            cursor={{ stroke: "#0072ce", strokeWidth: 1, strokeDasharray: "4 4" }}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #e6e9ec",
              boxShadow: "0 12px 40px -12px rgba(0,0,0,0.25)",
              fontSize: 13,
            }}
            labelStyle={{ fontWeight: 600, color: "#16191d" }}
            formatter={(value: number) => [`${value} ${LISTING.currency}`, "Price"]}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#0072ce"
            strokeWidth={2.5}
            fill="url(#brandFill)"
            dot={false}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
