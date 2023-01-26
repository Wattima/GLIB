import React from "react";
import { NavLink} from "react-router-dom";
 

const Navbar = () => {
  return (
    <nav className="navbar bg-info">
      
     
     <h1>Book App</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/App">Log In/Search</NavLink>
     <NavLink to="/About">About</NavLink>
     
     
    
    
    </nav>
    
  );
};

export default Navbar;