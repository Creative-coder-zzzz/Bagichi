import React, { useState } from "react";
import { gallery } from "../config";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full p-5">
      <h1 className="text-center text-4xl font-bold font-[Montserrat]">
        Gallery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10">
        {gallery.map((item, index) => (
          <div key={index} className="cursor-pointer">
            <img
              src={item.image}
              alt={item.text}
              className="object-cover w-full h-full rounded-lg hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(item.image)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
