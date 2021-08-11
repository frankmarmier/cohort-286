import React from "react";
import "./App.css";
import NavMain from "./Components/NavMain/NavMain";
import Movies from "./Pages/Movies";

class App extends React.Component {
  state = {
    isClicked: false,
  };

  handleClick = (event) => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    return (
      <div className="App">
        <NavMain isClicked={this.state.isClicked} onClick={this.handleClick} />

        <p>
          Is it passed in from a parent via props? If so, it probably isn’t
          state. <br />
          Does it remain unchanged over time? If so, it probably isn’t state.
          <br />
          Can you compute it based on any other state or props in your
          component? If so, it isn’t state.
          <br />
        </p>

        <div className="App__content">
          <Movies isClicked={this.state.isClicked} foo={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
