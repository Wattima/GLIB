import React from "react";
import { Link } from "react-router-dom"; //importing Link component from react-router-dom for navigation

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>  {/*using Link component instead of anchor tag, it will handle client-side routing */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="brand-name">Brand</li>
      </ul>
    </nav>
  );
};

export default Navbar;
