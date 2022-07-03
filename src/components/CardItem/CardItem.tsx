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
    box.style.boxShadow = "6px 6px 0px 0px #23a094";
    box.style.transform = "translate(-5px, -5px)";
    box.style.transition = ".3s ease-in-out";
    box.style.borderImageWidth = "0px";
  };

  const boxMouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget;
    box.style.transform = "translateY(0px)";
    box.style.transition = ".3s ease-in-out";
    box.style.boxShadow = box.style.outline = "0px 0px 0px 0px white";
    // box.style.borderImage = `url(${
    //   process.env.PUBLIC_URL + "/images/bgColor.jpg"
    // })`;
    // box.style.borderImageWidth = "auto";
    // box.style.borderImageRepeat = "stretch";
    // box.style.borderImageOutset = "1px";
    // box.style.borderImageSlice = "1";
  };

  return (
    <>
      <Card
        style={{
          width: "300px",
          height: "480px",
          backgroundColor: "black",
          color: "white",
          position: "relative",
          display: "flex",
          alignItems: "center",
          // borderImage: `url(${process.env.PUBLIC_URL + "/images/bgColor.jpg"})`,
          flexDirection: "column",
          // borderImageWidth: "auto",
          // borderImageRepeat: "stretch",
          // borderImageOutset: "1px",
          // borderImageSlice: "5",
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
      </Card>
    </>
  );
}
