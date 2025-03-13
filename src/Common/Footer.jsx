import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Site Map */}
        <div>
          <h2 className="text-2xl font-semibold text-[#F4694C]">Site Map</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="/" className="hover:text-[#F4694C] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#F4694C] transition">About Us</a></li>
            <li><a href="/rooms" className="hover:text-[#F4694C] transition">Rooms</a></li>
            <li><a href="/facilities" className="hover:text-[#F4694C] transition">Facilities</a></li>
            <li><a href="/contact" className="hover:text-[#F4694C] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-[#F4694C]">Contact Us</h2>
          <div className="mt-4 space-y-3">
            <p className="flex items-center gap-2">
              <Mail size={20} className="text-[#F4694C]" /> contact@pahunaretreat.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={20} className="text-[#F4694C]" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={20} className="text-[#F4694C]" /> Gangtok, Sikkim, India
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-semibold text-[#F4694C]">Follow Us</h2>
          <div className="mt-4 flex gap-4">
            <a href="#" className="hover:text-[#F4694C] transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-[#F4694C] transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-[#F4694C] transition">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-gray-400 text-sm flex flex-col">
        Powered {new Date().getFullYear()} Darjeeling infotech. All Rights Reserved.
      </div>
        <p className="text-sm text-center text-gray-400">developed by sandesh Adhikari</p>
    </footer>
  );
}

export default Footer;
