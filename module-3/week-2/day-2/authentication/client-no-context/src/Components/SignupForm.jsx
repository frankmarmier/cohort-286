import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class SignupForm extends Component {
  state = {
    firstName: "",
    email: "",
    lastName: "",
    userName: "",
    password: "",
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      password: this.state.password,
      email: this.state.email,
    };

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/auth/signup", user, {
        withCredentials: true, //
      })
      .then(() => {
        this.props.history.push("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2> Hello stranger, please signup ! </h2>
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
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
        </div>
        <div>
          <label htmlFor="firstName">User name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={this.handleChange}
            value={this.state.userName}
          />
        </div>
        <div>
          <label htmlFor="password">password </label>
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

export default withRouter(SignupForm); // Pass history props  (location,match,history)
