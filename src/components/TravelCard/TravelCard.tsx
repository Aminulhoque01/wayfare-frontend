/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Heart, Star, Check } from "lucide-react";
import { useState } from "react";
 

interface TravelCardProps {
  image: any;
  title: string;
  price: string;
  days: string;
  features: string[];
  rating?: number;
  tag?: string;
}

export default function TravelCard({
  image,
  title,
  price,
  days,
  features,
  rating = 4.5,
  tag = "Adventure",
}: TravelCardProps) {
    const [liked, setLiked] = useState(false);
  return (
    <div className="w-[360px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-3">
      
      {/* Image */}
      <div className="relative h-[220px] w-full rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Heart Icon */}
        <button
          onClick={() => setLiked(!liked)}
          className={`absolute top-3 left-3 rounded-full p-2 shadow transition
            ${liked ? "bg-[#007595]" : "bg-white"}
          `}
        >
          <Heart
            size={18}
            className={`transition ${
              liked ? "text-white fill-white" : "text-gray-600"
            }`}
          />
        </button>

        {/* Tag */}
        <span className="absolute top-3 right-3 bg-white px-3 py-1 text-xs rounded-full shadow text-gray-700">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="pt-4 pb-2 px-1">

        {/* Trending */}
        <span className="text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full">
          Trending now
        </span>

        {/* Title + Rating */}
        <div className="flex justify-between items-center mt-2">
          <h3 className="font-semibold text-lg">{title}</h3>

          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            {rating}
          </div>
        </div>

        {/* Price */}
        <p className="font-bold text-lg mt-2">{price}</p>

        {/* Days */}
        <p className="text-gray-500 text-sm flex items-center gap-2 mt-2">
          <Check size={14} className="text-gray-400" />
          {days}
        </p>

        {/* Features */}
        <div className="mt-2 space-y-1">
          {features.map((item, i) => (
            <p key={i} className="text-gray-500 text-sm flex items-center gap-2">
              <Check size={14} className="text-gray-400" />
              {item}
            </p>
          ))}
        </div>

        {/* Button */}
        <button className="mt-4 text-blue-500 font-medium text-sm hover:underline">
          View Details
        </button>
      </div>
    </div>
  );
}