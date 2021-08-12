import React from "react";

const Contact = (props) => {
  return (
    <div>
      <h1>Contact Page</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default Contact;
