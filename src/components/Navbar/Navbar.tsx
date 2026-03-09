"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assest/logo/logo.svg";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Destination", href: "#" },
    { name: "Experiences", href: "#" },
    { name: "Tours & Packages", href: "#" },
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
    { name: "FAQs", href: "#" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4 bg-transparent">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} width={132} height={38} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-full p-3">
        <ul className="hidden xl:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        </div>

        {/* Desktop Login */}
        <div className="hidden xl:block">
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition">
            Login <MdArrowOutward />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg xl:hidden">
          <ul className="flex flex-col text-black p-4 gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="block px-4 py-2 rounded-lg hover:bg-gray-100">
                  {item.name}
                </Link>
              </li>
            ))}
            <button className="bg-black text-white py-2 rounded-lg w-full">
              Login
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}