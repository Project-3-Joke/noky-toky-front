import RandomJoke from "../components/RandomJoke";
import Logo from "../Images/LOGO1.png";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";

function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <img style={{ width: 350 }} src={Logo} alt="noky-toky logo" />
      {isLoggedIn ? (
        <>
          <h2>filter cathegory component*</h2>
          <RandomJoke />
          <div className="divIconHomePage">
            <button onClick={refreshPage}>&hearts; Like</button>
            <button onClick={refreshPage}>Next &raquo;</button>
          </div>
          <button onClick={refreshPage}>Buy merch</button>
        </>
      ) : (
        <>
          <RandomJoke />
          <div className="divIconHomePage">
            <button onClick={refreshPage}>Next &raquo;</button>
          </div>
          <button onClick={refreshPage}>Buy merch</button>
        </>
      )}
    </div>
  );
}

export default HomePage;
