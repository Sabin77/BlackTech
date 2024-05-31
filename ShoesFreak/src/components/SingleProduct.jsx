import React, { useState } from "react";
import casual from "../assets/casual.jpg";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { add } from "./State/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function SingleProduct({ item }) {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className=" h-full my-4 w-60 mx-5 bg-white hover:-translate-y-1 hover:scale-110 hover:shadow-xl duration-300">
      <div className=" h-2/3 px-2 py-6">
        <Link to="/productDetails">
          <img className=" bg-contain h-fit" src={casual} alt="photo" />
        </Link>
      </div>
      <div className=" px-2 border-2">
        <h1 className=" font-semibold text-gray-500">{item.title}</h1>
        <p className=" my-1">Rs. {item.discounted_price}</p>
        <p className=" my-1 text-xs text-gray-400 line-through">
          Rs. {item.original_price}
        </p>
        <div className=" flex text-xs">
          {[1, 2, 3, 4, 5].map((star) => {
            return (
              <span
                className="start"
                style={{
                  cursor: "pointer",
                  color: item.rating >= star ? "gold" : "gray",
                  fontSize: `20px`,
                }}
              >
                {" "}
                ★{" "}
              </span>
            );
          })}
          <span>
            <p className="text-gray-400">-(56)</p>
          </span>
        </div>
        <div className=" flex justify-between">
          <button
            className="  px-1 my-2 bg-[#616161] text-white py-1 hover:bg-[#181818]"
            onClick={() => dispatch(add(item))}
          >
            Add to cart
          </button>

          {isLiked ? (
            <IoMdHeart
              className=" text-xl mt-3  text-red-500 cursor-pointer "
              onClick={() => setIsLiked(!isLiked)}
            />
          ) : (
            <FaRegHeart
              className=" text-xl mt-3 cursor-pointer text-gray-300 "
              onClick={() => setIsLiked(!isLiked)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
