import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login.jsx";
import Layout from "./Layout.jsx";
import Register from "./pages/Register.jsx";
import ProductLists from "./pages/ProductLists.jsx";
import Cart from "./pages/Cart.jsx";
import { Provider } from "react-redux";
import { store } from "./components/State/Store.jsx";
import ProductDetails from "./pages/ProductDetails2.jsx";
import KhaltiCheckout from "khalti-checkout-web";
import Addsupplier from "./components/Admin/Addsupplier.jsx";
import Dashboard from "./components/Admin/Dashboard.jsx";

const role = localStorage.getItem("role");

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Layout />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="productlists" element={<ProductLists />} />
        <Route path="cart" element={<Cart />} />
        <Route path="productDetails" element={<ProductDetails />} />
        <Route path="addsupplier" element={<Addsupplier />} />
        <Route path="checkout" element={<KhaltiCheckout />} />

        <Route path="admin" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="stockin/:id" element={<StockInDetails />} />{" "} */}
          {/* Nested route for StockInDetails */}
          {/* <Route path="stockout/:id" element={<StockOutDetails />} />{" "} */}
          {/* Nested route for StockOutDetails */}
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="254458563396-vj79elove1hropa44crgupi3f069vkrr.apps.googleusercontent.com">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </GoogleOAuthProvider>
);
