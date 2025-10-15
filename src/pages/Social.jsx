import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

export default function SocialTab() {
  return (
    <div className="fixed right-5 top-2/3 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61580657528622"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-[#3b5998] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <Facebook size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/bagichi123/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <Instagram size={24} />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@BAGICHIFN"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-[#FF0000] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <Youtube size={24} />
      </a>

      <button
        onClick={() =>
          window.open(
            "https://wa.me/+918901030552?text=" +
              encodeURIComponent("I want to know more about Bagichi Vatika"),
            "_blank"
          )
        }
        className="w-10 h-10 flex items-center justify-center bg-[#00ff00] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
}
