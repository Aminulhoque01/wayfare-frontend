"use client";

import Destination from "@/components/Destination/Destination";
import ExperiencesSlider from "@/components/Experiences/Experiences";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyTravelersChooseUs from "@/components/WhyTravelersChooseUs/WhyTravelersChooseUs";
import Travel from "./Travel/page";
 



export default function Home() {
 

  return (
    <main>
      <HeroSection />
      <Destination/>
      <WhyTravelersChooseUs/>
      <ExperiencesSlider/>
      <Travel/>
    </main>
  );
}