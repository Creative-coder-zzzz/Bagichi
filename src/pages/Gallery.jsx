import React from 'react'
import { gallery } from '../config'

export default function Gallery() {
  return (
    <div className='w-full p-10'>
      {/* <h1 className='text-center text-4xl text-bold font-[Montserrat] font-semibold'>Gallery</h1> */}

      <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2'>
       {
        gallery.map((items,index)=> (
            <div>
                <img src={items.image} alt={items.text} className='object-cover aspect-square'/>
            </div>
        ))
       }
      </div>
    </div>
  )
}
