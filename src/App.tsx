import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages";
import Banner from "./components/Banner/Banner";
import Metaverse from "./pages/Metaverse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col text-xl min-h-screen font-montserrat">
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
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
