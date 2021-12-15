import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";

const API_URI = process.env.REACT_APP_API_URI;

function EditNewjoke(props) {
  const jokeId = props.match.params.id;
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [category, setCategory] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URI}/api/jokes/${jokeId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneJoke = response.data;
        setSetup(oneJoke.setup);
        setDelivery(oneJoke.delivery);
        setCategory(oneJoke.category);
      })
      .catch((error) => console.log(error));
  }, [jokeId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { setup, delivery, category };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .put(`${API_URI}/api/jokes/${jokeId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        props.history.push(`/favourite`);
      });
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit Joke</h3>

      <form onSubmit={handleFormSubmit}>
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

        <button type="submit">Update Joke</button>
      </form>
    </div>
  );
}

export default EditNewjoke;
