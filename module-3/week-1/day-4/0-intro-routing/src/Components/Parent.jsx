import React from "react";
import Child from "./Child";

const Parent = (props) => {
  return (
    <div>
      <p>Parent</p>
      <pre>Parent props :{JSON.stringify(props, null, 2)}</pre>
      <Child history={props.history} />
    </div>
  );
};

export default Parent;
