import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

function UserDetailsPage(props) {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <div className="UserDetails">
      <h2>User Profile</h2>
      {isLoggedIn ? (
        <>
          <Link to="/Favourite/:id">
            <button>Fav Page</button>
          </Link>
          <button onClick={logOutUser}>&#10060;</button>
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
