import React, { useState, useEffect } from "react";
import formal from "../assets/formal.jpg";
import { GiCrossedBones } from "react-icons/gi";
import { data } from "autoprefixer";

function Cart() {
  const cartItems = [
    {
      id: 1,
      title: "This is the title of the product 1",
      color: "Red",
      price: 99.65,
    },
    {
      id: 2,
      title: "This is the title of the product 2",
      color: "Blue",
      price: 35.65,
    },
    {
      id: 3,
      title: "This is the title of the product 3",
      color: "Black",
      price: 33.33,
    },
    {
      id: 4,
      title: "This is the title of the product 4",
      color: "Brown",
      price: 25.33,
    },
  ];
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedItems, setSelectedItems] = useState();
  const [totalSum, setTotalSum] = useState(0);
  const [salesTax, setSalesTax] = useState(10);
  const [shippingCost, setShippingCost] = useState(99);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    // Create a map of items for quick lookup
    const objectMap = cartItems.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

    // Update selectedItems based on selectedIds
    const newSelectedItems = selectedIds.map((id) => objectMap[id]);
    setSelectedItems(newSelectedItems);

    const newTotalPrice = newSelectedItems.reduce(
      (sum, item) => sum + item.price,
      0
    );
    const roundedTotalPrice = parseFloat(newTotalPrice.toFixed(2));
    setTotalSum(roundedTotalPrice);

    const newSubTotal = roundedTotalPrice + salesTax + shippingCost;
    setSubTotal(parseFloat(newSubTotal.toFixed(2)));
  }, [selectedIds, salesTax, shippingCost]);

  console.log(selectedItems);

  const checkboxHandler = (e) => {
    let isSelected = e.target.checked;
    let value = parseInt(e.target.value);

    if (isSelected) {
      setSelectedIds([...selectedIds, value]);
    } else {
      setSelectedIds((prevArray) => {
        return prevArray.filter((id) => {
          return id !== value;
        });
      });
    }
  };

  const handleAllChecked = () => {
    if (cartItems.length === selectedIds.length) {
      setSelectedIds([]);
    } else {
      const checkedId = cartItems.map((item) => {
        return item.id;
      });
      setSelectedIds(checkedId);
    }
  };

  console.log(selectedIds);
  return (
    <div className=" flex ">
      <div className=" w-2/3 h-full">
        <h1 className=" text-center text-4xl font-poetsen py-7">Your Cart</h1>
        <div className=" flex items-center h-10 ml-20 px-4">
          <input
            type="checkbox"
            onChange={handleAllChecked}
            checked={cartItems.length === selectedIds.length}
          />
          <p className=" mx-3 text-gray-500 font-bold">
            {cartItems.length === selectedIds.length
              ? "Unselect all"
              : "Select all"}
          </p>
        </div>
        <div className=" ">
          <div className=" space-y-5">
            {cartItems.map((item) => (
              <div
                className=" flex relative items-center h-40 mx-20 rounded-xl border-2 border-[#bbc0be]"
                key={item.id}
              >
                <GiCrossedBones className=" absolute top-2 right-3 text-gray-500" />
                <div className=" ml-4">
                  <input
                    type="checkbox"
                    value={item.id}
                    checked={selectedIds.includes(item.id)}
                    onChange={checkboxHandler}
                  />
                </div>
                <div className=" h-36 rounded-md mx-10 w-36  shadow-xl">
                  <img src={formal} alt=" Photo" />
                </div>{" "}
                <div className=" flex flex-col text-gray-500  space-y-2 justify-center h-36  w-1/2">
                  <h1 className=" text-xl font-bold"> {item.title}</h1>
                  <p>Color:{item.color}</p>
                  <span>Quantity</span>
                </div>
                <div className="flex items-center h-full  mx-10 w-44">
                  <h1 className="text-2xl font-bold "> ${item.price}</h1>
                </div>
              </div>
            ))}

            {/* <div className=" flex relative items-center h-40 mx-20 rounded-xl border-2 border-[#bbc0be]">
              <GiCrossedBones className=" absolute top-2 right-3 text-gray-500" />
              <div className=" h-36 rounded-md mx-14 w-36  shadow-xl">
                <img src={formal} alt=" Photo" />
              </div>{" "}
              <div className=" flex flex-col text-gray-500  space-y-2 justify-center h-36  w-1/2">
                <h1 className=" text-xl font-bold"> Title of the product</h1>
                <p>Color:</p>
                <span>Quantity</span>
              </div>
              <div className="flex items-center h-full  mx-10 w-44">
                <h1 className="text-2xl font-bold "> $98.50</h1>
              </div>
            </div>
            <div className=" flex relative items-center h-40 mx-20 rounded-xl border-2 border-[#bbc0be]">
              <GiCrossedBones className=" absolute top-2 right-3 text-gray-500" />
              <div className=" h-36 rounded-md mx-14 w-36  shadow-xl">
                <img src={formal} alt=" Photo" />
              </div>{" "}
              <div className=" flex flex-col text-gray-500  space-y-2 justify-center h-36  w-1/2">
                <h1 className=" text-xl font-bold"> Title of the product</h1>
                <p>Color:</p>
                <span>Quantity</span>
              </div>
              <div className="flex items-center h-full  mx-10 w-44">
                <h1 className="text-2xl font-bold "> $98.50</h1>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className=" w-1/3  h-full">
        <h1 className=" text-center text-4xl font-poetsen py-7">Subtotal</h1>
        <div className="flex flex-col  mx-10 rounded-xl border-2 border-[#c3d4cb]">
          <h1 className=" text-2xl font-bold text-gray-500 px-3 py-2">Order</h1>

          <div className=" text-gray-500 ">
            <div className="  Ordered Items flex ">
              <div className="Product Title flex flex-col w-2/3  font-semibold px-3 space-y-2 ">
                {selectedItems &&
                  selectedItems.map((item) => (
                    <p key={item.id}>{item.title}</p>
                  ))}
              </div>

              <div className=" Total Price flex items-center w-1/3 ">
                <h1 className=" text-xl font-bold">{totalSum} </h1>
              </div>
            </div>

            <div className=" Sales Tax flex ">
              <p className="w-2/3 font-semibold px-3 py-4">Sales tax</p>
              <p className=" flex items-center text-xl font-bold"> $10</p>
            </div>
            <div className=" Shipping flex ">
              <p className="w-2/3 font-semibold px-3 py-4">Shipping</p>
              <p className=" Shipping Fee flex items-center text-xl font-bold">
                {" "}
                {shippingCost == 0 ? "Free" : `$${shippingCost}`}
              </p>
            </div>
          </div>

          <div className=" Shipping flex ">
            <p className="w-2/3 text-2xl font-bold px-3 text-gray-500">Total</p>
            <p className=" Shipping Fee flex items-center text-xl font-bold text-[#4c9972]">
              {" "}
              ${subTotal}
            </p>
          </div>

          <div className="flex justify-center my-2 py-3">
            <button className=" bg-[#5FBF8F] w-fit text-white py-1 px-3 my-2 rounded-md hover:bg-[#448a67]">
              Proceed to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
