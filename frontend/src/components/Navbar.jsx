import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo">
        Airbnb
      </Link>

      <nav className="navbar__links">
        <button>Airbnb your home</button>

        <Link to="/login">Log in</Link>

        <Link to="/signup">Sign up</Link>
      </nav>
    </header>
  );
}

export default Navbar;