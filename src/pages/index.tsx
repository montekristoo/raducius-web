import React, { useRef, useEffect, useState } from "react";
import CardItem from "../components/CardItem/CardItem";
import CustomMarquee from "../components/Marquee/Marquee";
import Navbar from "../components/Navbar/Navbar";
import { AiFillInstagram } from "react-icons/ai";

export default function Home() {
  const myRef: any = useRef(null);

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

  const [scrollPosition, setScrollPosition] = useState(0);
  const [dark, setDark] = useState(false);

  const onWindowResize = () => {
    const { top } = myRef.current.getBoundingClientRect();
    console.log(top);

    setScrollPosition(top);
    if (top < 930) {
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
      {/* <div className="sticky text-[300px] flex justify-center items-center top-0 z-50 ">
        {" "}
        {scrollPosition}
      </div> */}
      <div className="h-[calc(100vh_-_55px)] flex flex-col justify-center items-center relative z-31 ">
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
      <div className="xl:h-[calc(100vh_-_20px)] sm:h-auto flex flex-col justify-center items-center z-30 bg-[#ffdd4a] ">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-white gap-5 place-content-center place-items-center justify-items-center xl:py-0 xl:pb-0 py-4 pb-4">
          <CardItem
            id={1}
            photo={
              process.env.PUBLIC_URL +
              "/images/Procedural Modeling in Houdini 31.jpg"
            }
            name="Houdini Tutorial Procedural Modelling [escalator]"
            adress="https://rart.gumroad.com/l/ProceduralModeling?fbclid=IwAR1yk02iVrxFhDBSu4Ye5ycvPUZQBnOsOzT_zBJIdJid24NRBxi7f4wZ5WQ"
          />
          <CardItem
            id={2}
            photo={process.env.PUBLIC_URL + "/images/Castle Houdini.jpg"}
            name="Houdini Tutorial Procedural Japanese Castle in Unreal Engine 4"
            adress="https://rart.gumroad.com/l/ProceduralCastle?fbclid=IwAR16dl0-svo9D8CsYfeTXfiM9NElHREtMBt8c-kDTtLXHOAjdonp1q7Boyw"
          />
          <CardItem
            id={3}
            photo={process.env.PUBLIC_URL + "/images/ProceduralLevel.png"}
            name="Houdini Tutorial Procedural Level Design in Unreal Engine 4"
            adress="https://rart.gumroad.com/l/LVLDesign1?fbclid=IwAR2qhlAjkhN2EHNoNCbZ0YAb6AM8wB4hMOtPEov4Qio-EwyFa614NDfBhAg"
          />
          <CardItem
            id={4}
            photo={process.env.PUBLIC_URL + "/images/Brush Plant.jpg"}
            name="Houdini Tutorial Procedural Bush Plant in Unreal Engine 4"
            adress="https://rart.gumroad.com/l/dCEnaM?fbclid=IwAR2-a1G27LJzoK-T_cU_YIwrJqyuAUKxANJYZYupOE-086JoZYhvqXz815Y"
          />
        </div>
      </div>

      <div
        className={`h-[2160px] flex flex-col items-center w-full transition-all duration-300 ${
          dark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <span className="min-h-screen font-paytone w-full sticky top-0 flex justify-center items-center text-[13.5vw]">
          <p>HELLO</p>
          <p>WORLD</p>
        </span>
        <div className="flex justify-center items-center min-h-screen w-full sticky top-[1080px]">
          <div className="w-[200px] h-[200px] bg-yellow-500 rounded-full flex justify-center items-center cursor-pointer">
            Hi
          </div>
        </div>
      </div>

      {/* <div className="h-[200px] w-full flex justify-center items-center">
        <img
          src={process.env.PUBLIC_URL + "/images/Castle Houdini.jpg"}
          alt=""
          className="w-full h-full object-cover"
        />
      </div> */}

      <div
        className="xl:h-[calc(100vh_-_55px)]  w-full grid xl:grid-cols-2 grid-rows-1 relative border-b-[1px] border-2 border-white"
        ref={myRef}
      >
        <div className="flex flex-col w-[100%] h-[100%] bg-black justify-between items-center">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/Escalator/Procedural Modeling 4.jpg"
            }
            className="w-[50%] h-[50%] object-cover flex"
            alt=""
          />
          <div className="text-white h-[200px] flex justify-center items-center">
            Scris
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
