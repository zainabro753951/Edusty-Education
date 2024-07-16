import React from 'react'

const Offer = () => {
  return (
    <div className='text-center my-36'>
        <h1>Our Program</h1>
        <h1 className='text-4xl font-medium mb-6'>What we offer</h1>
        <div className='grid grid-cols-3 gap-5'>
        <div className='hover relative  overflow-hidden cursor-pointer'>
                <img className='w-[100%] h-[100%] rounded-xl' src="/img/Offers/offer1.webp" alt="" />
                <div className='absolute rounded-xl bottom-[0px] flex justify-center items-center w-full h-[0] transition-all duration-[1s]  text-white ease-in-out bg-[#080154]/70' id='hoverable'>
                    <h1 className='h-0'> Bachlors Degree</h1>
                </div>
            </div>
            <div className='hover relative  overflow-hidden cursor-pointer'>
                <img className='w-full h-full rounded-xl' src="/img/Offers/offer2.jpg" alt="" />
                <div className='absolute rounded-xl bottom-[0px] flex justify-center items-center w-full h-[0] transition-all duration-[1s]  text-white ease-in-out bg-[#080154]/70' id='hoverable'>
                    <h1 className='h-0'> Bachlors Degree</h1>
                </div>
            </div>
            <div className='hover relative  overflow-hidden cursor-pointer'>
                <img className='w-full h-full rounded-xl' src="/img/Offers/offer3copy.jpeg" alt="" />
                <div className='absolute rounded-xl bottom-[0px] flex justify-center items-center w-full h-[0] transition-all duration-[1s] text-white ease-in-out bg-[#080154]/70' id='hoverable'>
                    <h1 className='h-0'> Bachlors Degree</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer