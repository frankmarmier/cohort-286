import React from "react";

const MyContext = React.createContext();

// console.log("Provider", MyContext.Provider);
// console.log("Consumer", MyContext.Consumer);

export default MyContext;

export class MyContextProvider extends React.Component {
  state = {
    str: "Vroom vroom from the Provider",
    isLoggedIn: true,
  };

  changeValue = (v) => {
    this.setState({
      str: v,
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          value: this.state.str,
          onChange: this.changeValue,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export const withContext = (Component) => {
  return function (props) {
    console.log("Prooppps", props);
    return (
      <MyContext.Consumer>
        {(contextValue) => <Component {...props} context={contextValue} />}
      </MyContext.Consumer>
    );
  };
};

// function MyCOmponentName() {
//   let x = 10;
//   return <AnotherComponent value={x} />;
// }
