import { BookOpen, Pen, Trash } from "lucide-react";

type ActivityProps = {
  category: string;
  hours: number;
  minutes: number;
};

export default function ActivityCard({ category, hours,minutes }: ActivityProps) {
  return (
    <div className="px-4 my-4 flex justify-between ">
      <div className="flex items-center gap-2">
        <div className=" bg-emerald-400/30 text-emerald-300 rounded-full p-2">
          <BookOpen size={16} />
        </div>
        <p>{category}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="mr-10">{hours}h {minutes}m</p>
        <div className="p-2 rounded bg-zinc-800">
          <Pen size={16} />
        </div>
        <div className="text-red-400 bg-zinc-800 p-2">
          <Trash size={16} />
        </div>
      </div>
    </div>
  );
}
