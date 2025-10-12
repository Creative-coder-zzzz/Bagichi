import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { slides } from "../config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

function Hero() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="relative w-full h-screen md:max-h-[700px] max-h-[700px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={setSwiperRef}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
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
              <h2 className="text-[#FFD700] text-3xl font-bold md:text-5xl  drop-shadow-lg">
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

      {/* ✅ Custom Navigation Buttons */}
      <button className="prev-btn absolute top-1/2 left-4 -translate-y-1/2 z-10 p-2 md:p-3">
        <ChevronLeft className="text-white w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button className="next-btn absolute top-1/2 right-4 -translate-y-1/2 z-10 p-2 md:p-3">
        <ChevronRight className="text-white w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
}

export default Hero;
