import React from "react";

const Child = (props) => {
  console.log("Props", props);

  return (
    <div className="Child">
      <h2>I am the child !</h2>
      <button onClick={props.callbackFn}>Likes {props.likes}</button>
    </div>
  );
};

export default Child;
