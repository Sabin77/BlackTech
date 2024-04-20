import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import About from "./Components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Body />}></Route> */}
          <Route path="/" element={<About />}></Route>
          {/* <Route path="/projects" element={}></Route>
          <Route path="/contact" element={}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
