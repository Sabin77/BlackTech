import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import SingleDetails from "./Components/SingleDetails";

function App() {
  return (
    // <AddItem />

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/products/:id" element={<SingleDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
