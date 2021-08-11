import React, { Component } from "react";
import "../Styles/Form.css";

class FormMovies extends Component {
  state = {
    title: "",
    director: "",
    image: "",
    description: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);

    const movie = {
      title: this.state.title,
      director: this.state.director,
      image: this.state.image,
      description: this.state.description,
    };

    this.props.onSubmit(movie);
    // console.log(this.props.onSubmit);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <h2 className="Form__title">Create a movie</h2>

        <div className="Form__field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </div>
        <div className="Form__field">
          <label htmlFor="director">Director</label>
          <input
            id="director"
            type="text"
            name="director"
            onChange={this.handleChange}
            value={this.state.director}
          />
        </div>
        <div className="Form__field">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={this.handleChange}
            value={this.state.image}
          />
        </div>
        <div className="Form__field">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            cols={20}
            rows={10}
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </div>

        <button>Submit</button>
      </form>
    );
  }
}

export default FormMovies;
