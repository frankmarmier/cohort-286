import React from "react";
import { withRouter } from "react-router-dom";

const GrandChild = (props) => {
  return (
    <div>
      <p>Grand child</p>
      <pre>Props in grand child: {JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default withRouter(GrandChild);
