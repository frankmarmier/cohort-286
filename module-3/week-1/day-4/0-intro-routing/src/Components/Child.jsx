import React from "react";
import GrandChild from "./GrandChild";

const Child = (props) => {
  return (
    <div>
      <p>Child</p>
      <pre>Props in child: {JSON.stringify(props, null, 2)}</pre>
      <GrandChild />
    </div>
  );
};

export default Child;
