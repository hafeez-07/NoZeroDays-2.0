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
      study: "1",
    },
    {
      day: "Tue",
      study: "3",
    },
    {
      day: "Wed",
      study: "5",
    },
    {
      day: "Thur",
      study: "7",
    },
    {
      day: "Mon",
      study: "2",
    },
    {
      day: "Fri",
      study: "4",
    },
    {
      day: "Sat",
      study: "6",
    },
  ];
  return (
    <div className="p-6 mt-6 rounded bg-zinc-900 w-[50%]">
      <div className="flex  justify-between">
        <h2 className="text-xl">
          <span className=" font-semibold">Study Time </span>( Last 7 days )
        </h2>
        <p>
          <span className="font-bold">Total</span> : 28h 40m
        </p>
      </div>
      <ResponsiveContainer width="100%" height={200} className=" mt-6">
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
              color:"white"
            }}
            itemStyle={{
              color: "white",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
