import React from "react";
import { Link, NavLink } from "react-router-dom";
import { withAuth } from "../Store/AuthProvider";
import axios from "axios";

const NavMain = (props) => {
  console.log("Props in nav", props);

  const handleLogout = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/auth/logout", {
        withCredentials: true,
      })
      .then(() => {
        props.context.setUser(null);
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
        {!props.context.user && (
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
        {props.context.user && (
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

export default withAuth(NavMain);
