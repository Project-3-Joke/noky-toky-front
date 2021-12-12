import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import heartFav from "./../Images/Life.png";
import next from "./../Images/Component 1.png";

export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { logOutUser } = useContext(AuthContext);
  const { isLoggedIn, user } = useContext(AuthContext);

  const [clickNext, setClickNext] = useState(true);
  const API_URI = process.env.REACT_APP_API_URI;

  useEffect(() => {
    axios
      .get("https://v2.jokeapi.dev/joke/Programming?type=twopart")
      .then((response) => {
        console.log("response.data", response.data);
        setJoke(response.data);
      })
      .catch((error) => console.log(error))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, [clickNext]);
  console.log("joke", joke);

  function refreshPage() {
    if (clickNext === true) {
      setClickNext(false);
    } else {
      setClickNext(true);
    }
  }

  function addFavs() {
    console.log("Inside Fav User Info", user);
    console.log("Inside Fav Joke Info", joke);

    const requestBody = { joke, user };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URI}/api/jokes`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        console.log("added to favorite", response.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="RandomJoke">
      {isLoggedIn ? (
        <>
          <div className="button-add-wrapper">
            <Link to="/projects">
              <button>+ Add Joke</button>
            </Link>
          </div>
          {/* <Link to="/projects">
            <button>Add Joke</button>
          </Link> */}
          {isLoading && <p>Joke loading...</p>}
          {!isLoading && (
            <div className="card">
              <div className="jokeCard">
                <h2>{joke.setup}</h2>
                <h2>{joke.delivery}</h2>
              </div>
            </div>
          )}
          <div className="divIconHomePage">
            <button onClick={addFavs} className="button-refresh">
              <img style={{ width: 44 }} src={heartFav} alt="Fav Button" />
            </button>
            <button onClick={refreshPage} className="button-refresh">
              <img style={{ width: 44 }} src={next} alt="Next Button" />
            </button>
          </div>
          <div className="BuyMerch">
            <Link to="/cart/:id">
              <button>Buy merch</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          {isLoading && <p>Joke loading...</p>}
          {!isLoading && (
            <div className={"card"}>
              <h1>{joke.setup}</h1>
              <h1>{joke.delivery}</h1>
            </div>
          )}
          <div className="divIconHomePage">
            <Link to="/signup">
              <button onClick={refreshPage}>Next &raquo; </button>
            </Link>
          </div>
          <br />
          <Link to="/cart/:id">
            <button onClick={""} className="BuyMerch">
              Buy merch
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
