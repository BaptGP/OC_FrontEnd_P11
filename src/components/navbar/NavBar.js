import logo from "../../assets/logo.jpg";
import "../../App.css";
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <div>
        <img
          src={logo}
          alt="logo kasa"
          className="nav_img"
        />
      </div>
      <div>
        <Link to="/" className="link_1">Accueil</Link>
        <Link to="/about" className="link_2">À propos</Link>
      </div>
    </nav>
  );
}

export default NavBar;
