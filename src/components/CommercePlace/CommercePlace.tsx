import React from "react";
import bgImage from "./background.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CardItem from "../CardItem/CardItem";
import Scaling from "../CommercePlace/Procedural Modeling in Houdini 31.jpg";
import Castle from "../CommercePlace/Castle Houdini.jpg";
import LevelDesign from "../CommercePlace/ProceduralLevel.png";
import BrushPlant from "../CommercePlace/Brush Plant.jpg";

export default function CommercePlace() {
  return (
    <>
      <div className="xl:h-[calc(100vh_-_75px)] sm:h-auto flex flex-col justify-center items-center relative z-30">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-white gap-5 place-content-center place-items-center justify-items-center md:py-4 md:pb-4 sm:py-4 sm:pb-4">
          <CardItem
            id={1}
            photo={Scaling}
            name="Houdini Tutorial Procedural Modelling [escalator]"
            adress="https://rart.gumroad.com/l/ProceduralModeling?fbclid=IwAR1yk02iVrxFhDBSu4Ye5ycvPUZQBnOsOzT_zBJIdJid24NRBxi7f4wZ5WQ"
          />
          <CardItem
            id={2}
            photo={Castle}
            name="Houdini Tutorial Procedural Japanese Castle in Unreal Engine 4"
            adress="https://rart.gumroad.com/l/ProceduralCastle?fbclid=IwAR16dl0-svo9D8CsYfeTXfiM9NElHREtMBt8c-kDTtLXHOAjdonp1q7Boyw"
          />
          <CardItem
            id={3}
            photo={LevelDesign}
            name="Houdini Tutorial Procedural Level Design in Unreal Engine 4"
            adress="https://rart.gumroad.com/l/LVLDesign1?fbclid=IwAR2qhlAjkhN2EHNoNCbZ0YAb6AM8wB4hMOtPEov4Qio-EwyFa614NDfBhAg"
          />
          <CardItem
            id={4}
            photo={BrushPlant}
            name="Houdini Tutorial Procedural Bush Plant in Unreal Engine 4"
            adress="https://rart.gumroad.com/l/dCEnaM?fbclid=IwAR2-a1G27LJzoK-T_cU_YIwrJqyuAUKxANJYZYupOE-086JoZYhvqXz815Y"
          />
        </div>
        <video
          src={require("../CommercePlace/bgvideo.mp4")}
          className="object-cover w-full h-full absolute -z-10 brightness-50 pointer-events-none"
          autoPlay
          muted
          loop={true}
          playsInline
        ></video>
        {/* <img
          src={bgImage}
          alt=""
          className="object-cover w-full h-full absolute -z-10 brightness-50"
        /> */}
      </div>
    </>
  );
}
