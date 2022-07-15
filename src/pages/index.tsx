import React, { useRef, useEffect, useState } from "react";
import CardItem from "../components/CardItem/CardItem";
import CustomMarquee from "../components/Marquee/Marquee";
import Navbar from "../components/Navbar/Navbar";
import data from "../components/CardItem/dataCards";

let section =
  "flex flex-row text-white font-trispace bg-transparent z-[5] w-auto xl:h-auto h-[80px] relative before:content-[''] before:flex  before:bg-white before:absolute before:z-[10] before:left-0 before:bottom-[50%] before:w-[100%] before:h-[0px] before:transition-all before:ease-in-out hover:before:bottom-0 hover:before:h-[100%] hover:text-black xl:border-b-[1px] xl:border-white border-b-[1px] border-white";
let container =
  "w-[80%] h-full flex items-center z-[20] hover:text-black hover:translate-x-[20px] transition-all duration-300 ease-in-out";
let mLeft = "ml-9";

const sections = [
  "Work",
  "About",
  "Services",
  "Verticals",
  "Careers",
  "Ideas",
  "News",
  "Contact",
];

export default function Home() {
  const myRef: any = useRef(null);

  const [dark, setDark] = useState(false);

  const onWindowResize = () => {
    const { top, height } = myRef.current.getBoundingClientRect();

    if (top - height - 55 > 0) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onWindowResize);

    return () => {
      window.removeEventListener("scroll", onWindowResize);
    };
  }, []);

  return (
    <>
      <Navbar text="Radu Cius" display={true} />
      <div className="min-h-[calc(100vh_-_55px)] flex flex-col justify-center items-center relative z-31 ">
        <video
          src={process.env.PUBLIC_URL + "/images/bgvideo.mp4"}
          className="object-cover w-full h-full absolute -z-10 brightness-50 pointer-events-none"
          autoPlay
          muted
          loop={true}
          playsInline
        ></video>
      </div>
      <div className="flex w-full h-auto justify-center bg-black z-10 items-center">
        <CustomMarquee />
      </div>
      <div className="min-h-[calc(100vh_-_55px)] flex flex-col justify-center items-center z-30 bg-[#ffdd4a] overflow-hidden">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-white gap-5 place-content-center place-items-center justify-items-center xl:py-0 xl:pb-0 py-4 pb-4">
          {data.map((card) => (
            <CardItem key={card.id} {...card} />
          ))}
        </div>
      </div>

      <div
        className={`h-[calc(100vh_+_75vh)] flex flex-col items-center w-[100%] transition-all duration-300 ${
          dark ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <span className="min-h-screen font-paytone w-[100%] sticky top-0 flex justify-center items-center select-none text-[13.5vw]">
          <p>HELLO</p>
          <p>WORLD</p>
        </span>
        <div className="flex justify-center flex-col items-center h-[50vh] w-full sticky">
          <div className="w-[200px] h-[200px] bg-yellow-500 rounded-full flex justify-center items-center cursor-pointer">
            Hi
          </div>
        </div>
      </div>

      <div
        className="h-[calc(100vh_-_55px)] w-full grid xl:grid-cols-2 grid-rows-1 relative border-b-[1px] border-2 border-white"
        ref={myRef}
      >
        <div className="flex flex-col h-full bg-black justify-between items-center">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/Escalator/Procedural Modeling 4.jpg"
            }
            className="object-contain min-h-[300px]"
            alt=""
          />
          <div className="text-white flex justify-center items-center shrink h-auto flex-1">
            <span className="pl-5 pb-1 pr-5 pt-2 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              minima ratione quam est nostrum neque dolor, atque harum porro
              cumque? Sed dignissimos ex laudantium facere excepturi atque ipsam
              deleniti maxime. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Praesentium culpa atque illum, aut autem enim
              suscipit quibusdam at minus sint labore omnis facilis quis
              corrupti iusto inventore modi? Dolore, placeat. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Mollitia placeat delectus
            </span>
          </div>
        </div>
        <div className="grid grid-rows-[9] xl:w-[100%] xl:h-[100%] h-auto text-[35px] bg-black xl:border-l-[1px] xl:border-white">
          {sections.map((element) => (
            <section className={section}>
              <div className={container}>
                <span className={mLeft}>{element}</span>
              </div>
            </section>
          ))}
          <section className={section}>
            <div className={container}>
              <span className={mLeft}>Icons</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

// TODO: {
//   1. Adaptive StarWars
//   2. Adaptive by height
//   3. Butonul HUB
// }