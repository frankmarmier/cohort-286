import React, { Component } from 'react';

class FormFood extends Component {
  state = {
    calories: 0,
    image: '',
    name: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      calories: this.state.calories,
      image: this.state.image,
      name: this.state.name,
    };

    this.props.handleCreateFood(newFood);
  };

  render() {
    return (
      <form className="my-5" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">
            Name
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="image">
            Image
          </label>
          <div className="control">
            <input
              className="input"
              name="image"
              id="image"
              type="text"
              value={this.state.image}
              onChange={this.handleChange}
              placeholder="image"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="calories">
            Calories
          </label>
          <div className="control">
            <input
              className="input"
              type="number"
              id="calories"
              name="calories"
              value={this.state.calories}
              onChange={this.handleChange}
              placeholder="calories"
            />
          </div>
        </div>
        <button className="button is-primary">Create</button>
      </form>
    );
  }
}

export default FormFood;
