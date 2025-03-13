import React, { useState } from "react";
import { navElements } from "../config";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import pahuna from '../assets/images/pahuna.png'
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between text-sm p-2">
        <p className="flex items-center gap-2"> <FaLocationPin />Gangtok,near deorali,the pahuna retreat</p>
        <p className="flex items-center gap-2"><MdEmail/> sandeshadhikari2003@gmail.com</p>
        <p className="flex items-center gap-2"><CiPhone /> +918927678560</p>
      </div>

    <div className="bg-[#F4694C] text-gray-100 p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src={pahuna} alt="" className="w-50"/>

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

        {/* Contact & Booking (Hidden on Medium, Visible on Large) */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="border-2 px-4 py-2 lg:px-6 lg:py-3 text-lg rounded-sm hover:bg-[#FFA488] hover:text-[#C0392B] duration-300 whitespace-nowrap" onClick={()=> navigate('/book')}>
            Book Now
          </button>
          <div className="flex items-center gap-3">
            <Phone size={20} />
            <span className="text-lg whitespace-nowrap">+91 89485469</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#F4694C] p-4 flex flex-col items-center space-y-5 md:hidden z-10">
          {navElements.map((items, index) => (
            <Link
              key={index}
              to={items.path}
              className="text-white text-sm hover:text-[#C0392B] duration-300"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {items.name}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <Phone size={18} />
            <span className="text-sm">+91 89485469</span>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Nav;
