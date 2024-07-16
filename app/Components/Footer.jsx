import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center px-24 py-10 bg-blue-950 text-white '>
        <p>&copy;2024 Edusty. All Right Reserved</p>
        <div className='flex justify-between items-center w-[30%]'>
            <p>Terms and Conditions</p>
            <p>Privacy & Policy</p>
        </div>
    </div>
  )
}

export default Footer