import Focus from "@/app/(main)/components/Focus";
import HabitCard from "@/app/(main)/components/HabitCard";
import StudyEntryForm from "@/app/(main)/components/StudyEntryForm";
import TodaysStats from "@/app/(main)/components/TodayStats";

export default function Home() {
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
