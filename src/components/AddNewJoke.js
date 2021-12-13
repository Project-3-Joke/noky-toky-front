import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const API_URI = process.env.REACT_APP_API_URI;

function AddNewJoke(props) {
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [category, setCategory] = useState("");
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    // We need the project id when creating the new task
    // const { projectId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { setup, delivery, category, user };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URI}/api/jokes/new`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state to clear the inputs
        setSetup("");
        setDelivery("");
        setCategory("");

        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        // props.refreshProject();
      })
      .catch((error) => console.log(error));
  };

  console.log("here i'm");
  return (
    <div className="AddTask">
      <h3>Add New Joke</h3>

      <form onSubmit={handleSubmit}>
        <label>Set Up:</label>
        <input
          type="text"
          name="setup"
          value={setup}
          onChange={(e) => setSetup(e.target.value)}
        />

        <label>Punch Line:</label>
        <textarea
          type="text"
          name="delivery"
          value={delivery}
          onChange={(e) => setDelivery(e.target.value)}
        />

        <label>Category:</label>
        <textarea
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className="CreateJoke">
          <button type="submit">Create Joke</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewJoke;
