import React from "react";
import { useForm } from "react-hook-form";

function ContactUs() {
  return (
    <div id="contact-us" className=" flex flex-col items-center py-24">
      <div className=" flex flex-col items-center space-y-2">
        <h1 className="font-lilita text-3xl mb-3">Contact Us</h1>
        <p> 98876543321 / sabinlamichhane.com.np</p>
        <p>Arghaun Chowk, Pokhara-26, Gandaki Pradesh, Nepal</p>
      </div>
      <form
        action="https://formspree.io/f/mgegbvpl"
        method="POST"
        className=" flex flex-col w-full items-center border-2 mt-10 font-josefin text-[#458D69]"
      >
        <div className=" flex flex-col w-60 md:flex-row md:w-fit  xl:w-1/3 border-2 ">
          <div className=" flex flex-col flex-1 m-2 space-y-2">
            <label> First Name</label>

            <input
              type="text"
              name="first-name"
              className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
              required
            />

            <label> Last Name</label>
            <input
              name="last-name"
              type="text"
              className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
            />
            <label> Email</label>
            <input
              type="email"
              name="Email"
              className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
              required
            />
            <label> Subject</label>
            <input
              type="text"
              className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
            />
          </div>
          <div className=" flex flex-col flex-1 m-2">
            <label> Message</label>
            <textarea
              className=" h-full border-solid border-2 border-[#9ec0af] mt-2 pl-2 focus:outline-none focus:border-[#458D69]"
              name="Message"
            ></textarea>
          </div>
        </div>
        <div className=" flex md:justify-end">
          <button className=" bg-[#458D69] text-white px-5 mx-2 my-4 hover:bg-[#1e4f38]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
