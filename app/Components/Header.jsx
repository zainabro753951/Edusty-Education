"use client"
import React, { useState, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Link from "next/link";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="header" className={`flex justify-around z-50 fixed w-full items-center py-5 ${scrolled ? "bg-white text-black" : "bg-transparent text-white"}`}>
      <div className="flex items-center">
        <div className=" flex justify-center items-center w-[80px] h-[60px] rounded-full overflow-hidden">
          <img className="scale-150" src="img/logo.png" width={"100px"} alt="" />
        </div>
        <h1 className="text-4xl font-bold">Edusty</h1>
      </div>
      <div className="w-[50%] flex justify-between items-center">
        {[
          "Home",
          "Program",
          "About us",
          "Campus",
          "Testimonial",
          "Contact Us",
        ].map((items, index) => {
          return <Link className={`font-medium ${index === 5 && "bg-white rounded-full ml-5 text-blue-900 transition-all duration-300 hover:bg-blue-800/60 hover:text-white py-3 px-6"}`} href={`${index === 0 ? "#Hero" : ""}`}>{items}</Link>;
        })}
      </div>
    </div>
  );
};

export default Header;
