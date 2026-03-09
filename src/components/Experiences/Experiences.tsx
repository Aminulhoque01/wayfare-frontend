"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { FaUmbrellaBeach, FaMountain, FaShip, FaUsers, FaHiking } from "react-icons/fa";

import family from "../../../public/assest/exprience/family.png";
import advancer from "../../../public/assest/exprience/advancer.png";
import ice from "../../../public/assest/exprience/ice.png";
import lance from "../../../public/assest/exprience/lance.png";
import travel from "../../../public/assest/exprience/travel.jpg";

const experiences = [
  {
    title: "Beach & Islands",
    desc: "Relaxing tropical escapes, island hopping, beach resorts",
    img: travel,
    icon: FaUmbrellaBeach,
  },
  {
    title: "Adventure",
    desc: "Thrill-based trips like trekking, rafting, paragliding, safaris",
    img: advancer,
    icon: FaHiking,
  },
  {
    title: "Family Holidays",
    desc: "Kid-friendly destinations, theme parks, multi-day tours",
    img: family,
    icon: FaUsers,
  },
  {
    title: "Cruises",
    desc: "Luxury cruises, river voyages, expedition ships",
    img: ice,
    icon: FaShip,
  },
  {
    title: "Mountain Tours",
    desc: "Explore mountains, hiking and camping trips",
    img: lance,
    icon: FaMountain,
  },
];

export default function ExperiencesSlider() {

  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">

          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
            Popular Experiences
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Browse our <span className="italic font-light">top experiences</span>
          </h2>

        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>

          <div className="flex -ml-4">

            {experiences.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="pl-4 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >

                  {/* Card */}
                  <div className="group relative h-[500px] rounded-[28px] p-8 bg-gray-200 overflow-hidden flex flex-col justify-end">

                    {/* Hover Image */}
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

                    {/* Center SVG */}
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition duration-300 z-10">

                      <div className="text-[120px] text-gray-700">
                        <Icon />
                      </div>

                    </div>

                    {/* Text */}
                    <div className="relative z-10">

                      <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-3 group-hover:text-white">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-6 group-hover:text-gray-200">
                        {item.desc}
                      </p>

                      <button className="bg-teal-700 text-white px-6 py-3 rounded-full text-sm hover:bg-teal-800">
                        Explore Packages ↗
                      </button>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}