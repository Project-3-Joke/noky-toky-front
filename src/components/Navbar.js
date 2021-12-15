import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import cart from "./../Images/cart.png";
import heart from "./../Images/heart.png";
import userimg from "./../Images/user.png";
import joke from "./../Images/joke.png";
import { useLocation } from "react-router-dom";
import LogIn from "./../Images/login.png";
import SignIn from "./../Images/signin.png";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;
  return (
    <nav>
      <Link to="/">
        <img
          style={{ width: 35, opacity: path === "/" ? 1 : 0.3 }}
          src={joke}
          alt="joke random"
        />
      </Link>
      {isLoggedIn ? (
        <>
          <Link to="/favourite">
            <img
              style={{
                width: 44,
                opacity: path === "/favourite" ? 1 : 0.3,
              }}
              src={heart}
              alt="Fav List"
            />
          </Link>
          <Link to="/cart/:id">
            <img
              style={{ width: 49, opacity: path === "/cart/:id" ? 1 : 0.3 }}
              src={cart}
              alt="shop cart"
            />
          </Link>
          <Link to="/user/:id">
            <img
              style={{ width: 35, opacity: path === "/user/:id" ? 1 : 0.3 }}
              src={userimg}
              alt="user profile"
            />
          </Link>
        </>
      ) : (
        <>
          <Link to="/signup">
            <img
              style={{ width: 35, opacity: path === "/signup" ? 1 : 0.3 }}
              src={SignIn}
              alt="Sign In"
            />
          </Link>
          <Link to="/login">
            <img
              style={{ width: 35, opacity: path === "/login" ? 1 : 0.3 }}
              src={LogIn}
              alt="Log In"
            />
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
