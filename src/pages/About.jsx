import React from 'react';
import about from '../assets/images/about.png';
import Gallery from './Gallery';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
  return (
    <div>
      {/* About Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 w-full min-h-screen p-6 lg:p-20 gap-10 items-center'>
        
        {/* Image Section */}
        <div className='flex items-center justify-center'>
          <img src={about} alt="Pahuna Retreat" className='w-full h-auto max-w-lg md:max-w-full rounded-lg shadow-lg' />
        </div>

        {/* Text Section */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[Montserrat]'>
            We are The Pahuna Retreat
          </h1>
          <p className='text-sm md:text-lg lg:text-xl mt-4 max-w-lg'>
            Pahuna Retreat is a premium hotel located in the heart of Sikkim, surrounded by breathtaking tourist attractions. 
            We offer top-notch services to ensure a comfortable and memorable stay. Whether you seek relaxation or adventure, 
            Pahuna Retreat provides the perfect getaway where you can enjoy every moment to the fullest.
          </p>

          <button className='mt-6 p-3 px-6 bg-[#F4694C] rounded-lg text-white hover:text-black hover:bg-white hover:border-2 duration-300 border-[#F4694C]'>
            Contact Us
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <h1 className='text-center text-3xl md:text-4xl font-[Montserrat] mt-10'>Browse our Pics</h1>
      <Gallery />

      {/* See More Button */}
      <div className="flex justify-center mt-6">
        <button className='p-3 px-6 rounded-lg text-black border-2 border-black duration-300 hover:bg-[#F4694C] hover:text-white hover:border-white' onClick={()=> navigate('/gallery')}>
          See More
        </button>
      </div>
    </div>
  );
}

export default About;
