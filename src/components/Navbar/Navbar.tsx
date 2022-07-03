import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Offcanvas } from "react-bootstrap";
import { CgClose } from "react-icons/cg";
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
            <a href="#ABOUT" className={listSettings}>
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
            <a href="#ABOUT" className={listSettings}>
              Discover
            </a>
          </li>
        </ul>
      </div>

      {openButton ? (
        <>
          <div className="w-[100%] h-[50%] text-white text-[20px] fixed top-16 bg-black transition-all duration-700 z-30"></div>
          <div className="w-[100%] h-[50%] text-white text-[20px] fixed top-16 bg-black transition-all duration-700 z-30 translate-y-[100%]"></div>
          <div className="overflow-hidden fixed z-40">
            <div className="relative w-[100%] min-h-[35vh] top-[70px] bg-gradient-to-b from-black via-black to-transparent z-[45]">
              <button
                className="top-10 right-10 absolute text-[70px] text-white"
                onClick={() => setOpenButton(!openButton)}
              >
                <CgClose />
              </button>
            </div>
            <section className="star-wars">
              <div className="crawl">
                <div className="title">
                  <p>Episode IV</p>
                  <h1>A New Hope</h1>
                </div>

                <div className="description">
                  <p>
                    It is a period of civil war. Rebel spaceships, striking from
                    a hidden base, have won their first victory against the evil
                    Galactic Empire.
                  </p>

                  <p>
                    During the battle, Rebel spies managed to steal secret plans
                    to the Empire’s ultimate weapon, the DEATH STAR, an armored
                    space station with enough power to destroy an entire planet.
                  </p>

                  <p>
                    Pursued by the Empire’s sinister agents, Princess Leia races
                    home aboard her starship, custodian of the stolen plans that
                    can save her people and restore freedom to the galaxy….
                  </p>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          <div className="w-[100%] h-[0%] text-white text-[20px] fixed top-16 bg-black transition-all duration-700 z-49"></div>
          <div className="w-[100%] h-[0%] text-white text-[20px] fixed top-16 bg-black transition-all duration-700 z-49 translate-y-[1300px]"></div>
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
