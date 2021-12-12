import Logo from "../Images/LOGO3.png";
import { Link } from "react-router-dom";

function LogoPage() {
  return (
    <div className="LogoPage">
      <Link to="/">
        <img className="LogoHomePage" src={Logo} alt="noky-toky logo" />
      </Link>
    </div>
  );
}

export default LogoPage;
