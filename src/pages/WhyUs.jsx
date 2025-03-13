import React from "react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { whyUs } from "../config";

function WhyUs() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="p-10 font-[MontSerrat] w-full text-center text-4xl">
          Why choose us?
        </h1>
        <p className="font-semibold text-center">
          The Pahuna Retreat | Gangtok | East Sikkim
        </p>

        <div className="w-full mt-10">
          <Swiper
            slidesPerView={1.2} 
            breakpoints={{
              640: { slidesPerView: 1.5 }, 
              1024: { slidesPerView: 2.5 }, 
              1280: { slidesPerView: 3 }, 
            }}
            loop={true}
            spaceBetween={20}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full max-w-none" 
          >
            {whyUs.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="p-6  border border-[#F4694C] rounded-lg shadow-lg bg-white text-center min-h-50">
                  <div className="flex justify-center">
                    <item.icon size={40} className="text-[#F4694C]" />
                  </div>
                  <h1 className="text-xl font-semibold mt-4">{item.title}</h1>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="text-lg font-semibold mt-10 text-center">Choose The Pahuna Retreat for best hotel experience</p>
      </div>
    </div>
  );
}

export default WhyUs;
