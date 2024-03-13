import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;
