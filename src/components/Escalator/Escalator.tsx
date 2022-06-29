import React from "react";
import bgEscalator from "../CommercePlace/scaleBg.jpg";

export default function Escalator() {
  return (
    <>
      <div className=" min-h-screen bg-slate-300">
        <img
          src={bgEscalator}
          alt=""
          className="object-cover w-full h-full absolute -z-10 brightness-50 pointer-events-none"
        />
      </div>
    </>
  );
}
