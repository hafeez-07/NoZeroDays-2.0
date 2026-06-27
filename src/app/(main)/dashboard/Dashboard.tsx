import StatSection from "./StatSection";
import StreakCard from "./StreakCard";

export default function Dashboard() {
  return (
    <div className="h-full text-zinc-50 bg-[#09090B] p-8">
      <StreakCard />
      <StatSection />
    </div>
  );
}
