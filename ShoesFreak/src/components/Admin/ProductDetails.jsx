import React, { useState, useEffect } from "react";
import { GiCrossedBones } from "react-icons/gi";
import axios from "axios";
import defaultImg from "../../assets/default_shoes.png";

function ProductDetails({ product, closeDetails }) {
  const [productDetails, setProductDetails] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getProductDetails = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/product/getproductdetails/${product._id}`,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );
      setProductDetails(response.data);
      console.log("Product found Successfully");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  useEffect(() => {
    getProductDetails();
  }, [product]);

  return (
    <>
      <div className="modal-wrapper fixed inset-0  bg-blur"></div>
      <div className=" flex fixed  justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col rounded-lg border-2 w-[500px] bg-white">
          <div className=" flex relative p-4 rounded-t-lg w-full h-20">
            <p className=" text-2xl">Product Details</p>
            <GiCrossedBones
              className=" absolute right-4 top-2 text-xl cursor-pointer mt-2"
              onClick={closeDetails}
            />
          </div>

          <div className=" flex flex-col justify-center items-center space-y-6 px-3">
            <div className=" -mt-4">
              <img
                src={
                  productDetails.productImage
                    ? productDetails.productImage
                    : defaultImg
                }
                alt="image"
                className=" border-2 w-40 h-40 "
              />
              <h1 className=" text-center text-xl"> {productDetails.name}</h1>
            </div>

            <div className=" flex  w-full">
              <div className=" flex flex-col pl-5  mx-2 h-16">
                <label> Description</label>
                <p className=" text-gray-500">{productDetails.description}</p>
              </div>
            </div>

            <div className=" flex  w-full">
              <div className=" flex  flex-1 flex-col pl-5  mx-2 h-16">
                <label> Color</label>
                <p className=" text-gray-500">
                  {productDetails.color ? productDetails.color.join(", ") : ""}
                </p>
              </div>
            </div>
            <div className=" flex  w-full">
              <div className=" flex flex-1  flex-col pl-5 mx-2 h-16">
                <label> Quantity Limit</label>
                <p className=" text-gray-500">
                  {productDetails.quantity_limit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
