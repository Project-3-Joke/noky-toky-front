import RandomJoke from "../components/RandomJoke";
import Logo from "../Images/LOGO1.png";

function HomePage() {
  return (
    <div className="HomePage">
      <img className="LogoHomePage" src={Logo} alt="noky-toky logo" />
      <RandomJoke />
    </div>
  );
}

export default HomePage;
