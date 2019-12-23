import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
    <nav>
    <div className="nav-wrapper">
    <a href="/" className="brand-logo">Locus</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/PageOne">Page One</Link></li>
        <li><Link to="/PageTwo">Page Two</Link></li>
        <li><Link to="/PageThree">Page Three</Link></li>
      </ul>
    </div>
  </nav>
)

export default Navbar;