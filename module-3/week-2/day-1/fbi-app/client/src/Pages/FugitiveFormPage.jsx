import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class FugitiveFormPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    found: false,
    picture: "",
    threatLevel: "low",
    lastSeen: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    if (this.props.action === "update") {
      axios
        .get("http://localhost:4000/api/fugitives/" + id)
        .then((apiResponse) => {
          console.log(apiResponse);
          const data = apiResponse.data;
          // this.setState({
          //   firstName: data.firstName,
          //   lastName: data.lastName,
          //   found: data.found,
          //   picture: data.picture,
          //   threatLevel: data.threatLevel,
          //   lastSeen: data.lastSeen,
          // });

          this.setState({
            ...data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleChange = (event) => {
    const key = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const fugitive = {
      picture: this.state.picture,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      lastSeen: this.state.lastSeen,
      threatLevel: this.state.threatLevel,
      found: this.state.found,
    };

    if (this.props.action === "create") {
      axios
        .post("http://localhost:4000/api/fugitives", fugitive)
        .then((apiResponse) => {
          console.log(apiResponse);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const id = this.props.match.params.id;
      axios
        .patch(`http://localhost:4000/api/fugitives/${id}`, fugitive)
        .then((apiResponse) => {
          console.log(apiResponse);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div>
        <h1>Hello {this.props.action === "create" ? "Create" : "Edit"}</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Lastname</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="picture">Picture</label>
            <input
              type="text"
              id="picture"
              name="picture"
              value={this.state.picture}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="threatLevel">Threat level</label>
            <select
              name="threatLevel"
              id="threatLevel"
              value={this.state.threatLevel}
              onChange={this.handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label htmlFor="lastSeen">Last seen</label>
            <input
              type="date"
              id="lastSeen"
              name="lastSeen"
              value={this.state.lastSeen}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="found">Found</label>
            <input
              type="checkbox"
              id="found"
              name="found"
              value={this.state.found}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(FugitiveFormPage);
