// import React from "react";
// import MyContext from "./MyContext";

// const Child = () => {
//   return (
//     <div>
//       <h2>I am the child</h2>
//       <MyContext.Consumer>
//         {(contextValue) => (
//           <div>
//             <p>Context value in Child is : {contextValue.value}</p>
//             <input
//               onChange={(event) => contextValue.onChange(event.target.value)}
//             />
//           </div>
//         )}
//       </MyContext.Consumer>
//     </div>
//   );
// };

// export default Child;

import { withContext } from "./MyContext";
// import { withRouter } from "react-router-dom";
const Child = (props) => {
  console.log(props);
  return (
    <div>
      <h2>I am child</h2>
      <p>{props.context.value}</p>
      <input onChange={(e) => props.context.onChange(e.target.value)} />
    </div>
  );
};

export default withContext(Child);
// export default Child;
