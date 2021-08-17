import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { isLoading, isLoggedIn, ...rest } = props;

  if (props.isLoading) return null;

  if (!props.isLoggedIn) {
    return <Redirect to="/signin" />;
  } else {
    // {exact: true, path: "/"}
    return <Route {...rest} />;
  }
};

export default ProtectedRoute;
