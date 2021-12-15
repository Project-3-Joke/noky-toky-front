import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import { useState, useEffect } from "react";
import axios from "axios";

function UserDetailsPage(props) {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const [joke, setJoke] = useState([]);
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");

  const API_URI = process.env.REACT_APP_API_URI;

  useEffect(() => {
    axios
      .get(
        `${API_URI}/api/jokes`,
        { params: { userId: user._id } },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        // Reset the state
        console.log(" List of Favorites ", response.data);
        setJoke(response.data);
      })
      .catch((error) => console.log(error));
    //   .get(`${API_URI}/api/jokes`, requestBody, {
    //     headers: { Authorization: `Bearer ${storedToken}` },
    //   })
    //   .then((response) => {
    //     console.log("response.data", response.data);
    //     setJoke(response.data);
    //   });
  }, []);

  return (
    <div className="UserDetails">
      {isLoggedIn ? (
        <>
          <div className="UserInfo">
            <h1>Details of User</h1>
            <p>Name:</p>
            <p>Email:</p>
            <p>#Favourite's:</p>
            <p>#Buy's:</p>
          </div>

          <h2>History of buy</h2>
          {joke
            .slice(0)
            .reverse()
            .map((oneJoke, index) => (
              <div className="cardItem" key={index}>
                <div key={oneJoke._id} className="cardList">
                  <div className="jokeCard">
                    <p className="jokeCardList">{oneJoke.setup}</p>
                    <p className="jokeCardList">
                      <b>{oneJoke.delivery}</b>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          <div className="button-add-card">
            <button onClick={logOutUser}> Log Out &#10060;</button>
          </div>
        </>
      ) : (
        <>
          <Link to="/login">
            <button onClick={""} className="LogIn">
              Log In
            </button>
          </Link>
        </>
      )}{" "}
    </div>
  );
}

export default UserDetailsPage;
