import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import cart from "./../Images/cart.png";
import heart from "./../Images/heart.png";
import userimg from "./../Images/user.png";
import joke from "./../Images/joke.png";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <img style={{ width: 20 }} src={joke} alt="joke random" />
        <br />
        <span>Jokes</span>
      </Link>
      {isLoggedIn ? (
        <>
          <Link to="/projects">
            <img style={{ width: 20 }} src={heart} alt="Fav List" />
            <br />
            <span>FavList</span>
          </Link>
          <Link to="/projects">
            <img style={{ width: 20 }} src={cart} alt="shop cart" />
            <br />
            <span>WishList</span>
          </Link>
          <Link to="/signup">
            <img style={{ width: 20 }} src={userimg} alt="user profile" />
            <br />
            <span>{user.name}</span>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signup">
            <img style={{ width: 20 }} src={userimg} alt="Sign In" />
            <br />
            <span>SignUp</span>
          </Link>
          <Link to="/login">
            <img style={{ width: 20 }} src={userimg} alt="Log In" />
            <br />
            <span>LogIn</span>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
