import React from "react";
import bg from "../assets/contactbg.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2env81y", "template_33fa75a", form.current, {
        publicKey: "RPgjCKQHt_7JSg973",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div
        className="MainContainer  flex  h-screen mb-10 items-center  "
        id="contact"
      >
        <img className="h-full w-full mt-20" src={bg} alt="bg-image" />
        <div className="absolute flex flex-col items-center h-full w-full z-10 pt-20">
          <div className=" flex flex-col w-3/4  self-center md:w-1/2">
            <h1 className="Title text-4xl self-center pt-5 pb-2 font-bold border-b-4 ">
              Contact
            </h1>
            <p className="text-center py-3 text-xl">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <form
            className=" messageContainer flex flex-col w-3/4 backdrop-blur-sm h-auto border-2 mt-10 md:w-1/2 "
            onSubmit={sendEmail}
          >
            <div className=" flex flex-col my-4 px-16">
              <h1 className=" font-bold my-2">Name</h1>
              <input
                className=" h-10 rounded-lg bg-inherit border-2  "
                placeholder="Your name"
                name="user_name"
                type="text"
                style={{ paddingLeft: "10px" }}
              />
            </div>

            <div className=" flex flex-col my-4 px-16">
              <h1 className=" font-bold my-2">Email</h1>
              <input
                className=" h-10 rounded-lg bg-inherit border-2  "
                placeholder="Your email"
                name="user_email"
                type="email"
                style={{ paddingLeft: "10px" }}
              />
            </div>

            <div className=" flex flex-col my-4 px-16">
              <h1 className=" font-bold my-2">Message</h1>
              <textarea
                rows={3}
                className=" rounded-lg bg-inherit border-2  "
                placeholder="Write your message"
                type="submit"
                name="message"
                value="Send"
                style={{ paddingLeft: "10px", paddingTop: "5px" }}
              />
            </div>
            <button className=" self-center border-2 my-4 py-1 px-3 rounded-md hover:backdrop-blur-sm hover:">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
