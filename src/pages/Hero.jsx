import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { slides } from "../config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [swiperRef, setSwiperRef] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen md:max-h-[600px] max-h-[400px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={setSwiperRef}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-left space-y-4">
              <h2 className="text-[#FFD700] text-2xl md:text-5xl font-bold drop-shadow-lg">
                {slide.text}
              </h2>
              <p className="text-white text-3xl md:text-6xl font-extrabold drop-shadow-lg">
                {slide.description}
              </p>
              <p className="text-white/90 text-sm md:text-lg max-w-lg drop-shadow-md">
                {slide.para}
              </p>

              {slide.button && (
                <button
                  onClick={() =>
                    window.open("https://wa.me/+918901030552", "_blank")
                  }
                  className="mt-4 md:mt-6 px-6 py-3 md:px-8 md:py-4 bg-[#751818] text-white font-semibold rounded-md shadow-lg hover:bg-[#A42C2C] transition-all duration-300 max-w-[200px] text-center"
                >
                  Book Now
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full transition">
        <ChevronLeft size={24} className="text-white" />
      </button>

      <button className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2  p-2 rounded-full transition">
        <ChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
}

export default Hero;
