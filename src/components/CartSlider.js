import react from "react";
import { useState } from "react";
import StarBlue from "./../Images/Starblue.png";
import StarYellow from "./../Images/staryellow.png";
import heartFav from "./../Images/Life.png";
import cred from "./../Images/Camisetas/cami1.png";
import cyellow from "./../Images/Camisetas/cami2.png";
import cblack from "./../Images/Camisetas/cami3.png";
import cgrease from "./../Images/Camisetas/cami4.png";
import cblue from "./../Images/Camisetas/cami5.png";
import cwhite from "./../Images/Camisetas/cami6.png";
import cgreen from "./../Images/Camisetas/cami7.png";
import mred from "./../Images/mugs/mug1.png";
import mblack from "./../Images/mugs/mug2.png";
import mgreen from "./../Images/mugs/mug3.png";
import mpink from "./../Images/mugs/mug4.png";
import myellow from "./../Images/mugs/mug5.png";
import mblue from "./../Images/mugs/mug6.png";
import mwhite from "./../Images/mugs/mug7.png";

export default function RandomJoke({ title, type }) {
  const [hover, sethover] = useState(false);
  const stars = () => {
    for (let i = 0; i < 5; i++) {
      console.log("hola");
      console.log(
        <img
          onClick={() => {
            sethover(!hover);
          }}
          src={hover === true ? StarYellow : StarBlue}
        ></img>
      );

      <img
        onClick={() => {
          sethover(!hover);
        }}
        src={hover === true ? StarYellow : StarBlue}
      ></img>;
    }
    return;
  };

  const infoShirts = [
    {
      img: cred,
      price: "340",
      description: "Hey baby I wish your bame was asynchronous...",
      stars: 3,
    },
    {
      img: cyellow,
      price: "40",
      description: "Why do phyton programmers wear glasses?",
      stars: 3,
    },
    {
      img: cblack,
      price: "30",
      description: "How did you make your friend rage?",
      stars: 3,
    },
    {
      img: cgrease,
      price: "10",
      description: "Why are modern programming languages so ",
      stars: 3,
    },
    {
      img: cblue,
      price: "40",
      description: "Whats is dying programmer's last program?",
      stars: 3,
    },
    {
      img: cwhite,
      price: "30",
      description: "What do you call a group of 8 Hobbits?",
      stars: 3,
    },
    {
      img: cgreen,
      price: "10",
      description: "Why Linux is safe?",
      stars: 3,
    },
  ];
  const infoMug = [
    {
      img: mred,
      price: "3540",
      description: "Why did the programmer jump on the table?",
      stars: 3,
    },
    {
      img: mblack,
      price: "40",
      description: "What do you get if  you lock a monkey in a room with a",
      stars: 3,
    },
    {
      img: mgreen,
      price: "30",
      description: "Why are Assembly programers always soaking wet?",
      stars: 3,
    },
    {
      img: mpink,
      price: "10",
      description: "Why did the web developer walk out of a  restaurant in ",
      stars: 3,
    },
    {
      img: myellow,
      price: "40",
      description: "Why did the JavaScript  heap close shop?",
      stars: 3,
    },
    {
      img: mblue,
      price: "30",
      description: "Why do Java  programmers hate communism? ",
      stars: 3,
    },
    {
      img: mwhite,
      price: "10",
      description: "Why does no one like SQLrillex? ",
      stars: 3,
    },
  ];

  return (
    <div className="shop-wrapper">
      <h4>{title}</h4>
      <div className="slider-wrapper">
        {type === "shirt"
          ? infoShirts.map((e, i) => (
              <div key={i} className="product-container">
                <div className="false-img">
                  <img src={e.img} />
                </div>
                <h5>{e.price} </h5>
                <p>{e.description}</p>
                <div className="classification">
                  <img
                    data-star={1}
                    onClick={() => {
                      sethover(!hover);
                    }}
                    src={hover === true ? StarYellow : StarBlue}
                  ></img>
                  <img
                    data-star={2}
                    onClick={() => {
                      sethover(!hover);
                    }}
                    src={hover === true ? StarYellow : StarBlue}
                  ></img>
                  <img
                    data-star={3}
                    onClick={() => {
                      sethover(!hover);
                    }}
                    src={hover === true ? StarYellow : StarBlue}
                  ></img>
                  <img
                    data-star={4}
                    onClick={() => {
                      // starHandle(4)
                      sethover(!hover);
                    }}
                    src={hover === true ? StarYellow : StarBlue}
                  ></img>
                  <img
                    data-star={5}
                    onClick={() => {
                      sethover(!hover);
                    }}
                    src={hover === true ? StarYellow : StarBlue}
                  ></img>
                </div>
              </div>
            ))
          : infoMug.map((e, i) => (
              <div key={i} className="product-container">
                <div className="false-img">
                  <img src={e.img} />
                </div>
                <h5>{e.price} </h5>
                <p>{e.description}</p>
                <div className="classification">
                  <img
                    onClick={() => {
                      sethover(!hover);
                    }}
                    src={hover === true ? StarYellow : StarBlue}
                  ></img>
                  <img
                    onClick={() => {
                      sethover(!hover);
                    }}
                    src={hover === true ? StarYellow : StarBlue}
                  ></img>
                  <img
                    onClick={() => {
                      sethover(!hover);
                    }}
                    src={hover === true ? StarYellow : StarBlue}
                  ></img>
                  <img
                    onClick={() => {
                      sethover(!hover);
                    }}
                    src={hover === true ? StarYellow : StarBlue}
                  ></img>
                  <img
                    onClick={() => {
                      sethover(!hover);
                    }}
                    src={hover === true ? StarYellow : StarBlue}
                  ></img>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
