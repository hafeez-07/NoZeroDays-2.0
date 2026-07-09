"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
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
  const path = usePathname();

  return (
    <aside className="flex flex-col py-2 px-2 fixed top-0 left-0 h-screen bg-[#0F0F13] text-zinc-50 w-58">
      <Image
        src="/darkLogo.png"
        alt="NoZeroDays"
        width="200"
        height="50"
        loading="eager"
        priority
      />

      <div className="mt-5 flex flex-col gap-5 flex-1">
        {/* <div className="flex gap-2 items-center">
          <Plus size={16} />
          <div>New task</div>
        </div> */}

        <div className="flex flex-col gap-2">
          {/* main section */}
          <div className="text-zinc-500 font-mono">Main</div>
          <Link href="/">
            <div
              className={`sidebar-link  ${path == "/" ? "text-emerald-400 bg-zinc-800 rounded-lg " : ""}`}
            >
              <Home size={16} />
              <div>Home</div>
            </div>
          </Link>
          <Link href="/dashboard">
            <div
              className={`sidebar-link  ${path == "/dashboard" ? "text-emerald-400 bg-zinc-800 rounded-lg " : ""}`}
            >
              <LayoutDashboard size={16} />
              <div>Dashboard</div>
            </div>
          </Link>
          <Link
            href="/activity"
            className={`sidebar-link  ${path == "/activity" ? "text-emerald-400 bg-zinc-800 rounded-lg " : ""}`}
          >
            <Activity size={16} />
            <div>Activity</div>
          </Link>
          <Link
            href="/#habitCard"
            className={`sidebar-link  ${path == "/habits" ? "text-emerald-400 bg-zinc-800 rounded-lg " : ""}`}
          >
            <CheckSquare size={16} />
            <div>Habits</div>
          </Link>
        </div>

        {/* tool section */}
        <div className="flex flex-col gap-2">
          <div className="text-zinc-500 font-mono">Tools</div>
          <Link
            href="/#focus"
            className={`sidebar-link  ${path == "/focus" ? "text-emerald-400 bg-zinc-800 rounded-lg " : ""}`}
          >
            <Timer size={16} />
            <div>Focus</div>
          </Link>
          {/* <div className="flex gap-2 items-center">
            <NotebookPen size={16} />
            <div>Notes</div>
          </div> */}
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
