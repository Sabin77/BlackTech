import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CheckOut from "./components/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { total } from "./components/State/Slice/CartSlice";
import { useEffect } from "react";

function App() {
  const { isOpen } = useSelector((state) => state.checkout);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);
  return (
    <>
      <Navbar />

      {isOpen && <CheckOut />}
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
