import * as React from "react";
import Marquee from "react-fast-marquee";
export default function CustomMarquee() {
  return (
    <>
      <Marquee
        loop={0}
        speed={30}
        style={{
          width: "100%",
          height: "100px",
          background: "transparent",
          color: "white",
          fontSize: "70px",
          overflow: "hidden",
        }}
        gradientWidth={0}
      >
        <span className="font-paytone text-[#eee5e9]">
          GAME-BASED LEARNING • HOUDINI TUTORIAL • UE5. GENERATORS • HDA.
          PROCEDURAL ANIMATION • GAME-BASED LEARNING • HOUDINI TUTORIAL • UE5 •
          GENERATORS • HDA • PROCEDURAL ANIMATION •
        </span>
      </Marquee>
    </>
  );
}
