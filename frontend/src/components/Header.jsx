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
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
           <Link to="/userprofile" className="nav-link">
            Profile
          </Link>
           <Link to="/userlist" className="nav-link">
            Users
          </Link>

          
        </div>
      </nav>
    </header>
  );
}

export default Header;
