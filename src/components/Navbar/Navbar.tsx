import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Offcanvas } from "react-bootstrap";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  let listSettings =
    "border-white border-b-2 border-t-2 h-1/3 flex items-center transition text-[18px] font-bold duration-300 ease-in-out no-underline text-black hover:border-white hover:border-b-3 hover:border-t-2";
  let canvasSettings =
    "text-white no-underline transition duration-300 hover:opacity-50";
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className="flex max-w-full justify-center items-center h-[11vw] text-black font-paytone text-[8.9vw] border-2 border-b-black leading-none">
        <span className="2xl:mb-9 md:mb-3">HOUDINI TUTORIALS</span>
      </div>

      <div className="w-[100%] h-16 flex flex-row font-meaven top-0 sticky z-50 bg-white xl:justify-start justify-center">
        <div className="xl:ml-16 h-full bg-black  text-white w-52 flex justify-center transition ease-in duration-200 font-trispace items-center cursor-pointer">
          <span className="h-full text-[18px] w-full border-t-black transition ease-in-out duration-300 hover:border-l-black hover:bg-[#ff90e8] hover:text-black flex justify-center items-center">
            Radu Cius
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
              Features
            </a>
          </li>
          <li className="xl:h-full xl:flex xl:items-center hidden">
            <a href="#ABOUT" className={listSettings}>
              Pricing
            </a>
          </li>
          <li className="xl:h-full xl:flex xl:items-center hidden">
            <a href="#ABOUT" className={listSettings}>
              University
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
