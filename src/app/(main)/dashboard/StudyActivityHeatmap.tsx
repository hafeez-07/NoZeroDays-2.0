import { Calendar, ChevronDown } from "lucide-react";
export default function StudyActivityHeatmap() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  const year = 2026;
  let current = new Date(year, 0, 1);
  console.log(current);
  const end = new Date(year + 1, 0, 1);
  let days = [];
  while (current < end) {
    days.push({
      date: new Date(current),
      dayOfWeek: current.getDay(),
      dayOfMonth: current.getDate(),
      month: current.getMonth(),
      year: current.getFullYear(),
      studyMinutes: 0,
    });
    current.setDate(current.getDate() + 1);
  }

  const firstDay = new Date(year, 0, 1).getDay();
  const blanks = Array.from({ length: firstDay });

  let monthIndex = [];
  let index = 0;
  for (let i = 0; i < days.length; i++) {
    if (days[i].dayOfMonth == 1) {
      // +1 -> bcs grid starts from 1 not 0
      monthIndex[index++] = Math.floor((blanks.length + i) / 7) + 1;
    }
  }

  return (
    <div className="border border-zinc-800 bg-zinc-900 p-6 mt-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Calendar size={32} />
          <div>
            <h2 className="text-2xl font-semibold">Study Activity</h2>
            <p className="text-sm text-zinc-400">Your consistency over time</p>
          </div>
        </div>
        <div className="border border-zinc-600 w-fit rounded px-2  flex items-center gap-2">
          <p className="text-sm">2026</p>
          <button>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
      <div className="mt-2">
        <div
          className="grid  text-xs ml-8 "
          style={{
            gridTemplateColumns: "repeat(53,16px)",
          }}
        >
          {months.map((month, index) => (
            <div
              key={index}
              style={{
                gridColumnStart: monthIndex[index],
              }}
            >
              {month}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          <div className="flex flex-col  text-xs text-zinc-400">
            {weekDays.map((day, index) => (
              <div key={index}>{day}</div>
            ))}
          </div>
          <div className="grid grid-flow-col grid-rows-7 gap-1 ">
            {blanks.map((blank, index) => (
              <div key={index} className=" h-3 w-3 "></div>
            ))}
            {days.map((cell, index) => (
              <div key={index} className=" h-3 w-3 border"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="flex gap-2 items-center">
          <div className="h-3 w-3 border bg-zinc-900 border-zinc-700"></div>
          <div className="text-zinc-400 text-sm ">0 min</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-3 w-3 border bg-emerald-200/20 border-emerald-200/20"></div>
          <div className="text-zinc-400 text-sm">1-60 min</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-3 w-3 border border-emerald-300 bg-emerald-300/50"></div>
          <div className="text-zinc-400 text-sm">61-120 min</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-3 w-3 border border-emerald-800 bg-emerald-400/80 "></div>
          <div className="text-zinc-400 text-sm">121-180 min</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-3 w-3 border  border-emerald-200 bg-emerald-300"></div>
          <div className="text-zinc-400 text-sm">180+ min</div>
        </div>
      </div>
    </div>
  );
}
