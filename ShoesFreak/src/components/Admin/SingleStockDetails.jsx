import React, { useState, useEffect } from "react";
import { GiCrossedBones } from "react-icons/gi";
import axios from "axios";
import defaultImg from "../../assets/default_shoes.png";
import NepaliDate from "nepali-date-converter";

function SingleStockDetails({ getstockDetails, stock, closeDetails }) {
  const [stockDetails, setStockDetails] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getStockDetails = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/stock/${getstockDetails}/${stock._id}`,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );
      setStockDetails(response.data);
      console.log(response.data);

      console.log("Stock found Successfully");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const convertToNepaliDate = (dateString) => {
    if (!dateString) return "";

    const englishDate = new Date(dateString); // Convert to JS Date object
    const nepaliDate = new NepaliDate(englishDate); // Convert to NepaliDate object

    // Get the day, month, and year from the Nepali date
    const day = nepaliDate.getDate(); // Day number
    const month = nepaliDate.format("MMMM"); // Full Nepali month name
    const year = nepaliDate.getYear(); // Nepali year

    // Return formatted string in "Bhadra 23, 2081" format
    return `${month} ${day}, ${year}`;
  };

  useEffect(() => {
    getStockDetails();
  }, [stock]);

  return (
    <>
      <div className="modal-wrapper fixed inset-0  bg-blur"></div>
      <div className=" flex fixed  justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col rounded-lg border-2 w-[500px] bg-white">
          <div className=" flex relative p-4 rounded-t-lg w-full h-20">
            <p className=" text-2xl">Stock Details</p>
            <GiCrossedBones
              className=" absolute right-4 top-2 text-xl cursor-pointer mt-2"
              onClick={closeDetails}
            />
          </div>

          <div className=" flex flex-col justify-center items-center space-y-6 px-3">
            <div className=" -mt-4">
              <img
                src={
                  stockDetails.productImage
                    ? stockDetails.productImage
                    : defaultImg
                }
                alt="image"
                className=" border-2 w-40 h-40 "
              />
              <h1 className=" text-center text-xl">
                {" "}
                {stockDetails.productName}
              </h1>
            </div>

            <div className=" flex  w-full">
              <div className=" flex flex-col pl-5  mx-2 h-16">
                <label> Supplier Name</label>
                <p className=" text-gray-500">{stockDetails.supplierName}</p>
              </div>
            </div>

            <div className=" flex  w-full">
              <div className=" flex  flex-1 flex-col pl-5  mx-2 h-16">
                <label> Quantity In</label>
                <p className=" text-gray-500">{stockDetails.quantity_in}</p>
              </div>
            </div>
            <div className=" flex  w-full">
              <div className=" flex flex-1  flex-col pl-5 mx-2 h-16">
                <label> Price</label>
                <p className=" text-gray-500">{stockDetails.price}</p>
              </div>
            </div>

            <div className=" flex  w-full">
              <div className=" flex flex-1  flex-col pl-5 mx-2 h-16">
                <label> Date</label>
                <p className=" text-gray-500">
                  {convertToNepaliDate(stockDetails.date)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleStockDetails;
