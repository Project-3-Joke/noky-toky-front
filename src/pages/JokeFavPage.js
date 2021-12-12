import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import { useState, useEffect } from "react";
import axios from "axios";
import heartFav from "./../Images/Life.png";
import next from "./../Images/Component 1.png";

function JokeFavPage() {
  const [joke, setJoke] = useState({});
  const { isLoggedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
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
    <div className="UserDetails">
      <h2>Joke Favourite Page</h2>
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
        <Link to="/signup">
          <img style={{ width: 44 }} src={heartFav} alt="Fav Button" />
        </Link>
        <button onClick={refreshPage} className="button-refresh">
          <img style={{ width: 44 }} src={next} alt="Next Button" />
        </button>
      </div>
      <div className="BuyMerch">
        <Link to="/cart/:id">
          <button>Buy merch</button>
        </Link>
      </div>
    </div>
  );
}

export default JokeFavPage;
