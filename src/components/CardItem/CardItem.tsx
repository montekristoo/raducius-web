import React from "react";
import { ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import currencyFormat from "../../utils/currencyFormat";
import { AiFillStar } from "react-icons/ai";

interface CardItemProps {
  id: number;
  photo: string;
  name: string;
  adress: string;
}

export default function CardItem(props: CardItemProps) {
  const boxMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget;
    box.style.boxShadow = "4px 4px 0px 0px #ffc900";
    box.style.border = "0px";
    box.style.transform = "translate(-5px, -5px)";
    box.style.transition = ".3s ease-in-out";
  };

  const boxMouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget;
    box.style.transform = "translateY(0px)";
    box.style.transition = ".3s ease-in-out";
    box.style.boxShadow = box.style.outline = "0px 0px 0px 0px white";
    box.style.border = "1px solid #ff90e8";
  };

  return (
    <>
      <Card
        style={{
          width: "300px",
          height: "480px",
          backgroundColor: "#151515",
          color: "white",
          position: "relative",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid #ff90e8",
        }}
        onMouseEnter={boxMouseOverHandler}
        onMouseLeave={boxMouseOutHandler}
      >
        <Card.Img
          src={props.photo}
          style={{
            height: "auto",
            width: "auto",
            objectFit: "cover",
            cursor: "pointer",
          }}
        ></Card.Img>
        <Card.Title
          style={{
            color: "white",
            fontFamily: "Meaven",
            fontSize: "17px",
            width: "95%",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "15px",
            height: "177px",
          }}
        >
          <div className="shrink h-[80px] mt-[25px]">{props.name}</div>
          <div className="w-full h-full flex  justify-center items-center">
            <a
              className="w-[180px] h-[46px] rounded-sm text-[24px] text-black no-underline flex items-center justify-center transition duration-300 ease-in-out bg-[#ff90e8] hover:bg-[#ffc900]"
              href={props.adress}
            >
              BUY THIS!
            </a>
          </div>
        </Card.Title>
        {/* <Card.Text
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "55px",
            width: "100%",
            fontSize: "13px",
            // border: "2px solid blue",
            borderTop: "2px solid white",
            borderBottom: "2px solid white",
          }}
        >
          <div className="w-1/2 flex flex-col h-full justify-center ml-3 border-white border-r-2 ">
            <ul className="flex flex-row items-center g-3">
              <li>
                <AiFillStar style={{ color: "orange" }} />
              </li>
              <li>5.0</li>
              <li>(392)</li>
            </ul>
          </div>
          <div className="w-40 flex justify-center items-center">
            <span>{currencyFormat(props.price)}</span>
          </div>
        </Card.Text> */}
        {/* <Card.Text
          style={{
            height: "150px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="w-5/6 h-2/4 flex text-black ">
            <button
              className="w-full h-full rounded-sm"
              style={{ backgroundColor: "#ff90e8" }}
            >
              BUY NOW!
            </button>
          </div>
        </Card.Text> */}
      </Card>
    </>
  );
}
