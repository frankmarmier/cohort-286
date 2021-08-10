// import React from "react";
import React, { Component } from "react";
// rce
class Counter extends React.Component {
  //   class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  //   state = {
  //     count: 0,
  //   };

  //   handleIncrement = () => {
  //     // console.log("Clickity click !");
  //     // this.state.count = this.state.count + 1;
  //     // console.log(this.state.count);
  //     this.setState({
  //       count: this.state.count + 1,
  //     }); // setState is asynchronous
  //     // console.log(this.state.count);
  //     // this.setState(
  //     //   {
  //     //     count: this.state.count + 1,
  //     //   },
  //     //   () => {
  //     //     console.log(this.state.count);
  //     //   }
  //     // );
  //     // this.setState((state) => {
  //     //   console.log(state);
  //     //   return { count: state.count + 1 };
  //     // });
  //     // DO NOT MUTATE THE STATE
  //     // this.setState({
  //     //   count: (this.state.count += 1),
  //     // });
  //   };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //   handleIncrement() {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   }

  render() {
    // console.log(this.state.count);

    // const { count } = this.state;

    return (
      <div>
        {/* <p>The counter value is : {count}</p> */}
        <p>
          {this.props.name} has clicked {this.state.count} times
        </p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Counter;
