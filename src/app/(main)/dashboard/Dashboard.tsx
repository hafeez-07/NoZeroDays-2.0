import StatSection from "./DashboardComponents/StatSection";
import StreakCard from "./DashboardComponents/StreakCard";
import StudyActivityHeatmap from "./DashboardComponents/StudyActivityHeatmap";
import StudyDistribution from "./DashboardComponents/StudyDistribution";
import StudyTimeChart from "./DashboardComponents/StudyTimeChart";

export default function DashboardPage() {
  return (
    <div className="h-full   p-8">
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
