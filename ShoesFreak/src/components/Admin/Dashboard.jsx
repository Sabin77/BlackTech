import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import Sidebar from "./Sidebar";
import { FiDollarSign } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import { Barchart } from "./Barchart";
import defaultImg from "../../assets/defprof.jpg";
import Suppliers from "./Suppliers";

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const renderContent = () => {
    switch (selectedOption) {
      case "Dashboard":
        return (
          <>
            <div className=" flex px-3">
              <div className=" flex flex-col  m-4 w-72 h-36 px-6 bg-white rounded-md">
                <div className=" relative flex items-center mt-4 h-8 font-semibold">
                  {" "}
                  <p>Total revenue</p>
                  <FiDollarSign className="absolute right-3 text-2xl" />
                </div>
                <div className="  h-14">
                  <p className="text-3xl font-bold">$55,000</p>
                  <p className=" text-sm py-1">+20.1% from last month</p>
                </div>
              </div>
              <div className=" flex flex-col m-4 w-72 h-36 px-6 bg-white rounded-md">
                <div className=" relative flex items-center  mt-4 h-8 font-semibold">
                  {" "}
                  <p>Total Users</p>
                  <LuUsers className="absolute right-3 text-2xl" />
                </div>
                <div className="  h-14">
                  <p className="text-3xl font-bold">5,000</p>
                  <p className=" text-sm py-1">+200.1% from last month</p>
                </div>
              </div>

              <div className=" flex flex-col  m-4 w-72 h-36 px-6 bg-white rounded-md">
                <div className=" relative flex items-center  mt-4 h-8 font-semibold">
                  {" "}
                  <p>In</p>
                  <IoArrowDownOutline className="absolute right-3 text-2xl" />
                </div>
                <div className="  h-14">
                  <p className="text-3xl font-bold">300</p>
                  <p className=" text-sm py-1">+20.1% from last month</p>
                </div>
              </div>

              <div className=" flex flex-col  m-4 w-72 h-36 px-6 bg-white rounded-md">
                <div className=" relative flex items-center  mt-4 h-8 font-semibold">
                  {" "}
                  <p>Out</p>
                  <IoArrowUpOutline className="absolute right-3 text-2xl" />
                </div>
                <div className="  h-14">
                  <p className="text-3xl font-bold">500</p>
                  <p className=" text-sm py-1">+30.1% from last month</p>
                </div>
              </div>
            </div>
            <div className=" flex px-4 py-1 h-full">
              <div className="  w-3/5 bg-white mx-3 rounded-lg ">
                <Barchart />
              </div>
              <div className="   w-2/5 px-2 bg-white mx-3 rounded-lg ">
                <div className=" m-4 h-96">
                  <div className="  h-16">
                    <h1 className=" text-xl font-semibold"> Recent Sales </h1>
                    <p className=" text-gray-500">
                      You made 777 sales this month
                    </p>
                  </div>
                  <div className=" flex items-center h-16">
                    <div className=" border-2 h-10 w-10 rounded-full">
                      {" "}
                      <img src={defaultImg} className=" rounded-full" />
                    </div>
                    <div className=" flex flex-col justify-center pl-4 w-2/3 h-10">
                      <h2 className=" font-semibold"> Sabin Lamichhane</h2>
                      <p className=" text-sm">sabin@gmail.com</p>
                    </div>
                    <div className=" w-28 h-10">
                      <p className=" text-center font-semibold"> +$5600</p>
                    </div>
                  </div>

                  <div className=" flex items-center h-16">
                    <div className="border-2 h-10 w-10 rounded-full">
                      {" "}
                      <img src={defaultImg} className=" rounded-full" />
                    </div>
                    <div className=" flex flex-col justify-center pl-4 w-2/3 h-10">
                      <h2 className=" font-semibold"> Hari Prasad</h2>
                      <p className=" text-sm">hari@gmail.com</p>
                    </div>
                    <div className=" w-28 h-10">
                      <p className=" text-center font-semibold"> +$4500</p>
                    </div>
                  </div>

                  <div className=" flex items-center h-16">
                    <div className="border-2 h-10 w-10 rounded-full">
                      {" "}
                      <img src={defaultImg} className=" rounded-full" />
                    </div>
                    <div className=" flex flex-col justify-center pl-4 w-2/3 h-10">
                      <h2 className=" font-semibold"> Ghanshyam Poudel</h2>
                      <p className=" text-sm">poudelg@gmail.com</p>
                    </div>
                    <div className=" w-28 h-10">
                      <p className=" text-center font-semibold"> +$3300</p>
                    </div>
                  </div>

                  <div className=" flex items-center h-16">
                    <div className="border-2 h-10 w-10 rounded-full">
                      {" "}
                      <img src={defaultImg} className=" rounded-full" />
                    </div>
                    <div className=" flex flex-col justify-center pl-4 w-2/3 h-10">
                      <h2 className=" font-semibold"> Santosh Gurung</h2>
                      <p className=" text-sm">sgrg@gmail.com</p>
                    </div>
                    <div className=" w-28 h-10">
                      <p className=" text-center font-semibold"> +$3000</p>
                    </div>
                  </div>

                  <div className=" flex items-center h-16">
                    <div className="border-2 h-10 w-10 rounded-full">
                      <img src={defaultImg} className=" rounded-full" />
                    </div>
                    <div className=" flex flex-col justify-center pl-4 w-2/3 h-10">
                      <h2 className=" font-semibold"> Saunak Shrestha</h2>
                      <p className=" text-sm">saunak@gmail.com</p>
                    </div>
                    <div className=" w-28 h-10">
                      <p className=" text-center font-semibold"> +$2200</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "Suppliers":
        return <Suppliers />;
      case "Customers":
        return (
          <div className="m-4 p-4 bg-white rounded-lg">Customers Section</div>
        );
      case "Settings":
        return (
          <div className="m-4 p-4 bg-white rounded-lg">Settings Section</div>
        );
      default:
        return (
          <div className="m-4 p-4 bg-white rounded-lg">Dashboard Section</div>
        );
    }
  };
  return (
    <div className=" text-black">
      <div className="  flex">
        <Sidebar
          setSelectedOption={setSelectedOption}
          activeOption={selectedOption}
        />
        <div className=" flex flex-col  border-red-400 w-full bg-[#dbefe5]">
          <div className=" flex  h-20 bg-white py-4">
            <div className=" flex flex-1  items-center ">
              <h1 className=" text-2xl font-bold pl-10 text-[#5FBF8F] ">
                {" "}
                Dashboard
              </h1>
            </div>
            <div className=" flex flex-1  space-x-2 pr-4 flex-row-reverse items-center ">
              <IoIosArrowDown />
              <div className=" w-8 h-8 border-2 rounded-full ">
                <img src={defaultImg} className=" rounded-full" />
              </div>
              <MdOutlineNotifications className=" text-2xl" />
              <IoMdSearch className=" text-2xl" />
            </div>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
