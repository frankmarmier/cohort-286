import React from "react";

const Ternary = (props) => {
  return props.value ? <div>Yay true</div> : <div>Nay false</div>;
};

export default Ternary;
