import React from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
const NavMain = (props) => {
  const handleLogout = () => {
    console.log("here");
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/auth/logout", {
        withCredentials: true,
      })
      .then(() => {
        // props.logout();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="NavMain">
      <div>
        <Link to="/">App Name</Link>
      </div>
      <ul className="NavMain__nav-list">
        {!props.isLoggedIn && (
          <>
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
          </>
        )}
        {props.isLoggedIn && (
          <>
            <li className="NavMain__nav-item">
              <NavLink className="NavMain__nav-link" exact to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="NavMain__nav-item">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavMain;
