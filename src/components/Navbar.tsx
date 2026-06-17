import Image from "next/image";
import Link from "next/link";
import { Flame, Sunrise, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const today = new Date();
  const day = today.toLocaleDateString("en-us", {
    weekday: "long",
  });
  const date = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const hour = new Date().getHours();
  let greeting = "Good Evening";
  let emoji = <Moon size={16} color="gray" />;

  if (hour < 18) {
    greeting = "Good Afternoon";
    emoji = <Sun size={16} color="orange" />;
  } else if (hour < 12) {
    greeting = "Good Morning";
    emoji = <Sunrise size={16} color="orange" />;
  }

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-zinc-800 text-white">
      <div>
        <div className="flex items-center gap-1">
          {emoji}
          <div>{greeting}, user</div>
        </div>

        <div className="text-xs text-zinc-400">
          {day}, {date}{" "}
        </div>
      </div>
      <div className="flex items-center gap-1 font-mono bg-zinc-600 rounded-2xl px-2 py-1">
        <Flame size={16} color="#FD933A" />
        <div>28d streak</div>
      </div>
    </nav>
  );
}
