import React, { useState } from "react";
import About from "./About";

import WhyUs from "./WhyUs";
import Hero from "./Hero";

import Testimonials from "./Testimonials";
import Facilities from "./Facilities";
import Blogs from "./Blogs";
import ContactUs from "./ContactUs";
import SocialTab from "./Social";

function Home() {
  return (
    <div className="w-full">
      <div className="w-full bg-white">
        <Hero />
      </div>
      <div className="w-full bg-white">
        <About />
      </div>

      <div className="w-full bg-white mt-10">
        <WhyUs />
      </div>

      <div className="w-full  bg-white mt-20">
        <Facilities />
      </div>

      <div className="w-full bg-white mt-10">
        <Testimonials />
      </div>

      <div className="w-full min-h-screen bg-white mt-20">
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
