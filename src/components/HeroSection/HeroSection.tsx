"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

 

export default function HeroSection() {
  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
  ];

  return (
    <section className="relative h-[90vh] w-full">

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[90vh] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

        <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl">
          Wander beyond the <span className="italic">bucket list.</span>
          <br />
          Discover <span className="italic">places</span> that change
          <br />
          how you <span className="italic">see the world.</span>
        </h1>

      </div>

      {/* Search Box */}
      <div className="absolute bottom-10 w-full flex justify-center px-4">
        <div className="bg-white rounded-full shadow-lg flex flex-wrap md:flex-nowrap items-center p-4 gap-4 max-w-5xl w-full">

          <input
            type="text"
            placeholder="From"
            className="flex-1 outline-none"
          />

          <input
            type="text"
            placeholder="To Destination"
            className="flex-1 outline-none"
          />

          <input
            type="date"
            className="flex-1 outline-none"
          />

          <input
            type="text"
            placeholder="Trip Duration"
            className="flex-1 outline-none"
          />

          <input
            type="number"
            placeholder="People"
            className="w-24 outline-none"
          />

          <button className="bg-teal-600 text-white px-6 py-3 rounded-full">
            Search
          </button>

        </div>
      </div>

    </section>
  );
}