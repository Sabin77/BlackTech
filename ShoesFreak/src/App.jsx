import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { total } from "./components/State/Slice/CartSlice";
import { useEffect, useState, createContext, useContext } from "react";
import { db, auth } from "./config/Config";
import { onAuthStateChanged } from "firebase/auth";
import CartContext from "@/CartContext";
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

function App() {
  const [user, setUser] = useState(null);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [uid, setUid] = useState();
  const navigate = useNavigate();
  // const { isOpen } = useSelector((state) => state.checkout);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUid(currentUser.uid);

        await getCartProducts(currentUser.uid);
        const cartCollectionRef = collection(db, "Cart" + currentUser.uid);
        const unsubscribe = onSnapshot(cartCollectionRef, (snapshot) => {
          const newCartProducts = snapshot.docs.map((doc) => ({
            ...doc.data(),
            Id: doc.id,
          }));
          setCartProducts(newCartProducts);

          setCartAmount(newCartProducts.length);
          console.log(cartAmount);
        });
        return () => unsubscribe();
      } else {
        setUid(null);
        setUser("Guest");
        navigate("/login");
      }
    });
    return () => unsubs();
  }, [navigate]);

  const getCartProducts = async (uid) => {
    try {
      const cartCollectionName = `Cart${uid}`;
      const querySnapshot = await getDocs(collection(db, cartCollectionName));
      const productArray = [];
      querySnapshot.forEach((doc) => {
        productArray.push({ ...doc.data(), Id: doc.id });
      });
      setCartProducts(productArray);
      setCartAmount(productArray.length);
      console.log(cartAmount);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const fetchUserName = async (uid) => {
      const userDocRef = doc(db, "users", uid);
      const userDocSnap = await getDoc(userDocRef);

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
        // navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const addToCart = async (product) => {
    if (uid !== null) {
      const qty = 1;
      const Product = {
        ...product,
        qty: qty,
        TotalProductPrice: qty * product.discounted_price,
      };

      const cartCollectionRef = collection(db, "Cart" + uid);
      const productDocRef = doc(cartCollectionRef, product.Id);

      try {
        await setDoc(productDocRef, Product);
        console.log("Successfully added to the cart");

        console.log(cartAmount);
      } catch (error) {
        console.error("Error while adding to the cart: ", error);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <CartContext.Provider value={addToCart}>
        <Navbar user={user} cartAmount={cartAmount} />

        {/* {isOpen && <CheckOut />} */}

        <Outlet />

        <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
