import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoZeroDays",
  description: "productivity app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.className} bg-[#09090B] text-zinc-50 min-h-full flex flex-col  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
