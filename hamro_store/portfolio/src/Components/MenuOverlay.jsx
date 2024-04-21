import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
function MenuOverlay({ menuList }) {
  const navigate = useNavigate();
  return (
    <div className=" absolute flex flex-col text-center h-screen w-screen backdrop-blur-lg  mt-7 border-2 ">
      {menuList.map((item) => (
        <h1
          className="text-white text-[24px] mb-6 justify-center mt-10
        hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
        >
          <Link to={item.path} smooth>
            {item.title}
          </Link>
        </h1>
      ))}
    </div>
  );
}

export default MenuOverlay;
