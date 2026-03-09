"use client";

import Destination from "@/components/Destination/Destination";
import ExperiencesSlider from "@/components/Experiences/Experiences";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyTravelersChooseUs from "@/components/WhyTravelersChooseUs/WhyTravelersChooseUs";
import Travel from "./Travel/page";
import TourSlider from "@/components/TourSlider/TourSlider";
import TravelExperiences from "@/components/TravelExperiences/TravelExperiences";
import Footer from "@/components/Footer/Footer";
import Dream from "@/components/Dream/Dream";
import FaqSection from "@/components/FaqSection/FaqSection";
import FeaturedArticles from "@/components/FeaturedArticles/FeaturedArticles";
 



export default function Home() {
 

  return (
    <main>
      <HeroSection />
      <Destination/>
      <WhyTravelersChooseUs/>
      <ExperiencesSlider/>
      <Travel/>
      <TourSlider/>
      <TravelExperiences/>
      <FeaturedArticles/>
      <FaqSection/>
      <Dream/>
      <Footer/>
    </main>
  );
}