import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { GiCrossedBones } from "react-icons/gi";
import MenuOverlay from "./MenuOverlay";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const menuList = [
    {
      id: 1,
      title: "HOME",
      path: "#body",
    },
    {
      id: 2,
      title: "ABOUT",
      path: "#about",
    },
    {
      id: 3,
      title: "PROJECTS",
      path: "#projects",
    },
    {
      id: 4,
      title: "CONTACT",
      path: "#contact",
    },
  ];
  return (
    <div className=" sticky top-0 bg-black z-20 ">
      <div className=" relative flex border-b-2 border-white h-20 items-center ">
        <h1 className=" text-2xl font-bold ml-10">Suraj Gautam</h1>
        <div className="absolute hidden  md:flex space-x-20 right-20 font-bold ">
          <Link to="#body" smooth>
            Home
          </Link>
          <Link to="#about" smooth>
            About
          </Link>
          <Link to="#projects" smooth>
            Projects
          </Link>
          <Link to="#contact" smooth>
            Contact
          </Link>
        </div>
        <div className=" absolute right-4 md:hidden ">
          {!toggle ? (
            <HiBars3BottomRight
              onClick={() => setToggle(!toggle)}
              className=" text-white text-[22px] cursor-pointer"
            />
          ) : (
            <GiCrossedBones
              onClick={() => setToggle(!toggle)}
              className=" text-white text-[22px] cursor-pointer"
            />
          )}
        </div>
        <div className=" absolute left-0 ">
          {toggle ? <MenuOverlay menuList={menuList} /> : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
