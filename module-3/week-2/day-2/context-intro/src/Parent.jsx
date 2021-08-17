import React from "react";
import Child from "./Child";
import MyContext from "./MyContext";

const Parent = () => {
  return (
    <div>
      <h2>Parent</h2>
      <MyContext.Consumer>
        {(contextValue) => {
          return <p>The value of the context is : {contextValue.value}</p>;
        }}
      </MyContext.Consumer>
      <Child anyAmountOfProps="feiuafa" myPro="fooo" />
    </div>
  );
};

export default Parent;
