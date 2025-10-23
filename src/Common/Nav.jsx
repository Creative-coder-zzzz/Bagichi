import React, { useState } from "react";
import { navElements } from "../config";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import pahuna from "../assets/images/pahuna.png";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <marquee>
        {/* 🔹 Top Header - Responsive Fix */}
        <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm p-1  text-gray-700">
          <p className="flex items-center  sm:gap-2 text-center">
            <p>For booking</p>
            <FaLocationPin className="text-red-500" />
            <span className="truncate">Bagichi Vatika, Farrukhnagar</span>
          </p>

          <p className="flex gap sm:gap-2">
            {" "}
            Contact :
            <CiPhone className="text-green-500" />
            <span className="whitespace-nowrap">
              {" "}
              <a href="tel:+91 8901030552" className="underline">
                +91 8901030552
              </a>
            </span>
          </p>
        </div>
      </marquee>

      {/* 🔹 Main Navbar */}
      <div className="bg-[#2f0202] text-gray-100 p-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="p-2 font-extrabold text-3xl text-red-600 font-[Poppins]">
            BAGICHI
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 justify-center items-center">
            {navElements.map((items, index) => (
              <Link
                key={index}
                to={items.path}
                className="text-sm lg:text-lg whitespace-nowrap hover:text-[#C0392B] duration-300"
              >
                {items.name}
              </Link>
            ))}
          </div>

          {/* Contact & Booking */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              className="border-2 px-4 py-2 lg:px-6 lg:py-3 text-lg rounded-sm hover:bg-[#FFA488] hover:text-[#C0392B] duration-300 whitespace-nowrap"
              onClick={() =>
                window.open(
                  "https://wa.me/+918901030552?text=" +
                    encodeURIComponent("I want to book Vatika"),
                  "_blank"
                )
              }
            >
              Book Now
            </button>

            <div className="flex items-center gap-3">
              <Phone size={20} />
              <span className="text-lg whitespace-nowrap">
                {" "}
                <a href="tel:+91 8901030552" className="underline">
                  +91 8901030552
                </a>
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-25 left-0 w-full bg-[#F4694C] p-4 flex flex-col items-center space-y-5 md:hidden z-20">
            {navElements.map((items, index) => (
              <Link
                key={index}
                to={items.path}
                className="text-white text-sm hover:text-[#C0392B] duration-300"
                onClick={() => setIsOpen(false)}
              >
                {items.name}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span className="text-sm">
                {" "}
                <a href="tel:+91 8901030552" className="underline">
                  +91 8901030552
                </a>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
