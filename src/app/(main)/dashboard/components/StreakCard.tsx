import { Flame, Clock, Trophy } from "lucide-react";

export default function StreakCard() {
  return (
    <div className="grid grid-cols-3 w-full gap-4 ">
      <div className="flex items-center gap-4 border border-zinc-800 bg-zinc-900 rounded px-6">
        <div className=" bg-emerald-300/20 p-2 rounded text-emerald-300">
          <Clock size={32} />
        </div>

        <div>
          <p className="text-3xl font-bold font-mono">489</p>
          <p>Total Study Hours</p>
          <p className="text-xs text-emerald-400">Oct 4 , 2025 - Present</p>
        </div>
      </div>

      <div className="flex items-center gap-4 border border-zinc-800 bg-zinc-900 rounded px-6">
        <div className="streak-circle text-emerald-500">
          <Flame size={32}  />
        </div>
        <div>
          <p className=" text-3xl font-bold font-mono">3</p>
          <p>Current Streak</p>
          <p className="text-xs text-emerald-400">Jun 25 - Jun 27 </p>
        </div>
      </div>
      <div className="flex items-center gap-4 border border-zinc-800 bg-zinc-900 p-2">
        <div className="bg-purple-400/20 text-purple-400 p-2 rounded">
          <Trophy size={32}  />
        </div>

        <div>
          <p className="text-3xl font-bold font-mono">32</p>
          <p>Longest Streak</p>
          <p className="text-xs text-emerald-400 ">Jan 10 - Feb 10</p>
        </div>
      </div>
    </div>
  );
}
