import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CheckOut from "./components/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { total } from "./components/State/Slice/CartSlice";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "./config/Config";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const navigate = useNavigate();
  const { isOpen } = useSelector((state) => state.checkout);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserName = async (uid) => {
      const userDocRef = doc(db, "users", uid);
      const userDocSnap = await getDoc(userDocRef);
      console.log(uid);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUser(userData.full_name);
      } else {
        setUser("Guest");
      }
    };
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        fetchUserName(currentUser.uid);
      } else {
        setUser("Guest");
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  console.log(user);
  return (
    <>
      <Navbar user={user} />

      {isOpen && <CheckOut />}

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
