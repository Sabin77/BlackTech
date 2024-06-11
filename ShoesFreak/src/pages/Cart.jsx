import React, { useState, useEffect } from "react";
import { GiCrossedBones } from "react-icons/gi";
import {
  doc,
  getDocs,
  setDoc,
  collection,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "@/config/Config";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import Checkout from "@/components/KaltiCheckout";
import KhaltiPayment from "@/components/KaltiCheckout";
import CashOnDelivery from "@/components/CashOnDelivery";

function Cart() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [salesTax, setSalesTax] = useState(10);
  const [shippingCost, setShippingCost] = useState(99);
  const [subTotal, setSubTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        getCartProducts(userId);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const getCartProducts = async (userId) => {
    try {
      const cartCollectionName = `Cart${userId}`;
      const querySnapshot = await getDocs(collection(db, cartCollectionName));

      const productArray = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        productArray.push({ ...doc.data(), Id: doc.id });
      });
      setCartProducts(productArray);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const objectMap = cartProducts.reduce((acc, item) => {
      acc[item.Id] = item;
      return acc;
    }, {});

    const newSelectedItems = selectedIds.map((Id) => objectMap[Id]);
    setSelectedItems(newSelectedItems);

    const newTotalPrice = newSelectedItems.reduce(
      (sum, item) => sum + item.discounted_price,
      0
    );
    const roundedTotalPrice = parseFloat(newTotalPrice.toFixed(2));
    setTotalSum(roundedTotalPrice);

    const newSubTotal = roundedTotalPrice + salesTax + shippingCost;
    setSubTotal(parseFloat(newSubTotal.toFixed(2)));
  }, [selectedIds, cartProducts, salesTax, shippingCost]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const checkboxHandler = (e) => {
    const isSelected = e.target.checked;
    const value = e.target.value;
    console.log(value);

    if (isSelected) {
      setSelectedIds([...selectedIds, value]);
    } else {
      setSelectedIds((prevArray) => prevArray.filter((Id) => Id !== value));
    }
  };

  const handleAllChecked = () => {
    if (cartProducts.length === selectedIds.length) {
      setSelectedIds([]);
    } else {
      const checkedIds = cartProducts.map((item) => item.Id);
      setSelectedIds(checkedIds);
    }
  };

  const handleCartProductIncrease = async (item) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const productRef = doc(db, `Cart${userId}`, item.Id);
        const updatedProduct = {
          ...item,
          qty: item.qty + 1,
          TotalProductPrice: (item.qty + 1) * item.discounted_price,
        };

        await updateDoc(productRef, updatedProduct);
        setCartProducts((prevProducts) =>
          prevProducts.map((prod) =>
            prod.Id === item.Id ? updatedProduct : prod
          )
        );
      } else {
        console.log("User is not logged in to increment");
      }
    } catch (error) {
      console.error("Error updating quantity: ", error);
    }
  };

  const handleCartProductDecrease = async (item) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const productRef = doc(db, `Cart${userId}`, item.Id);
        const updatedProduct = {
          ...item,
          qty: item.qty > 1 ? item.qty - 1 : item.qty,
          TotalProductPrice:
            (item.qty > 1 ? item.qty - 1 : item.qty) * item.discounted_price,
        };
        await updateDoc(productRef, updatedProduct);
        setCartProducts((prevProducts) =>
          prevProducts.map((prod) =>
            prod.Id === item.Id ? updatedProduct : prod
          )
        );
      } else {
        console.log("User is not logged in to increment");
      }
    } catch (error) {
      console.error("Error updating quantity: ", error);
    }
  };

  const handleDeleteCartItem = async (item) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const productRef = doc(db, `Cart${userId}`, item.Id);
        await deleteDoc(productRef);

        getCartProducts(userId).then(() => {
          setSelectedIds(selectedIds.filter((id) => id !== item.Id));
        });
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="flex min-h-96">
      {cartProducts.length === 0 ? (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-4xl font-poetsen py-7">No products in the cart</p>
        </div>
      ) : (
        <>
          <div className="w-2/3 h-full">
            <h1 className="text-center text-4xl font-poetsen py-7">
              Your Cart
            </h1>

            <div className="flex items-center h-10 ml-20 px-4">
              <input
                type="checkbox"
                onChange={handleAllChecked}
                checked={cartProducts.length === selectedIds.length}
              />
              <p className="mx-3 text-gray-500 font-bold">
                {cartProducts.length === selectedIds.length
                  ? "Unselect all"
                  : "Select all"}
              </p>
            </div>
            <div className="space-y-5">
              {cartProducts.map((item) => (
                <div
                  className="flex relative items-center h-40 mx-20 rounded-xl border-2 border-[#bbc0be]"
                  key={item.Id}
                >
                  <GiCrossedBones
                    className="absolute top-2 right-3 text-gray-500 cursor-pointer"
                    onClick={() => handleDeleteCartItem(item)}
                  />
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      value={item.Id}
                      checked={selectedIds.includes(item.Id)}
                      onChange={checkboxHandler}
                    />
                  </div>
                  <div className="h-36 rounded-md mx-10 w-36 shadow-xl">
                    <img src={item.url} alt="Photo" />
                  </div>
                  <div className="flex flex-col text-gray-500 space-y-2 justify-center h-36 w-1/2">
                    <h1 className="text-xl font-bold">{item.title}</h1>
                    <p>Color: Red, Blue, Black, White</p>
                    <div className=" flex items-center">
                      <span>Quantity: </span>
                      <div
                        className=" m-2 cursor-pointer"
                        onClick={() => handleCartProductDecrease(item)}
                      >
                        <FaMinus />
                      </div>
                      <div className=" border-2 w-8 h-8 text-center">
                        {item.qty}
                      </div>
                      <div
                        className=" m-2 cursor-pointer"
                        onClick={() => handleCartProductIncrease(item)}
                      >
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center h-full mx-10 w-44">
                    <h1 className="text-2xl font-bold">
                      ${item.TotalProductPrice}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 h-full">
            <h1 className="text-center text-4xl font-poetsen py-7">Subtotal</h1>
            <div className="flex flex-col mx-10 rounded-xl border-2 border-[#c3d4cb]">
              <h1 className="text-2xl font-bold text-gray-500 px-3 py-2">
                Order
              </h1>
              <div className="text-gray-500">
                <div className="Ordered Items flex">
                  <div className="Product Title flex flex-col w-2/3 font-semibold px-3 space-y-2">
                    {selectedItems &&
                      selectedItems.map((item) => (
                        <p key={item.id}>{item.title}</p>
                      ))}
                  </div>
                  <div className="Total Price flex items-center w-1/3">
                    <h1 className="text-xl font-bold">${totalSum}</h1>
                  </div>
                </div>
                <div className="Sales Tax flex">
                  <p className="w-2/3 font-semibold px-3 py-4">Sales tax</p>
                  <p className="flex items-center text-xl font-bold">$10</p>
                </div>
                <div className="Shipping flex">
                  <p className="w-2/3 font-semibold px-3 py-4">Shipping</p>
                  <p className="Shipping Fee flex items-center text-xl font-bold">
                    {shippingCost === 0 ? "Free" : `$${shippingCost}`}
                  </p>
                </div>
              </div>
              <div className="Shipping flex">
                <p className="w-2/3 text-2xl font-bold px-3 text-gray-500">
                  Total
                </p>
                <p className="Shipping Fee flex items-center text-xl font-bold text-[#4c9972]">
                  ${subTotal}
                </p>
              </div>
              <div className="flex justify-center my-1  py-3">
                <KhaltiPayment />
              </div>
              <div className="flex justify-center my-1 py-3">
                <CashOnDelivery />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
