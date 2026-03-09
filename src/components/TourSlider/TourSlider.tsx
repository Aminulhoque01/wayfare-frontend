/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Heart } from "lucide-react";

import image1 from "../../../public/assest/tour/upcoming-tours1 (1).jpg";
import image2 from "../../../public/assest/tour/upcoming-tours2.jpg";
import image3 from "../../../public/assest/tour/upcoming-tours3.jpg";
import image4 from "../../../public/assest/tour/upcoming-tours4.jpg";
import image5 from "../../../public/assest/tour/upcoming-tours5.jpg";

const tours = [
  { title: "Tuscany & Countryside", price: "$2,499", img: image1, badge: "Early Bird 10% off" },
  { title: "Thailand Island Hopper", price: "$1,599", img: image2, badge: "20% off" },
  { title: "Dubai Luxe Tour", price: "$2,199", img: image3, badge: "Trending Now" },
  { title: "Vietnam Culture & Cruise", price: "$1,799", img: image4, badge: "Best Time to Visit" },
  { title: "Santorini Sunsets", price: "$1,799", img: image5, badge: "Early Bird 10% off" },
  { title: "Tuscany & Countryside", price: "$2,499", img: image1, badge: "Early Bird 10% off" },
  { title: "Thailand Island Hopper", price: "$1,599", img: image2, badge: "20% off" },
  { title: "Dubai Luxe Tour", price: "$2,199", img: image3, badge: "Trending Now" },
  { title: "Vietnam Culture & Cruise", price: "$1,799", img: image4, badge: "Best Time to Visit" },
  { title: "Santorini Sunsets", price: "$1,799", img: image5, badge: "Early Bird 10% off" },
];

export default function TourSlider() {
  const [liked, setLiked] = useState({});

  const toggleLike = (index:any) => {
    setLiked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Upcoming tours
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Where the <span className="italic font-serif">next adventure</span> begins!
          </h2>

          <p className="text-gray-500 mt-2">
            Plan Ahead with Upcoming Departures – Limited Slots
          </p>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {tours.map((tour, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-3 group">

                {/* Image */}
                <div className="relative overflow-hidden rounded-xl">

                  <Image
                    src={tour.img}
                    alt={tour.title}
                    className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  {/* View Details Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <button className="bg-[#6072816c] text-white px-4 py-1 rounded-[20px] text-sm shadow">
                      View Details
                    </button>
                  </div>

                  {/* Heart Icon */}
                  <button
                    onClick={() => toggleLike(index)}
                    className={`absolute top-3 right-3 p-2 rounded-full shadow transition
                      ${liked[index] ? "bg-[#007595] text-white" : "bg-white text-gray-700"}
                    `}
                  >
                    <Heart size={18} fill={liked[index] ? "white" : "none"} />
                  </button>

                </div>

                {/* Content */}
                <div className="pt-4 pb-2">
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                    {tour.badge}
                  </span>

                  <h3 className="font-semibold mt-2">{tour.title}</h3>

                  <p className="text-gray-500 text-sm">
                    Starting from {tour.price} / per person
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}