"use client";

import Destination from "@/components/Destination/Destination";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyTravelersChooseUs from "@/components/WhyTravelersChooseUs/WhyTravelersChooseUs";
 



export default function Home() {
 

  return (
    <main>
      <HeroSection />
      <Destination/>
      <WhyTravelersChooseUs/>
    </main>
  );
}