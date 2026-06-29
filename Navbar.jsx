import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

      <div className="container">

        <Link className="navbar-brand" to="/">
          React Shop
        </Link>

        <div>

          <Link className="nav-link d-inline text-white" to="/">
            Home
          </Link>

          <Link className="nav-link d-inline text-white" to="/about">
            About
          </Link>

          <Link className="nav-link d-inline text-white" to="/products">
            Products
          </Link>

          <Link className="nav-link d-inline text-white" to="/contact">
            Contact
          </Link>

          <Link className="nav-link d-inline text-white" to="/profile">
            Profile
          </Link>

          <Link className="nav-link d-inline text-white" to="/dashboard">
            Dashboard
          </Link>

        </div>

      </div>

    </nav>
  );
}