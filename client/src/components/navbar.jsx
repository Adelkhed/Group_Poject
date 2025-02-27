import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Floral Haven</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/flowers">Shop</Link>
          <Link className="nav-link" to="/cart">Cart</Link>
          <button className="btn btn-danger btn-sm ms-3" onClick={handleLogout}>Déconnexion</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
