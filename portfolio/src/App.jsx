import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Body />}></Route> */}
          {/* <Route path="/" element={<About />}></Route> */}
          {/* <Route path="/" element={<Projects />}></Route> */}
          <Route path="/" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
