import React from 'react'
import { activities } from '../config'

function Activities() {
  return (
    <div className="p-10">
    <div>
      <h1 className="text-4xl font-[MontSerrat] text-center">
        Unforgettable Adventures Await: Experience the Best Activities
      </h1>
      <p className="text-center mt-6">
        Engage in thrilling adventures, explore nature, and make the most of your stay with
        these exciting activities.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {activities.map((activity) => (
        <div key={activity.id} className="rounded-lg shadow-lg bg-white">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-60 object-cover"
          />
          <div className='p-4'>
          <h2 className="text-xl font-bold mt-4">{activity.title}</h2>
          <p className="text-gray-600 mt-2">{activity.description}</p>
          <button className="mt-3 p-2 bg-[#F4694C] rounded-lg text-white hover:text-black hover:bg-white hover:border-2 duration-300">
            Explore More
          </button>
        </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Activities
