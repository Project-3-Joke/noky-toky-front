import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "./../Images/delete.png";
import EditIcon from "./../Images/edit.png";

export default function JokeList() {
  const { user } = useContext(AuthContext);
  const [joke, setJoke] = useState([]);
  const storedToken = localStorage.getItem("authToken");
  const [clickNext, setClickNext] = useState(true);

  const API_URI = process.env.REACT_APP_API_URI;

  useEffect(() => {
    axios
      .get(
        `${API_URI}/api/jokes`,
        { params: { userId: user._id } },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        setJoke(response.data);
      })
      .catch((error) => console.log(error));

  }, [clickNext]);

  function deleteJoke(id) {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URI}/api/jokes/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => console.log("deleted joke"))
      .catch((err) => console.log(err));

    if (clickNext === true) {
      setClickNext(false);
    } else {
      setClickNext(true);
    }
  }

  return (
    <div className="FavJoke">
      <h1>Favourite List</h1>
      {joke
        .slice(0)
        .reverse()
        .map((oneJoke, index) => (
          <div className="cardItem" key={index}>
            <div key={oneJoke._id} className="cardList">
              <div className="jokeCard">
                <p className="jokeCardList">{oneJoke.setup}</p>
                <p className="jokeCardList">
                  <b>{oneJoke.delivery}</b>
                </p>
              </div>
            </div>
            <div className="divIconFavPage">
              <button
                onClick={() => deleteJoke(oneJoke._id)}
                className="button-refresh"
              >
                <img
                  style={{ width: 25 }}
                  src={DeleteIcon}
                  alt="Delete Button"
                />
              </button>
              <Link to={`/edit/${oneJoke._id}`}>
                <button className="button-refresh">
                  <img style={{ width: 25 }} src={EditIcon} alt="Edit Button" />
                </button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
