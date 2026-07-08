import StatSection from "./components/StatSection";
import StreakCard from "./components/StreakCard";
import StudyActivityHeatmap from "./components/StudyActivityHeatmap";
import StudyDistribution from "./components/StudyDistribution";
import StudyTimeChart from "./components/StudyTimeChart";

export default function Dashboard() {
  return (
    <div className="h-full text-zinc-50 bg-[#09090B] p-8">
      <StreakCard />
      <StudyActivityHeatmap />
      <StatSection />
      <div className="flex gap-6">
        <StudyTimeChart />
        <StudyDistribution />
      </div>
    </div>
  );
}
