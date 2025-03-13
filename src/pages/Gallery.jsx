import React from 'react'
import { gallery } from '../config'

export default function Gallery() {
  return (
    <div className='w-full p-10'>
      <h1 className='text-center text-4xl font-bold font-[Montserrat]'>Gallery</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {gallery.map((items, index) => (
          <div key={index}>
            <img src={items.image} alt={items.text} className='object-cover w-full h-full' />
          </div>
        ))}
      </div>
    </div>
  )
}
