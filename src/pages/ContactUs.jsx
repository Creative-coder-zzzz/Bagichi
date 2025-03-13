import React from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";

function ContactUs() {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Left Side - Google Map */}
        <div className="w-full">
          <h1 className="text-4xl font-semibold text-[#F4694C] mb-6">Find Us Here</h1>
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <iframe
              title="Google Map"
              className="w-full h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.018394164192!2d88.61147908871816!3d27.33143378728907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a523cd1dfb0f%3A0xfac6a37fa6a36a47!2sGangtok%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1710000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-semibold text-[#F4694C] mb-6">Get In Touch</h1>
          
          <form className="space-y-4">
            <div className="flex items-center border p-3 rounded-md">
              <User size={20} className="text-[#F4694C] mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full outline-none bg-transparent"
                required
              />
            </div>

            <div className="flex items-center border p-3 rounded-md">
              <Mail size={20} className="text-[#F4694C] mr-3" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full outline-none bg-transparent"
                required
              />
            </div>

            <div className="flex items-center border p-3 rounded-md">
              <MapPin size={20} className="text-[#F4694C] mr-3" />
              <input
                type="text"
                placeholder="Your Address"
                className="w-full outline-none bg-transparent"
              />
            </div>

            <div className="border p-3 rounded-md">
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full outline-none bg-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F4694C] text-white py-2 rounded-lg text-lg hover:bg-black transition"
            >
              Submit
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#F4694C]">Contact Details</h2>
            <p className="flex items-center mt-3 gap-2">
              <Phone size={20} className="text-[#F4694C]" /> Manager: +91 98765 43210
            </p>
            <p className="flex items-center mt-2 gap-2">
              <Phone size={20} className="text-[#F4694C]" /> Hotel Reception: +91 87654 32109
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;
