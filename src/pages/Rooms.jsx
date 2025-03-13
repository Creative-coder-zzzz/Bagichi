import React from "react";
import { rooms } from "../config";
import StarRating from "../config/utilsFunc";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Rooms() {
  return (
    <div className="p-5">
      <div>
        <h1 className="text-4xl font-[MontSerrat] text-center">
          Discover Your Perfect Stay: Elegant & Cozy Rooms Await
        </h1>
        <p className="text-center mt-6">
          Experience comfort and luxury in our thoughtfully designed rooms,
          offering breathtaking views, modern amenities, and a serene retreat for a
          perfect stay.
        </p>
      </div>

      <div className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full"
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id}>
              <div className="rounded-lg shadow-lg p-4 bg-white">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <h2 className="text-xl font-bold mt-4">{room.title}</h2>
                <div className="mt-3 flex items-center gap-6">
                  <h1>Ratings</h1>
                  <StarRating rating={room.rating} />
                </div>
                <p className="text-gray-600 mt-2">{room.description}</p>
                <button className="mt-3 p-2 bg-[#F4694C] rounded-lg text-white hover:text-black hover:bg-white hover:border-2 duration-300">
                  Book Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Rooms;
