import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
     <main className="min-h-screen bg-gradient-to-r from-slate-500 to-slate-700">
      <Navbar />
      <HeroSection/>
    </main>
  )
}