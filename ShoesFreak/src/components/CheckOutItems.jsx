import React from "react";
import casual from "../assets/casual.jpg";
import { HiX } from "react-icons/hi";
import { increase, decrease, remove } from "./State/Slice/CartSlice";
import { useDispatch } from "react-redux";

const CheckOutItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { id, discounted_price, amount, title } = cartItem;
  return (
    <div
      className=" flex justify-between items-center border border-solid border-gray-200 p-4 mb-6"
      key={id}
    >
      <div className="flex items-center gap-4">
        <img src={casual} alt="" className=" w-20 h-20 object-cover " />
      </div>
      <div className="flex flex-col items-start max-w-[6.8rem]">
        <div>{title}</div>
        <div className=" flex items-center gap-4 mt-2">
          <button
            className=" w-6 h-6 rounded-md text-white bg-slate-400"
            onClick={() => dispatch(decrease(cartItem))}
          >
            -
          </button>
          <div>{amount}</div>
          <button
            className=" w-6 h-6 rounded-md text-white bg-slate-400"
            onClick={() => dispatch(increase(cartItem))}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <HiX
          className=" cursor-pointer text-2xl"
          onClick={() => dispatch(remove(cartItem))}
        />
        <div>${(discounted_price * amount).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CheckOutItems;
