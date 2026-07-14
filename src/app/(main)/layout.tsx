import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex  ">
      <Sidebar />
      <div className="ml-58 border-l border-zinc-800 flex flex-col min-h-screen flex-1 ">
        <header>
          <Navbar />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
