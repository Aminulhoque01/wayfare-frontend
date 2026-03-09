"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import paris from "../../../public/assest/destanis/paris.png"
import bali from "../../../public/assest/destanis/indonashia.png"
import japan from "../../../public/assest/destanis/japan.png"
import canada from "../../../public/assest/destanis/canada.png"
import iceland from "../../../public/assest/destanis/iceland.png"
import { MdArrowOutward } from "react-icons/md";
import { LuPackageOpen } from "react-icons/lu";

const destinations = [
  {
    name: "Paris, France",
    desc: "Stroll the cobbled streets, cruise the Seine, and fall in love with every corner.",
    img: paris,
  },
  {
    name: "Bali, Indonesia",
    desc: "From serene rice terraces to soulful beaches, where peace meets play.",
    img: bali,
  },
  {
    name: "Kyoto, Japan",
    desc: "Where tradition meets tranquility—shrines, gardens, and geishas.",
    img: japan,
  },
  {
    name: "Banff, Canada",
    desc: "Majestic mountains, glacier-fed lakes, and trails that thrill.",
    img: canada,
  },
  {
    name: "Reykjavik, Iceland",
    desc: "Majestic mountains, glacier-fed lakes, and trails that thrill.",
    img: iceland,
  },
  {
    name: "Paris, France",
    desc: "Stroll the cobbled streets, cruise the Seine, and fall in love with every corner.",
    img: paris,
  },
  {
    name: "Bali, Indonesia",
    desc: "From serene rice terraces to soulful beaches, where peace meets play.",
    img: bali,
  },
  {
    name: "Kyoto, Japan",
    desc: "Where tradition meets tranquility—shrines, gardens, and geishas.",
    img: japan,
  },
  {
    name: "Banff, Canada",
    desc: "Majestic mountains, glacier-fed lakes, and trails that thrill.",
    img: canada,
  },
  {
    name: "Reykjavik, Iceland",
    desc: "Majestic mountains, glacier-fed lakes, and trails that thrill.",
    img: iceland,
  },
];

export default function Destination() {
  return (
    <div className="bg-[#003248]">
    <div className="max-w-7xl mx-auto py-12 px-4 ">
      <p className="text-xl bg-[#335B6D] text-white px-3 py-1 rounded-full inline-block mb-4">
        Top Global Destinations
      </p>
      <h2 className="text-5xl font-bold mb-8 text-white">
        <span className="italic">Explore iconicplaces</span>  <br/> 
        <span className="italic">that inspire{" "} wanderlust</span> worldwide.
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-[30px] overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src={dest.img}
                alt={dest.name}
                width={300}
                height={500}
                className="object-cover w-full h-[500px] group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#9eacb16b]   text-white text-lg font-medium rounded-full w-60 h-12 mx-auto top-5">
                <LuPackageOpen className="mr-2"/> 5+ Packages Available
                </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">{dest.name}</h3>
                <p className="text-white text-sm">{dest.desc}</p>
                <button className="mt-2   w-full flex justify-between items-center text-sm font-medium text-white bg-white px-5 py-3 rounded-full hover:bg-white/40 transition">
                  <h3 className="text-black">Explore {dest.name.split(",")[0]}</h3>
                   <span><MdArrowOutward className="text-black" /></span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    </div>
  );
}