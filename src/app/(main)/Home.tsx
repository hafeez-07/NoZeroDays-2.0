import Focus from "@/app/(main)/HomeComponents/Focus";
import HabitCard from "@/app/(main)/HomeComponents/HabitCard";
import StudyEntryForm from "@/app/(main)/HomeComponents/StudyEntryForm";
import TodaysStats from "@/app/(main)/HomeComponents/TodayStats";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 h-full bg-[#09090B] text-zinc-50 p-6">
      <div className="flex gap-6">
        <StudyEntryForm />
        <TodaysStats />
      </div>
      <div className="flex gap-6">
        <HabitCard />
        <Focus />
      </div>
    </div>
  );
}
