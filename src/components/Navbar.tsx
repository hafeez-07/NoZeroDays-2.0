import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-4 py-2 bg-black text-white">
      <Link href="/">
        <Image
          src="/darkLogo.png"
          alt="nozerodays"
          width={100}
          height={100}
          priority
          className="h-auto"
        />
      </Link>
      <div className="flex gap-3">
        <Link href='/'>Home</Link>
        <Link href="/activity">Activity</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/settings">Setting</Link>
      </div>
    </nav>
  );
}
