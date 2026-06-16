import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-zinc-800 text-white">
      <div>
        <div>Good morning ,user</div>
        <div className="text-xs">Date and time</div>
      </div>
      <div>streaks</div>
    </nav>
  );
}
