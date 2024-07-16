import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div
      id="hero-font Hero"
      className="w-full absolute top-0 h-screen flex justify-center text-center items-center bg-[#080154]/70"
    >
      <div className="w-[60%]">
        <h1 className="text-5xl leading-[4rem] font-semibold">
          We Ensure the best education
          <br /> 
          for a better world
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eligendi fugiat blanditiis et, ut aut. Ipsum corrupti nam temporibus quo corporis voluptatem quos perspiciatis? Commodi deleniti optio dolor laboriosam temporibus?
        </p>
        <a className="flex justify-center items-center mx-72 bg-white text-black gap-3 rounded-full my-4 py-2 px-6" href="#">Explore More <FaArrowRightLong/></a>
      </div>
    </div>
  );
};

export default Hero;
