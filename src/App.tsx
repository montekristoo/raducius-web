import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages";
import Banner from "./components/Banner/Banner";
import Metaverse from "./pages/Metaverse";
import Tutorials from "./pages/Tutorials";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";


function App() {
  return (
    <>
      <div className="flex flex-col text-xl min-h-screen font-montserrat">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Home />
                </>
              }
            />
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
      </div>
    </>
  );
}

export default App;
