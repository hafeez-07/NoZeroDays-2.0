"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import CustomSector from "./CustomSector";
import { Span } from "next/dist/trace";

export default function StudyDistribution() {
  const lastMonthData = [
    {
      name: "Coding",
      "study time": 50,
      fill: "#10B981",
    },
    {
      name: "DSA",
      "study time": 25,
      fill: "#3B82F6",
    },
    {
      name: "Writing",
      "study time": 20,
      fill: "#AC4F23",
    },
    {
      name: "Reading",
      "study time": 10,
      fill: "#F59E0B",
    },
    {
      name: "Assignment",
      "study time": 5,
      fill: "#A855F7",
    },

    {
      name: "Other",
      "study time": 8,
      fill: "#FFFFFF",
    },
  ];
  let sum = 0;
  const totalHours = lastMonthData.map((data) => {
    sum += data["study time"];
  });
  return (
    <div className="w-[50%] bg-zinc-900 p-6 mt-6">
      <header>
        <h2 className="text-2xl font-semibold">Study Distribution</h2>
        <div className="flex justify-between">
          <p className="text-zinc-400 text-sm">
            How your study is divided this month
          </p>
          <p className="font-semibold ">
            Total : <span>{sum}h </span>
          </p>
        </div>
      </header>
      <div>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={lastMonthData}
              nameKey="name"
              dataKey="study time"
              outerRadius={100}
              innerRadius={50}
              paddingAngle={3}
              cornerRadius={3}
              stroke="none"
              shape={CustomSector}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "black",
                border: "gray",
                fontSize: 12,
                borderRadius: 4,
              }}
              itemStyle={{
                color: "white",
              }}
              formatter={(value) => `${value}h`}
            />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              formatter={(value) => (
                <span style={{ color: "gray" }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
