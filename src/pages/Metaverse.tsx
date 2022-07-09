import React from "react";
import "./Metaverse.css";
export default function Metaverse() {
  const names = [
    { id: 1, letter: "H", word: "HOUDINI" },
    { id: 2, letter: "U", word: "UNREAL ENGINE" },
    { id: 3, letter: "B", word: "BLENDER" },
  ];

  return (
    <>
      <div className="min-h-[calc(100vh_-_55px)] bg-slate-500 flex justify-center items-center">
        <div
          className={`font-paytone grid xl:grid-cols-${names.length.toString()} grid-cols-1 text-white gap-10 place-items-center justify-items-center w-[100%] xl:h-[750px] h-[1250px] py-[50px]`}
        >
          {names.map((item, index) => (
            <div
              className="flex flex-row justify-center items-center relative  h-full w-[75%] overflow-hidden bg-[#fcc617] rounded-xl"
              key={index}
            >
              <span
                className={
                  "text-[25vw] z-[20] absolute hover:-translate-x-[1500px] w-[9999px] h-full transition ease-in duration-300 flex justify-center items-center before:content-['" +
                  `${"GG"}` +
                  "']" +
                  " before:text-black before:absolute before:z-[30] before:w-[3000px] before:transition before:ease-in before:duration-300 before:text-[30px] before:h-full before:flex before:justify-center before:items-center before:opacity-100 before:translate-x-[800px] hover:before:translate-x-[50%] hover:before:z-20"
                }
              >
                {item.letter}
              </span>
              {/* <span className="z-10 opacity-100 absolute translate-x-[500px] hover:opacity-100 hover:translate-x-0 w-[3000px] h-full transition ease-in duration-300 border-2 border-teal-500 flex justify-center items-center">
                  {item.word}
                </span> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
