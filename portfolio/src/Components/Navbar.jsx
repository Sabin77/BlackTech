import React from "react";

function Navbar() {
  return (
    <div>
      <div className=" relative flex border-b-2 border-white h-20 items-center  ">
        <h1 className=" text-2xl font-bold ml-10">Suraj Gautam</h1>
        <div className="absolute flex space-x-20 right-20 ">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Projects</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
