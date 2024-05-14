import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const api = JSON.stringify(import.meta.env);
  return (
    <>
      <Header />
      <Outlet api={api} />
      <Footer />
    </>
  );
}

export default App;
