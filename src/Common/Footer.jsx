import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Site Map */}

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-[#F4694C]">Contact Us</h2>
          <div className="mt-4 space-y-3">
            <a href="tel:+918901030552 " className="flex items-center gap-2">
              <Phone size={20} className="text-[#F4694C]" /> +91 8901030552
            </a>
            <a
              href="https://maps.app.goo.gl/pZcaB922wdxkRM5u9"
              target="blank"
              className="flex items-center gap-2 underline"
            >
              <MapPin size={20} className="text-[#F4694C]" /> Farrukhnagar,
              Haryana, India
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-semibold text-[#F4694C]">Follow Us</h2>
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61580657528622"
              className="hover:text-[#F4694C] transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/bagichi123/"
              className="hover:text-[#F4694C] transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@BAGICHIFN"
              className="hover:text-[#F4694C] transition"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-gray-400 text-sm flex flex-col">
        {new Date().getFullYear()} &copy;All Rights Reserved.
      </div>
      <p className="text-sm text-center text-gray-400">
        Developed by Sandesh Adhikari
      </p>
    </footer>
  );
}

export default Footer;
