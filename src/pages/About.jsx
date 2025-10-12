import React from "react";
import about from "../assets/images/about.jpg";
import Gallery from "./Gallery";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-3xl md:text-5xl mt-10  text-center lg:text-6xl font-bold tracking-tight font-[Montserrat]">
        About Us
      </h1>
      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen p-6 lg:p-20 gap-10 items-center">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src={about}
            alt="Bagichi Vatika"
            className="w-full h-auto max-w-lg md:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-2xl md:text-4xl mt-2 font-semibold text-[#751818]">
            Bagichi Vatika
          </p>
          <p className="text-sm md:text-lg lg:text-xl mt-4 max-w-lg text-gray-800">
            Bagichi Vatika is the premier and largest marriage garden in
            Farrukhnagar, Gurugram. Spread across a sprawling lush green lawn,
            our venue is adorned with a wide variety of plants and natural
            beauty, creating a perfect backdrop for your special day. We feature
            a 6,000 sq. ft. dining hall and can accommodate over 3,000 guests,
            making us one of the best choices for grand weddings.
          </p>
          <p className="text-sm md:text-lg lg:text-xl mt-2 max-w-lg text-gray-800">
            Our venue also provides separate elegant rooms for the bride and
            groom, sophisticated washrooms, and ample parking space to ensure a
            seamless and comfortable experience for you and your guests. At
            Bagichi Vatika, we combine luxury, space, and nature to make every
            wedding unforgettable.
          </p>

          <button className="mt-6 p-3 px-6 bg-[#751818] rounded-lg text-white hover:text-[#751818] hover:bg-white hover:border-2 duration-300 border-[#751818]">
            Contact Us
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <h1 className="text-center text-3xl md:text-4xl font-[Montserrat] mt-10">
        Browse Our Pictures
      </h1>
      <Gallery />

      {/* See More Button */}
    </div>
  );
}

export default About;
