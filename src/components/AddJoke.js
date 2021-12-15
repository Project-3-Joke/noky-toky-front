import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";

export default function NewJoke() {
  const history = useHistory();
  const [formState, setFormState] = useState({});
  const storedToken = localStorage.getItem("authToken");
  const API_URI = process.env.REACT_APP_API_URI;
  const { user } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`${API_URI}/api/jokes`, formState, user, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setFormState({});
        history.push("/");

        console.log("added to favorite", response.data);
      })
      .catch((error) => console.log(error));
  }

  function handleInput(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1> Add a new Joke </h1>

      <form onSubmit={handleSubmit}>
        <label> Setup </label>
        <input
          type="text"
          name="setup"
          onChange={handleInput}
          value={formState.name || ""}
        />

        <label> Delivery </label>
        <input
          type="text"
          name="delivery"
          onChange={handleInput}
          value={formState.tagline || ""}
        />

        <label> Category </label>
        <input
          type="text"
          name="category"
          onChange={handleInput}
          value={formState.description || ""}
        />

        <button type="submit"> Add New Joke</button>
      </form>
    </div>
  );
}
