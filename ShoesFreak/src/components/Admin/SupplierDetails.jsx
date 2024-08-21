import React, { useState, useEffect } from "react";
import { GiCrossedBones } from "react-icons/gi";
import axios from "axios";

function SupplierDetails({ supplier, closeDetails }) {
  const [supplierDetails, setSupplierDetails] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getsupplierdetails = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/supplier/getsupplierdetails/${supplier._id}`,

        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );
      setSupplierDetails(response.data);
      console.log("Details Found successfully:", response.data);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    getsupplierdetails();
  }, [supplier]);

  return (
    <>
      <div className="modal-wrapper fixed inset-0  bg-blur"></div>
      <div className=" flex fixed  justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col rounded-lg border-2 w-[500px] bg-white">
          <div className=" flex relative p-4 rounded-t-lg w-full h-20">
            <p className=" text-2xl">Supplier Details</p>
            <GiCrossedBones
              className=" absolute right-4 top-2 text-xl cursor-pointer mt-2"
              onClick={closeDetails}
            />
          </div>

          <div className=" flex flex-col justify-center items-center space-y-6 px-3">
            <div className=" -mt-4">
              <img
                src={supplierDetails.companylogo}
                alt="Logo"
                className=" border-2 w-40 h-40 "
              />
              <h1 className=" text-center text-xl">
                {" "}
                {supplierDetails.companyname}
              </h1>
            </div>

            <div className=" flex  w-full">
              <div className=" flex  flex-1 flex-col pl-5  mx-2 h-16">
                <label> Name</label>
                <p className=" text-gray-500">{supplierDetails.name}</p>
              </div>

              <div className=" flex flex-1  flex-col pl-5 mx-2 h-16">
                <label> Email</label>
                <p className=" text-gray-500">{supplierDetails.email}</p>
              </div>
            </div>

            <div className=" flex  w-full">
              <div className=" flex  flex-1 flex-col pl-5  mx-2 h-16">
                <label> Phone</label>
                <p className=" text-gray-500">{supplierDetails.phone}</p>
              </div>

              <div className=" flex flex-1  flex-col pl-5 mx-2 h-16">
                <label> Address</label>
                <p className=" text-gray-500">{supplierDetails.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupplierDetails;
