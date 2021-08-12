import React from "react";
import { Link } from "react-router-dom";

// Links work the same as NavLink, the only difference is that
// it won't add the active class to your anchor tag

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default NotFound;
