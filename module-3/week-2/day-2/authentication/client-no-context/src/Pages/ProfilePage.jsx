import React from "react";
import { Redirect } from "react-router-dom";

const ProfilePage = (props) => {
  return (
    <div>
      <h1>User profile</h1>
      <p>{props.user.firstName}</p>
    </div>
  );
};

export default ProfilePage;
