import { ChevronDown, Calendar, Pen, Trash, BookOpen } from "lucide-react";
import ActivityCard from "./ActivityCard";

export default function ActivityPage() {
  const sessions = [
    {
      date: "15-07-2026",
      category: "coding",
      hours: 3,
      minutes: 42,
    },
    {
      date: "15-07-2026",
      category: "DSA",
      hours: 4,
      minutes: 50,
    },
    {
      date: "14-07-2026",
      category: "coding",
      hours: 2,
      minutes: 42,
    },
    {
      date: "14-07-2026",
      category: "reading",
      hours: 3,
      minutes: 15,
    },
  ];

  const groupedSession = Object.groupBy(sessions, (session) => session.date);

  return (
    <section className="p-8">
      <div className="h-full  ">
        <header className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-semibold">Activity Logs</h1>
            <p className="text-zinc-400 text-sm">
              Your recent study logs and activity
            </p>
          </div>

          <button className="destructive-button">Clear All</button>
        </header>
        <div className="bg-zinc-900 p-4 mt-6">
          <div className="text-sm border border-zinc-400 w-fit p-1 rounded flex items-center gap-2">
            <Calendar size={16} />
            <p>Last 30 days</p>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      <div className="mt-6">
        {Object.entries(groupedSession).map(
          ([date, daySessions], index, arr) => (
            <div key={date} className="flex gap-2 ">
              <div className="pt-2 flex flex-col  items-center ">
                <div className="h-2 w-2 rounded-full bg-emerald-300"></div>
                <div className="w-px flex-1  bg-emerald-400/30"></div>
              </div>
              <div className="flex-1 ">
                <h3 className="font-mono font-semibold pb-1">{date}</h3>
                <div className="bg-zinc-900 py-0.5 divide-y divide-zinc-700">
                  {(daySessions || []).map((session) => (
                    <div key={session.category} className="relative">
                      <ActivityCard
                        category={session.category}
                        hours={session.hours}
                        minutes={session.minutes}
                      />
                      <div className="w-3 absolute -left-3 top-1/2   h-px bg-emerald-400/30"></div>
                    </div>
                  ))}
                </div>
                {index != arr.length - 1 && <div className="h-6 "></div>}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
