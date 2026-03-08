"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center pt-6 px-4">
      <nav className="w-full max-w-7xl flex items-center justify-between  px-6 py-3">
        
        {/* Logo */}
        <div className="flex  p-2 rounded-full items-center gap-2 text-white font-semibold text-lg">
          📍 WayFare
        </div>

        {/* Desktop Menu */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3">
            <ul className="hidden md:flex items-center gap-6 text-white text-sm ">
          <li><Link href="/" className="bg-white text-black px-4 py-2 rounded-full">Home</Link></li>
          <li><Link href="#">Destination</Link></li>
          <li><Link href="#">Experiences</Link></li>
          <li><Link href="#">Tours & Packages</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Contact</Link></li>
          <li><Link href="#">FAQs</Link></li>
        </ul>
        </div>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium flex items-center gap-2">
            Login ↗
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-xl shadow-lg md:hidden">
          <ul className="flex flex-col text-black p-4 gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">Destination</Link></li>
            <li><Link href="#">Experiences</Link></li>
            <li><Link href="#">Tours & Packages</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">FAQs</Link></li>

            <button className="bg-black text-white py-2 rounded-lg">
              Login
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}