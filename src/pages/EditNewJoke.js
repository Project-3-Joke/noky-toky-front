import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";

const API_URI = process.env.REACT_APP_API_URI;

function EditNewjoke(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
        setTitle(oneJoke.title);
        setDescription(oneJoke.description);
      })
      .catch((error) => console.log(error));
  }, [jokeId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

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

  const deleteJoke = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .delete(`${API_URI}/api/jokes/${jokeId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => props.history.push("/"))
      .catch((err) => console.log(err));
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

      <button onClick={deleteJoke}>Delete Joke</button>
    </div>
  );
}

export default EditNewjoke;
