import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CommercePlace from "./components/CommercePlace/CommercePlace";
import Banner from "./components/Banner/Banner";
import Escalator from "./components/Escalator/Escalator";
function App() {
  return (
    <div className="flex flex-col text-xl min-h-screen font-montserrat">
      <Navbar />
      <CommercePlace />
      <Escalator />
    </div>
  );
}

export default App;
