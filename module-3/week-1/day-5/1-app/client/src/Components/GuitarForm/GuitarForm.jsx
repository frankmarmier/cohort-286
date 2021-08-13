import React from "react";
import "../../Styles/Form.css";
import FormField from "../../Components/FormField/FormField";
import Button from "../../Components/Button/Button";

import axios from "axios";

class GuitarForm extends React.Component {
  state = {
    name: "",
    price: 100,
    image: "",
    description: "",
    isAvailable: true,
    error: null,
  };

  handleChange = (event) => {
    const key = event.target.name;
    // let value;
    // if (event.target.type === "checkbox") {
    //   value = event.target.checked;
    // } else {
    //   value = event.target.value;
    // }

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

    console.log(this.state);
    // send this information to the API !

    // POST http://localhost:4000/api/guitars

    const data = {
      name: this.state.name,
      description: this.state.description,
      isAvailable: this.state.isAvailable,
      image: this.state.image,
      price: this.state.price,
    };

    axios
      .post("http://localhost:4000/api/guitars", data)
      .then((response) => {
        // console.log(response);
        this.props.history.push("/guitars");
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {/* <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div> */}
        <FormField label="Name" htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormField>
        <FormField label="Price" htmlFor="price">
          <input
            type="number"
            name="price"
            id="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </FormField>

        <FormField label="Image" htmlFor="image">
          <input
            type="text"
            name="image"
            id="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </FormField>

        <FormField htmlFor="description" label="Description">
          <textarea
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormField>

        <FormField label="Available" htmlFor="isAvailable">
          <input
            type="checkbox"
            name="isAvailable"
            id="isAvailable"
            value={this.state.isAvailable}
            onChange={this.handleChange}
          />
        </FormField>

        <Button>Submit !</Button>
      </form>
    );
  }
}

export default GuitarForm;
