import React from "react";
import { IoCartOutline, IoHeart } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <div className="flex relative justify-center border-b-2">
        <ul className=" flex justify-center space-x-10  font-bold  py-4  ">
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <button className=" flex absolute items-center justify-center gap-2  right-5 top-2">
          <IoCartOutline size={30} />
          {/* <IoHeart size={30} /> */}
          <span className="text-4xl text-red-500 pb-1">&hearts;</span>
        </button>
      </div>
    </>
  );
}

export default Navbar;
