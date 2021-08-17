import React from "react";
import { Redirect, Route } from "react-router-dom";
import { withAuth } from "../Store/AuthProvider";

const ProtectedRoute = (props) => {
  const { context, ...restProps } = props;

  if (context.isLoading) {
    return null;
  }

  if (!props.context.user) {
    return <Redirect to="/signin" />;
  } else {
    return <Route {...restProps} />;
  }
};

export default withAuth(ProtectedRoute);
