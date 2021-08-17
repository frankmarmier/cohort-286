import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavMain = () => {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <nav className="NavMain">
      <div>
        <Link to="/">App Name</Link>
      </div>
      <ul className="NavMain__nav-list">
        <li className="NavMain__nav-item">
          <NavLink className="NavMain__nav-link" exact to="/signin">
            Signin
          </NavLink>
        </li>
        <li className="NavMain__nav-item">
          <NavLink className="NavMain__nav-link" exact to="/signup">
            Signup
          </NavLink>
        </li>
        <li className="NavMain__nav-item">
          <NavLink className="NavMain__nav-link" exact to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="NavMain__nav-item">
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
