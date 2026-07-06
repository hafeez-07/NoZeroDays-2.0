import {
  Flame,
  NotebookPen,
  TrendingUp,
  Award,
  CalendarCheck,
  CalendarX,
  Target,
} from "lucide-react";

export default function StatSection() {
  return (
    <div className="grid grid-cols-6 mt-5 w-full gap-3">
      <div className="stat-card">
        <div className="border border-zinc-700 rounded  bg-white/20 p-1">
          <NotebookPen />
        </div>
        <div>
          <p className="font-bold font-mono text-xl">150</p>
          <p className="text-sm text-zinc-400">Total Sessions</p>
        </div>
      </div>
      <div className="stat-card">
        <div className="border border-zinc-700 rounded  bg-white/20 p-1">
          <TrendingUp />
        </div>
        <div>
          <p className="font-bold font-mono text-xl">3h 15m</p>
          <p className="text-sm text-zinc-400">Avg / Day</p>
        </div>
      </div>
      <div className="stat-card">
        <div className="border border-zinc-700 rounded  bg-orange-300/20 p-1">
          <Award color="orange" />
        </div>
        <div>
          <p className="font-bold font-mono text-xl">9h 15m</p>
          <p className="text-sm text-zinc-400">Best Day</p>
        </div>
      </div>
      <div className="stat-card">
        <div className="p-1 bg-green-300/20 rounded">
          <CalendarCheck color="green"/>
        </div>
        <div>
          <p className="font-bold font-mono text-xl">39</p>
          <p className="text-sm text-zinc-400">Active Days</p>
        </div>
      </div>
      <div className="stat-card">
       <div className="p-1 bg-red-300/20 rounded"><CalendarX color="red"/></div> 
        <div>
          <p className="font-bold font-mono text-xl">5</p>
          <p className="text-sm text-zinc-400">Missed Days</p>
        </div>
      </div>
      <div className="stat-card">
       <div className="p-1 bg-purple-300/20 rounded"> <Target color="purple"/></div>
        <div>
          <p className="font-bold font-mono text-xl">89%</p>
          <p className="text-sm text-zinc-400">Consistency</p>
        </div>
      </div>
    </div>
  );
}
