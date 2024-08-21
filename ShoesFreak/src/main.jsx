import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/Login.jsx";
import Layout from "./Layout.jsx";
import Register from "./pages/Register.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import ProductLists from "./pages/ProductLists.jsx";
import Cart from "./pages/Cart.jsx";
import { Provider } from "react-redux";
import { store } from "./components/State/Store.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import AddProducts from "./components/AddProducts.jsx";
import KhaltiCheckout from "khalti-checkout-web";
import Addsupplier from "./components/Admin/Addsupplier.jsx";

import Dashboard from "./components/Admin/Dashboard.jsx";
import Suppliers from "./components/Admin/Suppliers.jsx";
import Admin from "./pages/Admin.jsx";

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
        <Route path="addproducts" element={<AddProducts />} />
        <Route path="addsupplier" element={<Addsupplier />} />

        <Route path="checkout" element={<KhaltiCheckout />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="suppliers" element={<Suppliers />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Auth0Provider>
);
