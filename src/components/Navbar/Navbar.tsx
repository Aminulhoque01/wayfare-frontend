"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoWhite from "../../../public/assest/logo/logo.svg";
import logoBlack from "../../../public/assest/logo/logo-black.svg";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={scrolled ? logoBlack : logoWhite}
            width={132}
            height={38}
            alt="logo"
          />
        </div>

        {/* Desktop Menu */}
        <div
          className={`p-3 ${
            scrolled
              ? "bg-white  "
              : "bg-white/40 backdrop-blur-md   rounded-full"
          }`}
        >
          <ul className="hidden xl:flex items-center gap-2">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 transition-colors ${
                    scrolled
                      ? `text-black hover:bg-[#007595] rounded-md hover:text-white ${
                          index === 0 ? "bg-[#007595] text-white" : ""
                        }`
                      : "text-white hover:bg-white hover:text-black rounded-full"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Login */}
        <div className="hidden xl:block">
          <button
            className={`px-5 py-2 rounded-full font-medium flex items-center gap-2 transition ${
              scrolled
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Login <MdArrowOutward />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`xl:hidden text-2xl ${
            scrolled ? "text-black" : "text-white"
          }`}
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
                <Link
                  href={item.href}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
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