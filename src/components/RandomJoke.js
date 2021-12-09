import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function RandomJoke() {
  const [Joke, setJoke] = useState({});

  useEffect(() => {
    axios.get("https://v2.jokeapi.dev/joke/Any").then((response) => {
      console.log("response.data", response.data);
      setJoke(response.data);
    });
  }, []);
  console.log(Joke);

  return (
    <div className={"card"}>
      <h1>{Joke.setup}</h1>
      <h1>{Joke.delivery}</h1>
    </div>
  );
}
