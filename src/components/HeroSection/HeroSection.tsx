"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import Navbar from "../Navbar/Navbar";
import { Search } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  
  const images = [
    "/assest/heroImage/hero-banner1.jpg",
    "/assest/heroImage/hero-banner2.jpg",
    "/assest/heroImage/hero-banner3.jpg",
  ];
 const [people, setPeople] = useState(0);
    

  const increase = () => {
    setPeople(people + 1);
  };

  const decrease = () => {
    if (people > 1) {
      setPeople(people - 1);
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col">
      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        className="absolute top-0 left-0 w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Responsive Image */}
              <Image
                src={img}
                alt={`hero ${index}`}
                fill
                className="object-cover"
                priority={true}  
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#034158]/80 to-[#0341589c]"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navbar */}
      <div className="absolute top-0 w-full md:z-20">
        <Navbar />
      </div>

      {/* Hero Text */}
      <div className="absolute top-[18%] md:top-1/2 md:-translate-y-1/2 w-full flex flex-col items-center text-center text-white px-6 z-20">
        <h1 className="text-2xl md:text-5xl font-light leading-snug max-w-4xl">
          Wander beyond the <span className="italic">bucket list.</span>
          <br />
          Discover <span className="italic">places</span> that change
          <br />
          how you <span className="italic">see the world.</span>
        </h1>
      </div>

      {/* Search Section */}
      <div className="absolute bottom-6 md:bottom-10 w-full flex justify-center px-4 z-20">
        {/* Desktop Search */}
       <div className="hidden md:flex items-center bg-white rounded-full shadow-xl px-6 py-3 gap-6 max-w-6xl ">

          {/* From */}
          <div className="flex flex-col border-r pr-6">
            <span className="text-md text-gray-500">From</span>
            <select className="outline-none font-medium">
              <option>Berlin</option>
              <option>London</option>
              <option>Tokyo</option>
            </select>
          </div>

          {/* To Destination */}
          <div className="flex flex-col border-r pr-6">
            <span className="text-md text-gray-500">To Destination</span>
            <select className="outline-none font-medium">
              <option>Paris</option>
              <option>Rome</option>
              <option>Dubai</option>
            </select>
          </div>

          {/* Departure */}
          <div className="flex flex-col border-r pr-6">
            <span className="text-md text-gray-500">Departure Date</span>
            <input
              type="date"
              defaultValue="2026-03-10"
              className="outline-none font-medium"
            />
          </div>

          {/* Trip Duration */}
          <div className="flex flex-col border-r pr-6">
            <span className="text-md text-gray-500">Trip Duration</span>
            <select className="outline-none font-medium">
              <option>3-5 Days</option>
              <option>7 Days</option>
              <option>10 Days</option>
            </select>
          </div>

          {/* People */}
        <div className="flex flex-col pr-4">
          <span className="text-md text-gray-500">People</span>
          <div className="flex items-center gap-3 font-medium">
            <button onClick={decrease} className="text-lg px-2">-</button>
            <span>{people}</span>
            <button onClick={increase} className="text-lg px-2">+</button>
          </div>
        </div>

          {/* Search Button */}
          <div className="flex justify-end">
            <button className="flex  items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition">
            <Search size={18} />
            Search
          </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden bg-white rounded-2xl shadow-xl w-full max-w-md p-4 space-y-4">
          <div>
            <p className="text-sm text-gray-500">From</p>
            <input type="text" defaultValue="Berlin" className="w-full outline-none font-medium" />
          </div>
          <div className="border-t pt-3">
            <p className="text-sm text-gray-500">To Destination</p>
            <input type="text" defaultValue="Paris" className="w-full outline-none font-medium" />
          </div>
          <div className="border-t pt-3">
            <p className="text-sm text-gray-500">Departure Date</p>
            <input type="date" className="w-full outline-none" />
          </div>
          <div className="border-t pt-3">
            <p className="text-sm text-gray-500">Trip Duration</p>
            <select className="w-full outline-none">
              <option>3-5 Days</option>
              <option>1 Week</option>
              <option>2 Weeks</option>
            </select>
          </div>
          <div className="border-t pt-3 flex justify-between items-center">
            <div className="flex flex-col pr-4">
            <span className="text-md text-gray-500">People</span>
            <div className="flex items-center gap-3 font-medium">
              <button onClick={decrease} className="text-lg px-2">-</button>
              <span>{people}</span>
              <button onClick={increase} className="text-lg px-2">+</button>
            </div>
          </div>
          </div>
          <button className="w-full bg-teal-600 text-white py-3 rounded-xl">Search</button>
        </div>
      </div>
    </section>
  );
}