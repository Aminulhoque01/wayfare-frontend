"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import Navbar from "../Navbar/Navbar";

export default function HeroSection() {
  const images = [
    "/assest/heroImage/hero-banner1.jpg",
    "/assest/heroImage/hero-banner2.jpg",
    "/assest/heroImage/hero-banner3.jpg",
  ];

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
        <div className="hidden md:flex bg-white rounded-full shadow-lg items-center p-4 gap-4 max-w-5xl w-full">
          <input type="text" placeholder="From" className="flex-1 outline-none px-2" />
          <input type="text" placeholder="To Destination" className="flex-1 outline-none px-2" />
          <input type="date" className="flex-1 outline-none px-2" />
          <input type="text" placeholder="Trip Duration" className="flex-1 outline-none px-2" />
          <input type="number" placeholder="People" className="w-20 outline-none px-2" />
          <button className="bg-teal-600 text-white px-6 py-3 rounded-full">Search</button>
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
            <p className="text-sm text-gray-500">People</p>
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 bg-gray-200 rounded-full">-</button>
              <span>2</span>
              <button className="w-8 h-8 bg-gray-200 rounded-full">+</button>
            </div>
          </div>
          <button className="w-full bg-teal-600 text-white py-3 rounded-xl">Search</button>
        </div>
      </div>
    </section>
  );
}