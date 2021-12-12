import react from "react";
import { useState } from "react";
import StarBlue from "./../Images/Starblue.png";
import StarYellow from "./../Images/staryellow.png";
import heartFav from "./../Images/Life.png";
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
      img: heartFav,
      price: "340",
      description: "Meme T-Shirt single joke",
      stars: 3,
    },
    {
      img: heartFav,
      price: "40",
      description: "Meme programming joke",
      stars: 3,
    },
    {
      img: heartFav,
      price: "30",
      description: "Meme programming joke",
      stars: 3,
    },
    {
      img: heartFav,
      price: "10",
      description: "Meme programming joke",
      stars: 3,
    },
  ];
  const infoMug = [
    {
      img: heartFav,
      price: "3540",
      description: "Meme MUG joke",
      stars: 3,
    },
    {
      img: heartFav,
      price: "40",
      description: "Meme programming joke",
      stars: 3,
    },
    {
      img: heartFav,
      price: "30",
      description: "Meme programming joke",
      stars: 3,
    },
    {
      img: heartFav,
      price: "10",
      description: "Meme programming joke",
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
