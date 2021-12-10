import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";

export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { logOutUser } = useContext(AuthContext);
  const { isLoggedIn } = useContext(AuthContext);

  const [clickNext, setClickNext] = useState(true);

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

  return (
    <div className="RandomJoke">
      {isLoggedIn ? (
        <>
          <h2>filter cathegory component*</h2>
          {isLoading && <p>Joke loading...</p>}
          {!isLoading && (
            <div className={"card"}>
              <h1>{joke.setup}</h1>
              <h1>{joke.delivery}</h1>
            </div>
          )}
          <div className="divIconHomePage">
            <Link to="/signup">
              <button>&hearts; Like</button>
            </Link>

            <div className="divIconHomePage">
              <button onClick={refreshPage}>Next &raquo; </button>
            </div>
          </div>
          <Link to="/signup">
            <button className="BuyMerch">Buy merch</button>
          </Link>
          <br />
          <button onClick={logOutUser}>&#10060;</button>
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
              <button>Next &raquo;</button>
            </Link>
          </div>
          <br />
          <Link to="/signup">
            <button onClick={""} className="BuyMerch">
              Buy merch
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
