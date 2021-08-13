import React, { Component } from "react";

class Chronometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //   state = {
  //     count: 0,
  //   };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    // console.log("WOHOOO");

    return (
      <div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default Chronometer;
