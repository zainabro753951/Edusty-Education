import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Campus = () => {
  return (
    <div className='text-center mt-28'>
        <h1 className='text-blue-800 uppercase font-semibold'>Gallary</h1>
        <h1 className='text-4xl font-semibold'>Campus Photos</h1>
        <div className='grid grid-cols-4 mt-16 mb-5 auto-rows-[250px] gap-2'>
            <div>
                <img className='w-full h-full object-cover rounded-xl' src="img/Campus/campus1.jpg" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover rounded-xl' src="img/Campus/campus2.jpg" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover rounded-xl' src="img/Campus/campus3.webp" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover rounded-xl' src="img/Campus/campus4.jpg" alt="" />
            </div>
        </div>
        <a className="flex justify-center items-center mx-72 text-xl bg-blue-800 text-white gap-3 rounded-full my-4 py-2 px-6" href="#">See More Here <FaArrowRightLong/></a>
    </div>
  )
}

export default Campus