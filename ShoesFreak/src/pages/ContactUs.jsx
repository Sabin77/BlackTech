import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ContactUs() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: " ",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { first_name, last_name, email, subject, message } = user;

    const response = await fetch(
      "https://shoesfreak-7e431-default-rtdb.firebaseio.com/ShoesContactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          subject,
          message,
        }),
      }
    );
    if (response) {
      setUser({
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: " ",
      });
      alert("Data Sent Successfully.");
    }
  };
  return (
    <div id="contact-us" className=" flex flex-col items-center py-24">
      <div className=" flex flex-col items-center space-y-2">
        <h1 className="font-lilita text-3xl mb-3">Contact Us</h1>
        <p> 98876543321 / sabinlamichhane.com.np</p>
        <p>Arghaun Chowk, Pokhara-26, Gandaki Pradesh, Nepal</p>
      </div>
      <form
        // action="https://formspree.io/f/mgegbvpl"
        method="POST"
        className=" flex flex-col w-full items-center  mt-10 font-josefin text-[#458D69]"
      >
        <div className=" flex flex-col w-60 md:flex-row md:w-fit  xl:w-1/3  ">
          <div className=" flex flex-col flex-1 m-2 space-y-2">
            <label> First Name</label>

            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={getUserData}
              className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
              required
            />

            <label> Last Name</label>
            <input
              name="last_name"
              value={user.last_name}
              onChange={getUserData}
              type="text"
              className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
              required
            />
            <label> Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={getUserData}
              className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
              required
            />
            <label> Subject</label>
            <input
              type="text"
              name="subject"
              value={user.subject}
              onChange={getUserData}
              className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
            />
          </div>
          <div className=" flex flex-col flex-1 m-2">
            <label> Message</label>
            <textarea
              className=" h-full border-solid border-2 border-[#9ec0af] mt-2 pl-2 focus:outline-none focus:border-[#458D69]"
              name="message"
              value={user.message}
              onChange={getUserData}
            ></textarea>
          </div>
        </div>
        <div className=" flex md:justify-end">
          <button
            className=" bg-[#458D69] text-white px-5 mx-2 my-4 hover:bg-[#1e4f38]"
            onClick={postData}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
