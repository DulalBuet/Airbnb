function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        Airbnb
      </div>

      <nav className="navbar__links">
        <button>Airbnb your home</button>
        <button>Log in</button>
        <button>Sign up</button>
      </nav>
    </header>
  );
}

export default Navbar;