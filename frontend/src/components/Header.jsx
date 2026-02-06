import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="header-inner" aria-label="Main navigation">
      

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
          <Link to="/users" className="nav-link">
            Users (Admin)
          </Link>

          
        </div>
      </nav>
    </header>
  );
}

export default Header;
