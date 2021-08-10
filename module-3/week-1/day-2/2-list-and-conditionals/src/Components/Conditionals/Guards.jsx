import React from "react";

const Guards = (props) => {
  return (
    <>
      {props.value && <div>Guard Yay true</div>}
      {!props.value && <div>Guard Nay false !</div>}
    </>
  );
};

export default Guards;
