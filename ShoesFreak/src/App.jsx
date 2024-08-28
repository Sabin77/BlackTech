import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <>
      {role === "admin" ? (
        <Dashboard />
      ) : (
        <>
          <Navbar user={user} cartAmount={cartAmount} />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
