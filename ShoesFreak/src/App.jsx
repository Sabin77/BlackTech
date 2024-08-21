import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { total } from "./components/State/Slice/CartSlice";
import { useEffect, useState, createContext, useContext } from "react";
import CartContext from "@/CartContext";
import Dashboard from "./components/Admin/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [uid, setUid] = useState();
  const navigate = useNavigate();
  // const { isOpen } = useSelector((state) => state.checkout);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const role = localStorage.getItem("role");
  console.log(role);

  return (
    <>
      {role === "admin" ? (
        <Dashboard />
      ) : (
        <CartContext.Provider>
          <Navbar user={user} cartAmount={cartAmount} />
          <Outlet />
          <Footer />
        </CartContext.Provider>
      )}
    </>
  );
}

export default App;
