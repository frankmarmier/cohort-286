// import React from "react";
import React, { Component } from "react";
// rce + tab => react class component snipper
// class Counter extends React.Component {
class Counter extends Component {
  constructor(props) {
    super(props);
    /**
     * this.state // this keyword is mandatory in order to have a state in react. (A value that will change over time, user interaction, api calls, timers etc...)
     */
    this.state = {
      count: 0,
    };
    /**
     * If you define methods and attach them to event listeners the following way :     myMethod(){ DO SOMETHING }
     * it is required to bind "this" to the method otherwise you will lose the reference
     * to "this". Resulting in cannot read property "X" of undefined when you try to interact with "this"
     *
     * To avoid this, you can define your class methods as fat arrow functions :   myMethod = () => { DO SOMETHING }
     */
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  /**
   * State can be initialized as follows: it will automatically create the constructor and
   * put your state object inside
   */
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
