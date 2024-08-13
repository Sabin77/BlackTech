import React, { useState } from "react";
import { RadialChart } from "./RadialChart";
import { RadialGraph } from "./RadialChart2";
import defaultImg from "../../assets/defprof.jpg";
import logo from "../../assets/dao-city.png";
import logo1 from "../../assets/contact.jpg";
import Addsupplier from "../Addsupplier";

function Suppliers() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <div className=" flex flex-col space-y-4 m-4">
      <div className=" flex space-x-4 w-full ">
        <div className=" w-1/2 shadow-lg shadow-gray-400">
          <RadialGraph />
        </div>

        <div className=" shadow-lg shadow-gray-400 rounded-lg w-1/2 bg-white">
          <h1 className=" m-5 font-semibold text-xl">Recently Added</h1>
          <div className=" border-2 m-4 rounded-lg shadow-md">
            <div className=" flex items-center h-16">
              <div className=" border-2 h-10 w-10 rounded-full m-2">
                {" "}
                <img src={defaultImg} className=" rounded-full" />
              </div>
              <div className=" flex flex-col justify-center pl-4 w-2/3 h-10">
                <h2 className=" font-semibold"> Sabin Lamichhane</h2>
                <p className=" text-sm">Company Name</p>
              </div>
              <div className=" w-28 h-10">
                <p className=" text-center text-gray-400 "> 1 min ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className=" flex flex-col items-center w-1/3">
          <div className=" w-full shadow-lg h-fit shadow-gray-400 ">
            <RadialChart />
          </div>
          <button
            className=" my-6 w-fit p-2 bg-black text-white rounded-lg"
            onClick={() => setShowModal(true)}
          >
            {" "}
            Add a supplier
          </button>
          {showModal && <Addsupplier closeModal={closeModal} />}
        </div>

        <div className=" w-2/3 h-[500px] shadow-lg shadow-gray-500 overflow-y-auto scrollbar-hide rounded-lg bg-white">
          <h1 className=" text-2xl font-semibold m-4 text-center">
            {" "}
            All Suppliers{" "}
          </h1>
          <div className=" flex border-2 shadow-md h-32 m-4 rounded-lg">
            <div className="w-28 h-28 m-2 border-2 ">
              <img src={logo} className=" bg-cover h-24" />
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4 m-4">
              <div className="  rounded-md w-48 h-12 ">
                <h1 className=" font-semibold text-sm">Name</h1>
                <p className=" text-gray-600">Sabin Lamichhane</p>
              </div>
              <div className="  rounded-md  h-12">
                <h1 className=" font-semibold text-sm">Email</h1>
                <p className=" text-gray-600">sabin123@gmail.com</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Address</h1>
                <p className=" text-gray-600">Pokhara-27,Arghaun</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Phone</h1>
                <p className=" text-gray-600">9876554321</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Company Name</h1>
                <p className=" text-gray-600">Seven Heaven</p>
              </div>
            </div>
          </div>

          <div className=" flex items-center shadow-md border-2  h-32 m-4 rounded-lg">
            <div className="w-28 h-28 m-2 shadow-lg border-2 ">
              <img src={defaultImg} className=" bg-cover" />
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4 m-4">
              <div className="  rounded-md w-48 h-12 ">
                <h1 className=" font-semibold text-sm">Name</h1>
                <p className=" text-gray-600">Sabin Lamichhane</p>
              </div>
              <div className="  rounded-md  h-12">
                <h1 className=" font-semibold text-sm">Email</h1>
                <p className=" text-gray-600">sabin123@gmail.com</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Address</h1>
                <p className=" text-gray-600">Pokhara-27,Arghaun</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Phone</h1>
                <p className=" text-gray-600">9876554321</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Company Name</h1>
                <p className=" text-gray-600">Seven Heaven</p>
              </div>
            </div>
          </div>

          <div className=" flex  shadow-md h-32 m-4 border-2 rounded-lg">
            <div className="w-28 h-28 m-2 border-2 ">
              <img src={logo1} alt="" />
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4 m-4">
              <div className="  rounded-md w-48 h-12 ">
                <h1 className=" font-semibold text-sm">Name</h1>
                <p className=" text-gray-600">Shankar Dev</p>
              </div>
              <div className="  rounded-md  h-12">
                <h1 className=" font-semibold text-sm">Email</h1>
                <p className=" text-gray-600">sanky@gmail.com</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Address</h1>
                <p className=" text-gray-600">Pokhara</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Phone</h1>
                <p className=" text-gray-600">9876554321</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Company Name</h1>
                <p className=" text-gray-600">Seven Heaven</p>
              </div>
            </div>
          </div>

          <div className=" flex shadow-md border-2  h-32 m-4 rounded-lg">
            <div className="w-28 h-28 m-2 border-2 ">
              <img src={defaultImg} className=" bg-cover" />
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4 m-4">
              <div className="  rounded-md w-48 h-12 ">
                <h1 className=" font-semibold text-sm">Name</h1>
                <p className=" text-gray-600">Kp Oli</p>
              </div>
              <div className="  rounded-md  h-12">
                <h1 className=" font-semibold text-sm">Email</h1>
                <p className=" text-gray-600">Kpoli22@gmail.com</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Address</h1>
                <p className=" text-gray-600">Kathmandu</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Phone</h1>
                <p className=" text-gray-600">9876554321</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Company Name</h1>
                <p className=" text-gray-600">Seven Heaven</p>
              </div>
            </div>
          </div>

          <div className=" flex  shadow-md border-2  h-32 m-4 rounded-lg">
            <div className="w-28 h-28 m-2 border-2 ">
              <img src={defaultImg} className=" bg-cover" />
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4 m-4">
              <div className="  rounded-md w-48 h-12 ">
                <h1 className=" font-semibold text-sm">Name</h1>
                <p className=" text-gray-600">Swodesh Nepali</p>
              </div>
              <div className="  rounded-md  h-12">
                <h1 className=" font-semibold text-sm">Email</h1>
                <p className=" text-gray-600">swodeshNp@gmail.com</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Address</h1>
                <p className=" text-gray-600">Pokhara</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Phone</h1>
                <p className=" text-gray-600">9876554321</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Company Name</h1>
                <p className=" text-gray-600">Blacktech</p>
              </div>
            </div>
          </div>

          <div className=" flex  shadow-md border-2  h-32 m-4 rounded-lg">
            <div className="w-28 h-28 m-2 border-2 ">
              <img src={defaultImg} className=" bg-cover" />
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4 m-4">
              <div className="  rounded-md w-48 h-12 ">
                <h1 className=" font-semibold text-sm">Name</h1>
                <p className=" text-gray-600">Sandeep Lamichhane</p>
              </div>
              <div className="  rounded-md  h-12">
                <h1 className=" font-semibold text-sm">Email</h1>
                <p className=" text-gray-600">lcsandeep@gmail.com</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Address</h1>
                <p className=" text-gray-600">Parbat</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Phone</h1>
                <p className=" text-gray-600">9876554321</p>
              </div>
              <div className="  rounded-md w-48 h-12">
                <h1 className=" font-semibold text-sm">Company Name</h1>
                <p className=" text-gray-600">Seven Heaven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suppliers;
