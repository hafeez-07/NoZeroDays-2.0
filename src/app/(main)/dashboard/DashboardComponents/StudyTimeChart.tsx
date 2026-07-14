"use client";

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function StudyTimeChart() {
  const lastWeekData = [
    {
      day: "Mon",
      study: 1,
    },
    {
      day: "Tue",
      study: 3,
    },
    {
      day: "Wed",
      study: 5,
    },
    {
      day: "Thur",
      study: 7,
    },
    {
      day: "Mon",
      study: 2,
    },
    {
      day: "Fri",
      study: 4,
    },
    {
      day: "Sat",
      study: 6,
    },
  ];

  let total = 0;
  const totalHours = lastWeekData.map((data) => {
    total += data.study;
  });

  return (
    <section className="p-6 mt-6 rounded bg-zinc-900 w-[50%]">
      <header>
        <h2 className="text-2xl font-semibold">Study Time</h2>

        <div className="flex justify-between">
          <p className="text-zinc-400 text-sm">
            Performance in the past seven days
          </p>
          <p>
            Total : <span>{total}h</span>
          </p>
        </div>
      </header>

      <ResponsiveContainer width="100%" height={200} className="mt-6 ">
        <BarChart data={lastWeekData} margin={{ left: -20, top: 10 }}>
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "gray",
            }}
          />
          <YAxis
            tickLine={false}
            tickFormatter={(value) => `${value}h`}
            tick={{
              fontSize: 12,
              fill: "gray",
            }}
          />
          <Bar dataKey="study" fill="#00BC7D" />
          <CartesianGrid vertical={false} stroke="gray" strokeDasharray="4 4" />
          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: "black",
              border: "none",
              borderRadius: "5%",
              fontSize: 12,
              color: "white",
            }}
            itemStyle={{
              color: "white",
            }}
            formatter={(value) => `${value}h`}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
