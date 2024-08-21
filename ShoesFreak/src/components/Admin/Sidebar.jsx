import React, { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

function Sidebar({ setSelectedOption, activeOption }) {
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col w-72 border-r-2 ">
      <div className="font-semibold text-2xl pt-5 pl-2 text-[#5FBF8F]">
        ShoesFreak
      </div>
      <div className="relative h-full pt-8 text-gray-600">
        <div
          className={`flex items-center border-4 border-white p-3 mx-1 rounded-l-lg cursor-pointer ${
            activeOption === "Dashboard"
              ? "bg-[#dbefe5] border-r-[#5FBF8F]"
              : ""
          } hover:bg-[#dbefe5]`}
          onClick={() => handleOptionClick("Dashboard")}
        >
          <MdOutlineSpaceDashboard className="text-xl" />
          <p className="mx-2">Dashboard</p>
        </div>

        <div
          className={`flex items-center border-4 border-white p-3 mx-1 rounded-l-lg cursor-pointer ${
            activeOption === "Suppliers"
              ? "bg-[#dbefe5] border-r-[#5FBF8F]"
              : ""
          } hover:bg-[#dbefe5]`}
          onClick={() => handleOptionClick("Suppliers")}
        >
          <LuUsers className="text-xl" />
          <p className="mx-2">Suppliers</p>
        </div>

        <div
          className={`flex items-center border-4 border-white p-3 mx-1 rounded-l-lg cursor-pointer ${
            activeOption === "Products" ? "bg-[#dbefe5] border-r-[#5FBF8F]" : ""
          } hover:bg-[#dbefe5]`}
          onClick={() => handleOptionClick("Products")}
        >
          <LuUsers className="text-xl" />
          <p className="mx-2">Products</p>
        </div>

        <div
          className={`flex items-center border-4 border-white p-3 mx-1 rounded-l-lg cursor-pointer ${
            activeOption === "Settings" ? "bg-[#dbefe5] border-r-[#5FBF8F]" : ""
          } hover:bg-[#dbefe5]`}
          onClick={() => handleOptionClick("Settings")}
        >
          <IoSettingsOutline className="text-xl" />
          <p className="mx-2">Settings</p>
        </div>

        <div
          className={`absolute bottom-10 w-full flex items-center border-4 border-white p-3 rounded-l-lg cursor-pointer ${
            activeOption === "Logout" ? "bg-[#dbefe5] border-r-[#5FBF8F]" : ""
          } hover:bg-[#dbefe5]`}
          onClick={() => handleOptionClick("Logout")}
        >
          <IoLogOutOutline className="text-xl" />
          <p className="mx-2">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
