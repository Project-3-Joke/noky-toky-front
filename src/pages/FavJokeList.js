import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import heartFav from "./../Images/Life.png";
import next from "./../Images/Component 1.png";

export default function JokeList() {
  const { user } = useContext(AuthContext);
  const [joke, setJoke] = useState([]);
  const API_URI = process.env.REACT_APP_API_URI;
  const storedToken = localStorage.getItem("authToken");
  const requestBody = user;

  useEffect(() => {
    axios
      .get(`${API_URI}/api/jokes`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("response.data", response.data);
        setJoke(response.data);
      });
  }, []);
  console.log(joke.name);

  return (
    <div className="FavJoke">
      <h1>Favourite List</h1>
      {joke.map((oneJoke, index) => (
        <div className="cardItem" key={index}>
          <div key={oneJoke._id} className="cardList">
            <div className="jokeCard">
              <p className="jokeCardList">{oneJoke.setup}</p>
              <p className="jokeCardList">{oneJoke.delivery}</p>
            </div>
          </div>
          <div className="divIconHomePage">
            <button onClick={""} className="button-refresh">
              <img style={{ width: 30 }} src={heartFav} alt="Fav Button" />
            </button>
            <button onClick={""} className="button-refresh">
              <img style={{ width: 30 }} src={next} alt="Next Button" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
