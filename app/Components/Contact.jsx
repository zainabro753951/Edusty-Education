import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="py-36">
      <h1 className="text-center text-blue-900 uppercase font-semibold py-2">Contact us</h1>
      <h1 className="text-center pb-12 text-4xl font-semibold">Get in Touch</h1>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h1 className="text-2xl font-semibold py-3">Send us a message</h1>
          <p className="pb-5 text-gray-600">
            Feel free to reach out throught contact form or find our contact
            information below. Your feedback, questions and suggestions are
            importent to us as we strive to provide exceptional service to our
            university community.
          </p>
          <div>
            <div className="flex items-center gap-3 pt-3 text-gray-600">
              <AiTwotoneMail className="text-blue-900 text-3xl" />
              <h1>sindhuniversity@.dev</h1>
            </div>
            <div className="flex items-center gap-3 pt-3 text-gray-600">
              <FaPhone className="text-blue-900 text-3xl" />
              <h1>03032150993</h1>
            </div>
            <div className="flex items-center gap-3 pt-3 text-gray-600">
              <FaLocationDot className="text-blue-900 text-3xl" />
              <h1>Hyderabad Jamashoro</h1>
            </div>
          </div>
        </div>
        <div className="p-5">
          <form action="#" className=" flex flex-col gap-2">
            <label htmlFor="#">Your Name</label>
            <input className="outline-none py-2 px-3 rounded-md bg-blue-100 " type="text" placeholder="Enter Your Name" />
            <label htmlFor="#">Phone Number</label>
            <input
              type="number"
              name="#"
              id=""
              placeholder="Enter Your Phone Number"
              className="outline-none py-2 px-3 rounded-md bg-blue-100 "
            />
            <label htmlFor="#">Write Your Messeage Here</label>
            <textarea
              name=""
              id=""
              placeholder="Enter Your Message here"
              className="outline-none py-2 px-3 rounded-md w-full h-[30vh] bg-blue-100 "
            ></textarea>
            <a className="flex items-center justify-center transition-all duration-300 hover:bg-blue-600 bg-blue-900 text-white mr-52 gap-3 rounded-full my-4 py-2 px-6" href="#">Explore More <FaArrowRightLong/></a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
