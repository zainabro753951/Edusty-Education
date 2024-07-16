import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Offer from "./Components/Offer";
import About from "./Components/About";
import Campus from "./Components/Campus";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <div className="background w-full h-screen text-white">
        <Hero />
      </div>
      <div className="mx-40">
        <Offer />
        <About/>
        <Campus/>
        <Contact/>
      </div>
      <Footer/>
    </>
  );
};

export default page;
