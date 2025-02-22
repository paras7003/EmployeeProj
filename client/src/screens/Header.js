import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/support" className="nav-link">
                Support
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cal" className="nav-link">
                Cal
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cal1" className="nav-link">
                Cal1
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/employee" className="nav-link">
                Employee
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
