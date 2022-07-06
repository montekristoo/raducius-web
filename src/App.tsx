import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages";
import Banner from "./components/Banner/Banner";
import Metaverse from "./pages/Metaverse";
import Tutorials from "./pages/Tutorials";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/metaverse"
            element={
              <>
                <Navbar text="Home" />
                <Metaverse />
              </>
            }
          />
          <Route
            path="/tutorials"
            element={
              <>
                <Navbar text="Home" />
                <Tutorials />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
