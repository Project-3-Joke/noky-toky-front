import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import CartSlider from "../components/CartSlider";
export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
          <CartSlider title="T-shirts" type="shirt" />
          <CartSlider title="Funky ass Mugs" type="mug"/>
        </>
      ) : (
        <>
          {isLoading && <p>Cart loading...</p>}
          {!isLoading && <p>No llega nada</p>}
          <div className="divIconHomePage">
            <Link to="/signup">
              <button onClick={refreshPage}>Next &raquo; </button>
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
