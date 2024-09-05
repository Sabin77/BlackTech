import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import "../../App.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Sidebar({ setSelectedOption, activeOption }) {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="flex flex-col w-72 h-screen ">
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

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div
                className={`flex w-full items-center border-4 border-white p-3 mx-1 rounded-l-lg cursor-pointer ${
                  activeOption === "Products"
                    ? "bg-[#dbefe5] border-r-[#5FBF8F]"
                    : ""
                } hover:bg-[#dbefe5]`}
                onClick={() => handleOptionClick("Products")}
              >
                <div className=" flex">
                  <LuUsers className="text-xl " />
                  <p className="mx-2 ">Products</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-8 -mb-3  mt-3 ">
              <div
                className={` p-2 cursor-pointer ${
                  activeOption === "Stock In"
                    ? "bg-[#dbefe5] border-r-[#5FBF8F]"
                    : ""
                } hover:bg-[#dbefe5] `}
                onClick={() => handleOptionClick("Stock In")}
              >
                Stock In
              </div>
            </AccordionContent>
            <AccordionContent className="ml-8 -mb-3 mt-3">
              <div
                className={` p-2 cursor-pointer ${
                  activeOption === "Stock Out"
                    ? "bg-[#dbefe5] border-r-[#5FBF8F]"
                    : ""
                } hover:bg-[#dbefe5] `}
                onClick={() => handleOptionClick("Stock Out")}
              >
                Stock Out
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

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
          onClick={handleLogout}
        >
          <IoLogOutOutline className="text-xl" />
          <p className="mx-2">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
