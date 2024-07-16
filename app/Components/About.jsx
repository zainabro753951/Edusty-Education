import React from 'react'

const About = () => {
  return (
    <div className='mt-24 grid grid-cols-2 gap-4'>
        <div>
            <img className="rounded-xl w-full h-[370px]" src="img/About/about.jpg" alt="" />
        </div>
        <div>
            <h1 className='text-blue-800 font-semibold uppercase'>About University</h1>
            <h1 className='text-4xl font-semibold'>Nurturing Tommarow's Leaders Today</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit saepe, voluptatem architecto consectetur sed sit ducimus harum laboriosam rem provident.
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cupiditate blanditiis corporis nisi sint quas commodi dolorum officiis unde aliquid .
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cupiditate blanditiis corporis nisi sint quas commodi dolorum officiis unde aliquid.
            </p>
        </div>
    </div>
  )
}

export default About