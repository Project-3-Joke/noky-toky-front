import RandomJoke from "../components/RandomJoke";
import Logo from "../Images/LOGO1.png";

function HomePage() {
  return (
    <div>
      <img style={{ width: 350 }} src={Logo} alt="noky-toky logo" />
      <h2>filter cathegory component*</h2>
      <RandomJoke />
      <div className="divIconHomePage">
        <a href="#" className="previous">
          &hearts; Like
        </a>
        <a href="#" className="next">
          Next &raquo;
        </a>
      </div>
      <h2>Buy merch</h2>
    </div>
  );
}

export default HomePage;
