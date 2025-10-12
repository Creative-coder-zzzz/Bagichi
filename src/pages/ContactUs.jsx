import React from "react";
import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side - Google Map */}
        <div className="w-full">
          <h1 className="text-4xl font-semibold text-[#F4694C] mb-6">
            Find Us Here
          </h1>
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.221218278194!2d76.82503927510984!3d28.442747075768988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6b00513999bb%3A0x4330b8597d78e9f7!2sBagichi%20vatika!5e0!3m2!1sen!2sin!4v1760258782187!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side - WhatsApp Button & Contact Info */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col gap-8 mt-20">
          <div>
            <h1 className="text-4xl font-semibold text-[#F4694C] mb-6">
              Get In Touch
            </h1>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+918901030552"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white py-3 rounded-lg text-lg hover:bg-green-600 transition p-5"
            >
              <FaWhatsapp size={24} />
              Contact Us on WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#F4694C]">
              Contact Details
            </h2>
            <p className="flex items-center mt-3 gap-2">
              <Phone size={20} className="text-[#F4694C]" /> Rishi saini: +91
              9991316082
            </p>
            <p className="flex items-center mt-2 gap-2">
              <Phone size={20} className="text-[#F4694C]" /> Vikas saini: +91
              8901030552
            </p>
            <p className="flex items-center mt-2 gap-2">
              <Phone size={20} className="text-[#F4694C]" /> Harish saini: +91
              8053979762
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
