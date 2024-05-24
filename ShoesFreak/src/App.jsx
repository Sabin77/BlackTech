import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurProducts from "./pages/OurProducts";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
