import React from "react";
import { NavLink} from "react-router-dom";

 

const Navbar = () => {
  return (
    <div>
     
     <nav className="navbar navbar-light bg-info fs-3">
      
     
     <h1 class="nav-item ">Book App</h1>
     
      <NavLink to="/" class="nav-link">Home</NavLink>
      <NavLink to="/App" class="nav-link">Log In/Search</NavLink>
     <NavLink to="/About" class="nav-link">About</NavLink>
     
     
    
    
    </nav>
    </div>
    
  );
};

export default Navbar;