import * as React from "react";

export default function Banner() {
  return (
    <>
      <div className="flex max-w-full justify-center items-center h-[11vw] text-black font-paytone text-[8.9vw] border-b-2 border-black leading-none">
        <span className="2xl:mb-9 md:mb-3">HOUDINI TUTORIALS</span>
        <img
          src={process.env.PUBLIC_URL + "/images/bgColor.jpg"}
          alt=""
          className="object-cover w-[100%] h-[210px] absolute -z-10 opacity-25 pointer-events-none"
        />
      </div>
    </>
  );
}
