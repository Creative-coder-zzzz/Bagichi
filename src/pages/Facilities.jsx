import React from "react";
import { facilities } from "../config";
import {
  Car,
  Wifi,
  Coffee,
  ShieldCheck,
  Tv,
  BedDouble,
  MapPin,
  Phone,
  Home,
} from "lucide-react";

import hero from "../assets/images/hero.jpg"; // Background Image

const icons = {
  Car,
  Wifi,
  Coffee,
  ShieldCheck,
  Tv,
  BedDouble,
  MapPin,
  Phone,
  Home,
};

function Facilities() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F4694C]">
          Our Facilities
        </h1>
        <h1 className="text-2xl md:text-3xl font-semibold text-[#e6a99c]">
          Where Luxury meets Serenity
        </h1>
        <p className="text-lg text-gray-200 mt-3">
          Experience top-tier hospitality with modern amenities tailored for
          your comfort.
        </p>

        {/* Facilities Grid */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {facilities.map((facility) => {
            const Icon = icons[facility.icon];
            return (
              <div
                key={facility.id}
                className="flex flex-col items-center p-4 bg-white bg-opacity-20 rounded-lg shadow-lg"
              >
                <Icon size={40} className="text-[#F4694C]" />
                <p className="mt-2 text-lg font-semibold text-black">
                  {facility.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Facilities;
