import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { open } from "./State/Slice/CheckOutSlice";
import { clear } from "./State/Slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import CheckOutItems from "./CheckOutItems";
import { FaRegTrashAlt } from "react-icons/fa";

function CheckOut() {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((state) => state.cart);

  return (
    <div className="bg-black bg-opacity-50 fixed z-30 top-0 left-0 w-full h-screen">
      <div className=" h-full bg-gray-300 sm:w-[40rem] min-w-[15rem] overflow-y-auto ">
        <div className=" p-6">
          <div className=" flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => dispatch(open())}
            >
              <MdArrowBackIos />
              <span className=" uppercase text-[0.95rem]">
                Continue Shopping
              </span>
            </div>
            <div>Shopping Bag ({amount})</div>
          </div>
          <div className="mt-8">
            {cartItems.length === 0 ? (
              <div className="uppercase text-center text-3xl">
                Your cart is empty
              </div>
            ) : (
              <>
                {cartItems.map((cartItem) => {
                  return (
                    <CheckOutItems key={cartItem.id} cartItem={cartItem} />
                  );
                })}
                <div className="flex justify-between mt-12">
                  <div>Total Cost: ${total.toFixed(2)}</div>
                  <FaRegTrashAlt
                    className=" cursor-pointer"
                    onClick={() => dispatch(clear())}
                  />
                </div>
                <div className=" text-center cursor-pointer bg-[#458D69] text-white pt-1 mt-8 h-8">
                  Checkout
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
