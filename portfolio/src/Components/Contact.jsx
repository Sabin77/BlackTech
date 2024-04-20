import React from "react";
import bg from "../assets/contactbg.jpg";

function Contact() {
  return (
    <>
      <div className="MainContainer  flex  h-screen items-center ">
        <img className="h-full w-full" src={bg} alt="bg-image" />
        <div className="absolute flex flex-col items-center h-full w-full z-10">
          <div className=" flex flex-col w-1/2  self-center">
            <h1 className="Title text-4xl self-center pt-5 pb-2 font-bold border-b-4 ">
              Contact
            </h1>
            <p className="text-center py-3 text-xl">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <div className=" messageContainer flex flex-col h-auto w-1/2 border-2 mt-10">
            <div className=" flex flex-col my-4 px-16">
              <h1 className=" font-bold my-2">Name</h1>
              <input
                className=" h-10 rounded-lg bg-inherit border-2  "
                placeholder="Your name"
                type="text"
                style={{ paddingLeft: "10px" }}
              />
            </div>

            <div className=" flex flex-col my-4 px-16">
              <h1 className=" font-bold my-2">Email</h1>
              <input
                className=" h-10 rounded-lg bg-inherit border-2  "
                placeholder="Your email"
                type="text"
                style={{ paddingLeft: "10px" }}
              />
            </div>

            <div className=" flex flex-col my-4 px-16">
              <h1 className=" font-bold my-2">Message</h1>
              <textarea
                rows={3}
                className=" rounded-lg bg-inherit border-2  "
                placeholder="Write your message"
                type="text"
                style={{ paddingLeft: "10px", paddingTop: "5px" }}
              />
            </div>
            <button className=" self-center border-2 my-4 py-1 px-3 rounded-md hover:backdrop-blur-sm hover:">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
