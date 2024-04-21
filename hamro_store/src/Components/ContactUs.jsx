import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Contact from "../assets/contact.jpg";

function ContactUs() {
  return (
    <div className=" flex h-svh bg-gray-100">
      <div className=" flex flex-col flex-1 border-r-2 border-gray-400 items-center my-5">
        <h1 className=" text-3xl ">Contact Us</h1>
        <div className=" relative w-64 ml-10 mt-6">
          <p className=" text-lg">Name</p>
          <input
            type="text"
            className=" rounded-xl h-10 w-64"
            placeholder="Name"
            style={{ paddingLeft: "10px", paddingRight: "26px" }}
          />
          <FaUser className=" absolute right-2 top-10" />
        </div>

        <div className=" relative w-64 ml-10 mt-6 ">
          <p className=" text-lg">Email</p>
          <input
            type="text"
            className=" rounded-xl h-10 w-64"
            placeholder="Email"
            style={{ paddingLeft: "10px", paddingRight: "26px" }}
          />
          <IoMdMail className=" absolute right-2 top-10" />
        </div>

        <div className=" relative w-64 ml-10 mt-6 ">
          <p className=" text-lg">Message</p>
          <textarea
            type="text"
            rows={3}
            className=" rounded-xl  w-64 placeholder:"
            placeholder="Your Message"
            style={{ paddingLeft: "10px" }}
          />
        </div>
        <button className=" border-2 border-gray-500 rounded-xl px-6 py-2 mt-3 hover:bg-[#4A3BB5]">
          Submit
        </button>
      </div>
      <div className=" flex flex-1 items-center justify-center">
        <img className=" h-full" src={Contact} alt="contact us " />
      </div>
    </div>
  );
}

export default ContactUs;
