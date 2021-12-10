import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function RandomJoke() {
  const [Joke, setJoke] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://v2.jokeapi.dev/joke/Programming?type=twopart")
      .then((response) => {
        console.log("response.data", response.data);
          setJoke(response.data)})
      .catch( (error)=> console.log(error))
      .then(()=> setIsLoading(false))
      .catch( (error) => console.log(error));
  }, []);
  console.log("joke", Joke);

  return (
    <div>
      {isLoading && <p>Data is loading...</p>}
      {!isLoading && (
        <div className={"card"}>
          <h1>{Joke.setup}</h1>
          <h1>{Joke.delivery}</h1>
        </div>
      )}
    </div>
  );
}
