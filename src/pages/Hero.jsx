import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { slides } from "../config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from 'react-router-dom';

function Hero() {
    const [swiperRef, setSwiperRef] = useState(null);
    const navigate = useNavigate();
  return (
    <div>
       <div className="relative w-full h-screen max-h-[700px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={setSwiperRef}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 4000, 
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Original Text Overlay (No Changes) */}
              <div className="absolute inset-0 flex left-4 items-center text-center p-6">
                <div className="flex flex-col">
                  <h2 className="text-white text-start text-3xl md:text-6xl font-[Montserrat]">
                    {slide.text}
                  </h2>
                  <p className="text-3xl md:text-6xl text-left text-white font-semibold">
                    {slide.description}
                  </p>
                  <p className="text-left text-white text-bold text-xl">{slide.para}</p>
                </div>

                {slide.button ? (
                  <button className="border-2 p-4 rounded-sm bg-[#F4694C] text-white duration-300 mx-4 text-xl" onClick={()=> navigate('/book')}>
                    Book Now
                  </button>
                ) : null}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2">
          <ChevronLeft size={32} />
        </button>

        <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  )
}

export default Hero
