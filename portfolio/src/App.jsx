import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Body />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
