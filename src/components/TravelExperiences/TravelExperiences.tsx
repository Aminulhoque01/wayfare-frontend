"use client";
import { useState } from "react";
import Image from "next/image";

import image1 from "../../../public/assest/travelExprienc/top-experiences1.png";
import image2 from "../../../public/assest/travelExprienc/top-experiences2.png";
import image3 from "../../../public/assest/travelExprienc/top-experiences3.jpg";
import image4 from "../../../public/assest/travelExprienc/top-experiences4.png";

const experiences = [
  {
    title: "Santorini Sunset Cruise",
    tags: "Romantic, Scenic",
    duration: "4 Days",
    location: "Greece",
    image: image1,
  },
  {
    title: "Kenya Safari Adventure",
    tags: "Wildlife, Luxury",
    duration: "7 Days",
    location: "Kenya",
    image: image2,
  },
  {
    title: "Bali Yoga Retreat",
    tags: "Wellness, Solo",
    duration: "5 Days",
    location: "Indonesia",
    image: image3,
  },
  {
    title: "Iceland Northern Lights",
    tags: "Adventure, Nature",
    duration: "6 Days",
    location: "Iceland",
    image: image4,
  },
];

export default function TravelExperiences() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0a3b4a] text-white py-20 px-5">

      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 gap-6">

          <div>
            <span className="bg-[#1b5566] px-4 py-1 rounded-full text-sm">
              Top Experiences
            </span>

            <h2 className="text-3xl md:text-4xl mt-4 font-light">
              Popular <span className="italic">travel experience packages</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-gray-300">
            Enjoy curated itineraries, transparent pricing, and 24/7 assistance
            from local experts who truly care.
          </p>

        </div>

        {/* List */}
        <div className="space-y-8 md:space-y-0">

          {experiences.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="border-b border-gray-400 pb-6 md:pb-4 group cursor-pointer"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Mobile Image */}
                <div className="relative w-full h-[180px] md:hidden rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Desktop Content */}
                <div className="flex flex-col md:flex-row md:items-center md:gap-16 text-lg w-full">

                  <h3 className="md:w-64 font-medium">{item.title}</h3>

                  <p className="text-gray-300 text-sm md:text-base">
                    {item.tags}
                  </p>

                  <p className="text-gray-300 text-sm md:text-base">
                    {item.duration} · {item.location}
                  </p>

                  {/* Desktop Hover Image */}
                  <div className="relative w-[160px] h-[100px] overflow-hidden rounded-lg hidden md:block">
                    {activeIndex === index && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                </div>

                {/* Arrow */}
                <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                  →
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}