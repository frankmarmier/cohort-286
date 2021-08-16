import React from "react";
import { withRouter } from "react-router-dom";

<Button renderAs="link" to="/home">
  ceauhaiuhfea
</Button>;

const Button = (props) => {
  const {
    renderAs = "button",
    to,
    history,
    color = "primary",
    type = "button",
    onClick,
    children,
  } = props;

  const handleClick = (event) => {
    if (renderAs === "link") {
      history.push(to);
    } else {
      onClick(event);
    }
  };

  return (
    <button
      className={`Button Button--${color}`}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default withRouter(Button);

{
  /* <button onClick={}></button> */
}
