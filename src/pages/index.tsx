import React from "react";
import CardItem from "../components/CardItem/CardItem";
import CustomMarquee from "../components/Marquee/Marquee";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar text="Radu Cius" display={true} />
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
      <div className="xl:h-[calc(100vh_-_55px)] sm:h-auto flex flex-col justify-center items-center relative z-50 bg-[#ffdd4a]">
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

        {/* <img
          src={bgImage}
          alt=""
          className="object-cover w-full h-full absolute -z-10 brightness-50"
        /> */}
      </div>
    </>
  );
}
