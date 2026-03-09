"use client"

import image1 from "../../../public/assest/travel/travel1.jpg";
import image2 from "../../../public/assest/travel/top-packages2.jpg";
import image3 from "../../../public/assest/travel/top-packages3.jpg";
import image4 from "../../../public/assest/travel/top-packages4.jpg";
import image5 from "../../../public/assest/travel/top-packages5.jpg";
import image6 from "../../../public/assest/travel/top-packages6.jpg";

import TravelCard from "@/components/TravelCard/TravelCard";

export default function Travel() {
  const travelData = [
    {
      image: image1,
      title: "Maldives Experiences",
      price: "$2,799",
      rating: 4.8,
      tag: "Resort Paradise",
      days: "8 Days / 7 Nights",
      features: [
        "Luxury water villas",
        "Snorkeling & sunset cruises",
      ],
    },
    {
      image: image2,
      title: "Tokyo & Kyoto Explore",
      price: "$2,099",
      rating: 4.5,
      tag: "City Break",
      days: "7 Days / 6 Nights",
      features: [
        "Historic temples & shrines",
        "Tokyo street food tours",
      ],
    },
    {
      image: image3,
      title: "Swiss Alps Lakes Getaway",
      price: "$2,899",
      rating: 4.9,
      tag: "Adventure",
      days: "9 Days / 8 Nights",
      features: [
        "Alpine mountain trains",
        "Lake cruises & scenic villages",
      ],
    },
    {
      image: image4,
      title: "Morocco Desert & Medina",
      price: "$1,299",
      rating: 4.3,
      tag: "Desert Adventure",
      days: "9 Days / 8 Nights",
      features: [
        "Sahara camel ride",
        "Boutique riads & souks",
      ],
    },
    {
      image: image5,
      title: "New York Roadtrip",
      price: "$1,999",
      rating: 4.6,
      tag: "City Adventure",
      days: "6 Days / 5 Nights",
      features: [
        "Times Square & Broadway",
        "Central Park cycling",
      ],
    },
    {
      image: image6,
      title: "Arctic Cruise",
      price: "$3,500",
      rating: 4.7,
      tag: "Luxury Adventure",
      days: "10 Days / 9 Nights",
      features: [
        "Northern lights viewing",
        "Iceberg exploration cruise",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-10">
        Discover <span className="text-blue-500">trips</span> tailored to how you{" "}
        <span className="italic">love</span> to travel.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelData.map((trip, index) => (
          <TravelCard key={index} {...trip} />
        ))}
      </div>
    </div>
  );
}