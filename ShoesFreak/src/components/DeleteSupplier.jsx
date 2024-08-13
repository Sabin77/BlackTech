import React, { useState, useEffect } from "react";
import { GiCrossedBones } from "react-icons/gi";
import axios from "axios";

function DeleteSupplier({ closeDelete, supplier }) {
  const deleteSupplier = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/supplier/deletesupplier/${supplier._id}`,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );
      closeDelete();
      console.log("Supplier Deleted Successfully");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="modal-wrapper fixed inset-0  bg-blur"></div>
      <div className=" flex fixed  justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col rounded-lg border-2 bg-white">
          <div className=" flex relative justify-center items-center border-2 bg-[#458D69] rounded-t-lg w-full h-20">
            <p className=" font-semibold text-white  text-3xl">Are you sure?</p>
            <GiCrossedBones
              className=" absolute right-4 top-2 text-xl text-white cursor-pointer"
              onClick={closeDelete}
            />
          </div>
          <div className=" px-3 my-3">
            <p className=" font-semibold text-xl">
              The details of the supplier will be deleted permanently.
            </p>
          </div>
          <div className=" flex justify-center my-4">
            <button
              className=" border-2 mx-2 px-2 py-1 rounded-lg text-lg bg-red-500 text-white hover:bg-red-700"
              onClick={deleteSupplier}
            >
              Yes, delete
            </button>
            <button
              className=" border-2 mx-2 px-2 rounded-lg text-lg bg-blue-500 text-white hover:bg-blue-600"
              onClick={closeDelete}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteSupplier;
