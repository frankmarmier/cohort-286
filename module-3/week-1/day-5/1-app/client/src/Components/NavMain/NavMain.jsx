import React from "react";
import { Link, NavLink } from "react-router-dom";
import guitarLogo from "../../Assets/guitar.svg";
import "./NavMain.css";

const NavMain = () => {
  return (
    <nav className="NavMain">
      <Link className="NavMain__logo-link" to="/">
        <img className="NavMain__logo" src={guitarLogo} alt="" />
      </Link>

      <ul>
        <NavLink to="/guitars">Store</NavLink>
        <NavLink to="/guitars/create">Create Guitar</NavLink>
      </ul>
    </nav>
  );
};

export default NavMain;
