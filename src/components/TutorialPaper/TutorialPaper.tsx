import React from "react";
import data from "../TutorialPaper/dataTutorials";
import Carousel from "react-bootstrap/Carousel";

export default function TutorialPaper(props: any) {
  return (
    <>
      <div className="xl:h-[calc(100vh_-_64px)] flex flex-col relative z-31 bg-slate-300">
        <div className="grid grid-cols-2 h-[100%] w-[100%]">
          <div className="col-span-2 w-[100%] h-[100px] flex justify-center items-center ">
            <span className="font-paytone xl:text-[2vw] text-[2rem] text-black text-center leading-10">
              {props.name}
            </span>
          </div>
          <div className="w-[100%] h-[500px] flex items-center justify-center text-center text-black ">
            <span className=" p-28">{props.description}</span>
          </div>
          <div className=" w-[100%] h-[500px] flex justify-center items-center">
            <iframe
              src={props.video}
              frameBorder="0"
              allowFullScreen
              className="w-[75%] h-[75%] "
            ></iframe>
          </div>

          <div className="col-span-2 w-[100%] flex justify-center items-center relative pb-6">
            <Carousel fade>
              {props.photos.map((photo: any) => (
                <Carousel.Item interval={1500}>
                  <img
                    src={photo}
                    alt="First slide"
                    className="h-[250px] w-[550px] object-cover border-2 border-black"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
