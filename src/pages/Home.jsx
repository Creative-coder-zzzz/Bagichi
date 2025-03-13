import React, { useState } from "react";
import About from "./About";

import WhyUs from "./WhyUs";
import Hero from "./Hero";
import Rooms from "./Rooms";
import Activities from "./Activities";
import Testimonials from "./Testimonials";
import Facilities from "./Facilities";
import Blogs from "./Blogs";
import ContactUs from "./ContactUs";

function Home() {
  return (
    <div className="w-full">
        <div className="w-full min-h-screen bg-white">
        <Hero />
      </div>
      <div className="w-full bg-white">
        <About />
      </div>
   
      <div className="w-full bg-white mt-10">
        <WhyUs/>
      </div>

      <div className="w-full min-h-screen bg-white mt-20">
        <Rooms/>
      </div>

      <div className="w-full  bg-white mt-10">
        <Activities/>
      </div>

      
      <div className="w-full bg-white mt-10">
        <Testimonials/>
      </div>

      
      <div className="w-full min-h-screen bg-white mt-20">
        <Facilities/>
      </div>

      <div className="w-full min-h-screen bg-white mt-20">
        <Blogs/>
      </div>

      <div className="w-full min-h-screen bg-white mt-20">
        <ContactUs/>
      </div>

    </div>
  );
}

export default Home;
