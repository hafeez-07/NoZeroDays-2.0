import StudyEntryForm from "@/components/StudyEntryForm";
import TodaysStats from "@/components/TodayStats";

export default function Home() {
  return (
    <div className="h-full bg-[#09090B] text-zinc-50 p-6">
      <div className="flex gap-6">
      <StudyEntryForm />
      <TodaysStats/>
      </div>
      
    </div>
  );
}
