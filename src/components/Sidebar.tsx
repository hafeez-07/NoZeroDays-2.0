import Image from "next/image";
import {
  Plus,
  Home,
  LayoutDashboard,
  CheckSquare,
  Activity,
  Timer,
  NotebookPen,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex flex-col py-2 px-2 fixed top-0 left-0 h-screen bg-[#0F0F13] text-zinc-50 w-64">
      <Image
        src="/darkLogo.png"
        alt="NoZeroDays"
        width="200"
        height="50"
        loading="eager"
        priority
      />

      <div className="mt-5 flex flex-col gap-5 flex-1">
        <div className="flex gap-2 items-center">
          <Plus size={16} />
          <div>New task</div>
        </div>

        <div className="flex flex-col gap-2">
          {/* main section */}
          <div className="text-zinc-500 font-mono">Main</div>
          <div className="flex gap-2 items-center">
            <Home size={16} />
            <div>Home</div>
          </div>
          <div className="flex gap-2 items-center">
            <LayoutDashboard size={16} />
            <div>Dashboard</div>
          </div>
          <div className="flex gap-2 items-center">
            <CheckSquare size={16} />
            <div>Tasks</div>
          </div>
          <div className="flex gap-2 items-center">
            <Activity size={16} />
            <div>Activity</div>
          </div>
        </div>

        {/* tool section */}
        <div className="flex flex-col gap-2">
          <div className="text-zinc-500 font-mono">Tools</div>
          <div className="flex gap-2 items-center">
            <Timer size={16} />
            <div>Focus</div>
          </div>
          <div className="flex gap-2 items-center">
            <NotebookPen size={16} />
            <div>Notes</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-zinc-500 font-mono">Today</div>
          <div>3 / 5 Tasks Done</div>
        </div>
      </div>

      {/* profile section */}
      <div className="flex items-center gap-3 border p-2 bg-zinc-800 border-zinc-900 rounded-2xl">
        <div className="w-8 h-8 rounded-full bg-white text-black flex justify-center items-center text-sm">
          HM
        </div>
        <div>
          <div>Hafeez Mohammad</div>
          <div className="text-xs text-zinc-400">student</div>
        </div>
      </div>
    </aside>
  );
}
