import React from "react";
import { blogs } from "../config";
import hero from "../assets/images/hero2.jpg";

function Blogs() {
  return (
    <div className="w-full">
      {/* Top Banner Image */}
      <div
        className="w-full h-[50vh] relative flex items-center justify-center text-white text-4xl font-bold"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black Overlay  */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10">
          <h1>Explore Our Latest Blogs</h1>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-500 text-sm mt-1">
                  By {blog.author} | {blog.date}
                </p>
                <p className="text-gray-700 mt-3">{blog.description}</p>
                <button className="mt-4 px-4 py-2 bg-[#F4694C] text-white rounded-lg hover:bg-black transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
