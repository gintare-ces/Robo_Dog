import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header>
      <div className="navBar container">
        <img className="logo" src="" alt="" />
        <nav>
          <Link className="navItem" to={"/"}>Home</Link>
          <Link className="navItem">Info</Link>
          <button>Buy</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
