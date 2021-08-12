import React from "react";
import { withRouter } from "react-router-dom"; // HOC
import Parent from "../Components/Parent";

const Home = (props) => {
  const handleClick = () => {
    console.log("I am being clicked !");
    props.history.push("/about");
  };

  return (
    <div>
      <h1>Home Page !</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <button onClick={handleClick}>Go to About</button>
      <Parent history={props.history} />
    </div>
  );
};

export default withRouter(Home); //
