import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="Parent">
        <h1>Parent !</h1>
        <p>{this.state.count}</p>
        <Child callbackFn={this.handleIncrement} likes={this.state.count} />
        <Child callbackFn={this.handleIncrement} likes={this.state.count} />
        <Child callbackFn={this.handleIncrement} likes={this.state.count} />
        <Child callbackFn={this.handleIncrement} likes={this.state.count} />
      </div>
    );
  }
}

export default Parent;
