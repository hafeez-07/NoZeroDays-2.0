import { Flame } from "lucide-react";

export default function StreakCard() {
  return (
    <div className="p-8 flex items-center gap-6 border bg-zinc-900 rounded border-zinc-800 w-fit">
      <div className="text-center  space-y-2">
        <p className="text-3xl font-bold font-mono">489</p>
        <p>Total Study Hours</p>
        <p className="text-xs text-emerald-400">Oct 4 , 2025 - Present</p>
      </div>
      <div className="text-center border-x border-zinc-500 px-6 space-y-2">
        <div className="streak-circle mx-auto">
          <div className="fire-icon">
            <Flame size={28} color="gray" />
          </div>
          <p className=" text-3xl font-bold font-mono">3</p>
        </div>

        <p>Current Streak</p>
        <p className="text-xs text-emerald-400">Jun 25 - Jun 27 </p>
      </div>
      <div className="text-center space-y-2">
        <p className="text-3xl font-bold font-mono">32</p>
        <p>Longest Streak</p>
        <p className="text-xs text-emerald-400 ">Jan 10 - Feb 10</p>
      </div>
    </div>
  );
}
