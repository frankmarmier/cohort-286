import React, { Component } from "react";

// React DOCS on Forms

// https://reactjs.org/docs/forms.html

class FormAnimes extends Component {
  state = {
    title: "",
    description: "",
    hasSubtitles: false,
  };

  handleTitle = (event) => {
    // console.log(event); // the event object
    // console.log(event.target); // the element that triggered the event
    const value = event.target.value;
    console.log(value);

    this.setState({
      title: value,
    });
  };

  handleDescription = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({
      description: value,
    });
  };

  handleSubtitles = (event) => {
    const value = event.target.checked;
    console.log(value);
    this.setState({
      hasSubtitles: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // disable default behaviour of a form which is to send
    // a request and refresh the page.
    console.log("Submitting...");
    console.log(this.state);
  };

  handleChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target);
    // console.log(event.target.name);
    const name = event.target.name;

    let value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create animes !</h2>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            // onChange={this.handleTitle}
            onChange={this.handleChange}
            value={this.state.title}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={this.handleChange}
            // onChange={this.handleDescription}
            value={this.state.description}
            type="text"
            name="description"
            id="description"
          />
        </div>
        <div>
          <label htmlFor="subtitles">Subtitles</label>
          <input
            checked={this.state.hasSubtitles}
            // onChange={this.handleSubtitles}
            onChange={this.handleChange}
            type="checkbox"
            name="hasSubtitles"
            id="subtitles"
          />
        </div>
        <button>Click !</button>
      </form>
    );
  }
}

export default FormAnimes;
