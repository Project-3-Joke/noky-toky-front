import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>&#127183;</button>
      </Link>
      -
      {isLoggedIn ? (
        <>
          <Link to="/projects">
            <button>&#9749;</button>
          </Link>
          <button onClick={logOutUser}>&#10060;</button>
          <span>{user.name}</span>
        </>
      ) : (
        <>
          <Link to="/signup">
            {" "}
            <button>&#9999;</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>&#11093;</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
