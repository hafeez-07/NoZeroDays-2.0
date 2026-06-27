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
    <div className="grid grid-cols-3 gap-3 mt-5">
      <div className="stat-card">
        <NotebookPen />
        <p>TOTAL SESSIONS</p>
        <p>150</p>
      </div>
      <div className="stat-card">
        <TrendingUp />
        <p>AVG / DAY</p>
        <p>3h 15m</p>
      </div>
      <div className="stat-card">
        <Award />
        <p>BEST DAY</p>
        <p>9h 15m</p>
      </div>
      <div className="stat-card">
        <CalendarCheck />
        <p>ACTIVE DAYS</p>
        <p>39</p>
      </div>
      <div className="stat-card">
        <CalendarX />
        <p>MISSED DAYS</p>
        <p>5</p>
      </div>
      <div className="stat-card">
        <Target />
        <p>CONSISTENCY</p>
        <p>89%</p>
      </div>
    </div>
  );
}
