import { Phone, Instagram, MessageCircle, Facebook, ArrowUpRight } from "lucide-react";
 
import logo from "../../../public/assest/logo/logo.svg"
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="relative text-white">

      {/* Background Image */}
      <div
    className="absolute inset-0 bg-cover bg-center"
        style={{
        backgroundImage: "url('/assest/travel/top-packages5.jpg')",
        }}
    />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#043646ea]"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Image src={logo} alt="logo"/>
            </h2>

            <p className="text-sm mt-2 text-gray-200">
              Travel beyond destinations
            </p>

            <div className="flex gap-3 mt-6">
              <div className="p-2 bg-white/20 rounded-full hover:bg-white/30">
                <Phone size={18} />
              </div>
              <div className="p-2 bg-white/20 rounded-full hover:bg-white/30">
                <Instagram size={18} />
              </div>
              <div className="p-2 bg-white/20 rounded-full hover:bg-white/30">
                <MessageCircle size={18} />
              </div>
              <div className="p-2 bg-white/20 rounded-full hover:bg-white/30">
                <Facebook size={18} />
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <ul className="space-y-2 text-gray-200 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">My profile</li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="font-semibold mb-4">Countries</h3>

            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Asia</li>
              <li>Europe</li>
              <li>North America</li>
              <li>Africa</li>
              <li>Oceania</li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="font-semibold mb-4">Packages</h3>

            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Bali uncovered</li>
              <li>Tokyo & Kyoto Explorer</li>
              <li>Swiss Alps Lakes Getaway</li>
              <li>Maldives Experience</li>
              <li>Morocco Desert & Medina</li>
              <li>New York Roadtrip</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>

            <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full text-black outline-none"
              />

              <button className="p-3 bg-gray-100 hover:bg-gray-200">
                <ArrowUpRight className="text-black" size={20} />
              </button>
            </div>

            <p className="text-xs text-gray-300 mt-3">
              By subscribing you agree to our
              <span className="underline ml-1">Privacy Policy</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">

          <p>© 2026 Wayfare. All rights reserved.</p>

          <div className="flex gap-6">
            <a className="hover:text-white">Terms & conditions</a>
            <a className="hover:text-white">Privacy Policy</a>
            <a className="hover:text-white">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}