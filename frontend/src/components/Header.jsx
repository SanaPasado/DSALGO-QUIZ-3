import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="header-inner" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label="Homepage">
          <div className="logoline"><img className="logo" src="/images/logo.png" alt="LoopedByKlayd Logo" />LoopedByKlayd</div>
        </Link>

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
          <Link to="/custom-orders" className="nav-link">
            Custom Orders
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
