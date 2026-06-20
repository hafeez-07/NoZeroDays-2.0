export default function TodayStats() {
  let progress = (3/ 5) * 100;
  return (
    <div className="border w-full p-8 flex flex-col gap-4 bg-zinc-900 rounded-2xl border-zinc-800">
      <div>
        <h2 className="text-2xl font-semibold">Today's Stats</h2>
        <div className="text-zinc-400 text-sm">
          Track your progress and stay consistent
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>Study time</div>
        <div className="bg-black py-2 px-4 rounded-lg">3h 20m</div>
      </div>
      <div className="grid grid-cols-2">
        <div>Daily goal</div>
        <div className="bg-black py-2 px-4 rounded-lg ">3h / 5h</div>
      </div>
      <div className="grid grid-cols-2">
        <div>Goal progress</div>
        <div className="flex items-center gap-2 py-2">
          <div className="flex-1 border border-zinc-900 h-4 bg-zinc-50 overflow-hidden">
            <div
              className={`${progress > 75 ? "bg-emerald-400" : "bg-red-400"} h-4`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div>{progress}%</div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>Last Updated</div>
        <div className="bg-black py-2 px-4 rounded-lg">Today , 10:15 AM</div>
      </div>
      <div className="grid grid-cols-2">
        <div>Task Done</div>
        <div className="bg-black py-2 px-4 rounded-lg"> 2 / 5</div>
      </div>
    </div>
  );
}
