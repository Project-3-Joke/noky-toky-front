import { useState, useEffect } from "react";
import axios from "axios";
import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

const API_URI = process.env.REACT_APP_API_URI;

function UserListPage() {
  const [user, setUser] = useState([]);
  const { logOutUser } = useContext(AuthContext);

  const getAlluser = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URI}/api/user`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAlluser();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddProject refreshuser={getAlluser} />

      {user.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
      <button onClick={logOutUser}>&#10060;</button>
    </div>
  );
}

export default UserListPage;
