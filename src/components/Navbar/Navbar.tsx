import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Offcanvas } from "react-bootstrap";
import { CgClose } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import bgColor from "../CommercePlace/bgColor.jpg";

export default function Navbar(props: any) {
  let listSettings =
    "h-1/3 flex items-center transition text-[18px] font-medium duration-300 ease-in-out shadow-[0_0_0_0_black] no-underline text-black hover:shadow-[0_1px_0_0_black]";
  let canvasSettings =
    "text-white no-underline transition duration-300 hover:opacity-50";
  const [openNav, setOpenNav] = useState(false);
  const [openButton, setOpenButton] = useState(false);

  return (
    <>
      <div className="w-[100%] h-16 flex flex-row font-meaven top-0 sticky z-50 bg-white xl:justify-start justify-center">
        <video
          src={process.env.PUBLIC_URL + "/images/videoColor.mp4"}
          className="object-cover w-full h-full absolute opacity-25 -z-10 pointer-events-none"
          autoPlay
          muted
          loop={true}
          playsInline
        ></video>
        <div className="xl:ml-16 h-full bg-black  text-white w-52 flex justify-center transition ease-in duration-1000 font-trispace font-extralight items-center cursor-pointer">
          <span className="h-full text-[18px] w-full border-t-black transition ease-in-out duration-300 hover:border-l-black hover:bg-[#ff90e8] hover:text-black flex justify-center items-center">
            {props.display === true ? (
              <button
                className="text-white no-underline h-full w-full flex justify-center items-center"
                onClick={() => setOpenButton(!openButton)}
              >
                {props.text}
              </button>
            ) : (
              <a
                href="/"
                className="text-white no-underline h-full w-full flex justify-center items-center"
              >
                {props.text}
              </a>
            )}
          </span>
        </div>
        <span className="xl:hidden absolute top-5 right-5">
          <button>
            <GiHamburgerMenu onClick={() => setOpenNav(true)} />
          </button>
        </span>
        <ul className="xl:flex xl:flex-row xl:gap-20 xl:h-full xl:justify-center xl:items-center xl:text-center hidden xl:shrink w-[69%] justify-center">
          <li className="xl:h-full xl:flex xl:items-center hidden">
            <a href="/tutorials" className={listSettings}>
              Tutorials
            </a>
          </li>
          <li className="xl:h-full xl:flex xl:items-center hidden">
            <a href="#ABOUT" className={listSettings}>
              Pricing
            </a>
          </li>
          <li className="xl:h-full xl:flex xl:items-center hidden">
            <a href="/metaverse" className={`ordinal ${listSettings}`}>
              <span>University</span>
              <span className="absolute mb-4 text-[14px] ml-7 text-[#993333]">
                metaverse
              </span>
            </a>
          </li>
          <li className="xl:h-full xl:flex xl:items-center hidden">
            <a href="#ABOUT" className={listSettings}>
              Blog
            </a>
          </li>
          <li className="xl:h-full xl:flex xl:items-center hidden">
            <a href="http://192.168.1.103:80" className={listSettings}>
              Discover
            </a>
          </li>
        </ul>
      </div>

      {openButton ? (
        <>
          <div className="w-[100%] h-[50%] text-white text-[20px] fixed top-16 bg-black transition-all duration-700 z-[44]"></div>
          <div className="w-[100%] h-[100%] text-white text-[20px] fixed top-16 bg-black transition-all duration-700 z-[44] translate-y-[50%] "></div>
          <div className="overflow-hidden fixed z-[44] w-[100%]  transition delay-1000 ease-in-out duration-700">
            <div className="relative w-[100%] min-h-[35vh] top-[30px] bg-gradient-to-b from-black via-black to-transparent z-[45]">
              <button
                className="top-20 right-4 absolute text-[70px] text-white"
                onClick={() => setOpenButton(!openButton)}
              >
                <CgClose />
              </button>
            </div>
            <section className="star-wars">
              <div className="crawl">
                <div className="title">
                  <p>Radu Cius</p>
                  <h1>Environment Artist</h1>
                </div>

                <div className="description">
                  <span className="w-auto">
                    Experience working with game editors(UE4)(Unity) and Houdini
                    r&d.
                  </span>
                  <span className="flex justify-center text-[200px] ">
                    <AiFillInstagram className="text-white hover:text-black cursor-pointer" />
                  </span>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          <div className="w-[100%] h-[0%] text-white text-[20px] fixed top-16 bg-black transition-all duration-700 z-30"></div>
          <div className="w-[100%] h-[0%] text-white text-[20px] fixed top-16 bg-black transition-all duration-700 z-30 translate-y-[1080px]"></div>
          <div className="overflow-hidden fixed z-[44] h-[0%] transition-all duration-700 translate-y-[1300px]"></div>
        </>
      )}

      <Offcanvas
        show={openNav}
        onHide={() => setOpenNav(false)}
        placement="end"
        scroll={false}
        style={{
          backgroundColor: "black",
          color: "white",
          width: "275px",
          transition: "ease-in-out .5s",
        }}
      >
        <Offcanvas.Header>
          <span className="absolute top-5 right-5">
            <button>
              <CgClose
                onClick={() => setOpenNav(false)}
                style={{ fontSize: "22px" }}
              />
            </button>
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <ul className="flex flex-col items-center justify-center text-white w-full h-64 font-meaven text-[18px] gap-3 opacity-90">
              <li>
                <a href="" className={canvasSettings}>
                  ABOUT
                </a>
              </li>
              <li>
                <a href="" className={canvasSettings}>
                  CONTACT
                </a>
              </li>
              <li>
                <a href="" className={canvasSettings}>
                  HELP
                </a>
              </li>
              <li>
                <a href="" className={canvasSettings}>
                  BLOG
                </a>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
