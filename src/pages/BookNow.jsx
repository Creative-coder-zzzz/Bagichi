import React from "react";
import hero from "../assets/images/hero3.jpg"; // 

function BookNow() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full h-[50vh] flex items-center justify-center text-white text-4xl font-bold relative"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative z-9">Book Your Stay</h1>
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 mt-10 rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-[#F4694C]">
          Fill in Your Details
        </h2>
        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border p-3 rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-3 rounded-md"
              required
            />
          </div>

          {/* Check-in Date */}
          <div className="flex flex-col">
            <label className="font-semibold">Check-in Date</label>
            <input type="date" className="border p-3 rounded-md" required />
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col">
            <label className="font-semibold">Check-out Date</label>
            <input type="date" className="border p-3 rounded-md" required />
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="font-semibold">Number of Guests</label>
            <input
              type="number"
              min="1"
              placeholder="Enter number of guests"
              className="border p-3 rounded-md"
              required
            />
          </div>

          {/* Room Type */}
          <div className="flex flex-col">
            <label className="font-semibold">Room Type</label>
            <select className="border p-3 rounded-md">
              <option>Deluxe Room</option>
              <option>Suite</option>
              <option>Family Room</option>
              <option>Standard Room</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-[#F4694C] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-black transition"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookNow;
