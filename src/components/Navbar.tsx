import "../styles/components/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__title__section">
        <span className="navbar__title">ConMan</span>
        <span className="navbar__subtitle">Manage all your containers!</span>
      </div>
      <div className="navbar__actions">
        <p className="navbar__link">Log in</p>
        <p className="navbar__link">Sign up</p>
        <p className="navbar__link">Log out</p>
      </div>
    </nav>
  );
}

export default Navbar;
