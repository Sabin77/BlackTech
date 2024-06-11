import React from "react";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <div className=" flex justify-center w-screen  bg-slate-50 py-4">
      <div className=" flex flex-wrap w-9/12  px-12 ">
        <div className="flex w-full h-72">
          <div className="  w-1/3">
            <h1 className=" font-semibold">About</h1>
            <p className=" text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              nostrum? Aperiam temporibus sit debitis architecto sunt, ab
              tempora illo !
            </p>
            <div className=" my-10">
              <div className=" flex">
                <h1 className=" font-semibold">Email:</h1>
                <p className=" ml-2 text-gray-500">sabin@blacktech.com.np</p>
              </div>
              <div className=" flex ">
                <h1 className=" font-semibold">Phone:</h1>
                <p className=" ml-2 text-gray-500"> 9876543210</p>
              </div>
            </div>
          </div>
          <div className="flex w-1/3">
            <div className="  px-4 w-1/2">
              <h1 className=" font-semibold">Quick Link</h1>
              <ul className=" space-y-2 mt-4 text-gray-500">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Author</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className=" w-1/2">
              <h1 className=" font-semibold">Category</h1>
              <ul className=" space-y-2 mt-4 text-gray-500">
                <li>Lifestyle</li>
                <li>Technology</li>
                <li>Travel</li>
                <li>Business</li>
                <li>Economy</li>
                <li>Sports</li>
              </ul>
            </div>
          </div>
          <div className=" flex justify-center w-1/3 ">
            <form className="flex flex-col items-center justify-center rounded-md w-80 border-2 h-56 mt-6 bg-white">
              <p className=" text-center mt-3 font-semibold">
                Weekly Newsletter
              </p>
              <p className=" text-center text-sm text-gray-400">
                Get blog articles and offer through mail.
              </p>
              <div className=" flex items-center border-2 w-60 rounded-md mt-4">
                <input
                  type="text"
                  className="  h-10 w-56 pl-2 outline-none  rounded-md"
                />
                <FiMail className=" text-2xl text-gray-400 mx-2" />
              </div>

              <button className=" border-2 px-3 py-1 rounded-md my-4 bg-blue-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
