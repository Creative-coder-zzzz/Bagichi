import React from "react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../config";
function Testimonials() {
  return (
    <div>
      <div className="">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-[MontSerrat]">
            What People Say About Us
          </h1>
          <p className="text-gray-600 mt-2">Hear from our happy guests!</p>
        </div>

        <div className="w-full flex justify-center">
          <Swiper
            slidesPerView={1.5}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Autoplay]}
            className="w-full max-w-6xl"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="flex justify-center">
                <div className="relative p-6  rounded-xl shadow-lg bg-white text-center transform transition duration-300 hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-[#F4694C]"
                  />
                  <h2 className="text-lg font-semibold mt-4 text-[#F4694C]">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 mt-2 italic">"{item.message}"</p>
                  <h3 className="text-gray-900 font-bold mt-4">{item.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
