import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import StickyWhatsapp from "@/components/StickyWhatsapp";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-12">
        <Outlet />
      </main>
      <StickyWhatsapp />
      <Footer />
    </div>
  );
}
