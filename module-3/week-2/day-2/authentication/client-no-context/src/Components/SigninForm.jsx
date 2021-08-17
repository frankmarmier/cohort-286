import React, { Component } from "react";
import axios from "axios";

class SigninForm extends Component {
  state = {
    email: "titi@gmail.com",
    password: "1234",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/auth/signin", user, {
        withCredentials: true, // send request with cookie
      })
      .then((apiResponse) => {
        this.props.onSubmit(apiResponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Welcome back !</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default SigninForm;
