import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import { useState, useEffect } from "react";
import axios from "axios";

function UserDetailsPage(props) {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const [product, setProduct] = useState([]);
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");
  const [favlist, setFavList] = useState({});
  const API_URI = process.env.REACT_APP_API_URI;

  useEffect(() => {
    axios
      .get(
        `${API_URI}/api/products`,
        { params: { userId: user._id } },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        // Reset the state
        console.log(" List of Products ", response.data);
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
    //   .get(`${API_URI}/api/jokes`, requestBody, {
    //     headers: { Authorization: `Bearer ${storedToken}` },
    //   })
    //   .then((response) => {
    //     console.log("response.data", response.data);
    //     setJoke(response.data);
    //   });
    axios
      .get(
        `${API_URI}/api/jokes`,
        { params: { userId: user._id } },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((favnumber) => {
        // Reset the state
        console.log(" List of Favorites ", favnumber.data);
        setFavList(favnumber.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="UserDetails">
      {isLoggedIn ? (
        <>
          <div className="UserInfo">
            <h1>Details of User</h1>
            <p>
              Name: <b>{user.name}</b>
            </p>
            <p>
              Email: <b>{user.email}</b>
            </p>
            <p>
              #Favourite's: <b>{favlist.length}</b>
            </p>
            <p>
              #Buy's: <b>{product.length}</b>
            </p>
          </div>

          <h2>History of buy</h2>
          {product
            .slice(0)
            .reverse()
            .map((oneProduct, index) => (
              <div className="cardItem" key={index}>
                <div key={oneProduct._id} className="cardList">
                  <div className="buyCard">
                    <p className="buyCardList">{oneProduct.type}</p>
                    <img
                      src={oneProduct.img}
                      alt=""
                      style={{ width: "50px" }}
                    />
                  </div>
                  <div className="buyCard">
                    <p className="jokeCardList">
                      <b>{oneProduct.joke}</b>
                    </p>
                    <p className="jokeCardList">{oneProduct.size}</p>

                    <p className="jokeCardList">
                      <b>{oneProduct.delivery}</b>
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
