import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import FormFood from './Components/FormFood';
import FoodBox from './Components/FoodBox';
import foodsJSON from './foods.json';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

/**
 * This example uses the uuid library from NPM in order to generate unique id's
 * when none are provided either by an API or a JSON file
 *        https://www.npmjs.com/package/uuid
 *
 * We also handle differently the selectedFood and its quantity
 * Instead of creating an array of "todaysFood" to differentiate the food
 * that have been selected by a user
 * We add a "selected" (boolean) in order to know if a user has selected a food or not
 * This changes the code a bit from solution n°1
 * We have to update the foods array each time a user selects a food, we need to toggle
 * the "selected" property to true and update the quantity with the quantity the user
 * has selected.
 * Also when we create a new food, we create an id using the uuid library and we add
 * a selected property to it aswell
 */

class App extends Component {
  state = {
    foods: foodsJSON.map((food) => {
      return { ...food, id: uuidv4(), selected: false };
    }), // Initialize state from the JSON file adding "id" and "selected" properties
    searchValue: '',
    displayForm: false,
  };

  handleSearchValue = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  toggleForm = () => {
    this.setState({
      displayForm: !this.state.displayForm,
    });
  };

  addFoo = (createdFood) => {
    createdFood.selected = false; // Add "selected" property initialized to false
    createdFood.id = uuidv4(); // Add unique id
    createdFood.quantity = 0; // Add quantity

    this.setState({
      foods: [createdFood, ...this.state.foods], // Add element to beginning of the array
    });
  };

  handleSelectFood = (selectedFood) => {
    /**
     * Using the id we find the selectedFood coming from the FoodBox,
     * only the id and the quantity interests us in our case but for simplicity
     * We just pass (from the FoodBox) the selected food with a quantity property
     * We use the id in order to update the "selected" property to true
     * and add the "quantity" to the selected quantity
     */

    const foundFood = this.state.foods.find(
      (food) => food.id === selectedFood.id
    );

    const foundFoodCopy = { ...foundFood };

    foundFoodCopy.selected = true;
    foundFoodCopy.quantity += selectedFood.quantity;

    /**
     * We replace the old food with the copied food that
     * has the updated properties
     * There are many ways to do that, with map(),
     * and with splice() or array index (array[index] = value)
     * If we know the index of the element (using findIndex())
     */

    /**
     * With map()
     */

    this.setState({
      foods: this.state.foods.map((food) =>
        food.id === foundFoodCopy.id ? foundFoodCopy : food
      ),
    });

    /**
     * With splice() and array index
     */

    // const foundIndex = this.state.foods.findIndex(
    //   (food) => food.id === selectedFood.id
    // );

    // const foodsCopy = [...this.state.foods];

    // foodsCopy.splice(foundIndex, 1, foundFoodCopy);
    // OR
    // foodsCopy[foundIndex] = foundFoodCopy;

    // this.setState({
    //   foods: foodsCopy,
    // });
  };

  render() {
    const filteredFoods = this.state.foods.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

    const todaysFoods = this.state.foods.filter((food) => food.selected);

    const totalCalories = todaysFoods.reduce((accumulator, currentFood) => {
      return (accumulator += currentFood.calories * currentFood.quantity);
    }, 0);

    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>

        <div>
          <SearchBar
            handleChange={this.handleSearchValue}
            value={this.state.searchValue}
          />
        </div>

        <button className="button is-info mb-5" onClick={this.toggleForm}>
          Create food
        </button>

        {/* 
          The button above will change the state of displayForm,
          We use this state in order to conditionally render the form with a 
          guard operator
        */}
        {this.state.displayForm && <FormFood handleCreateFood={this.addFoo} />}

        <div className="columns">
          <div className="column">
            {filteredFoods.map((food) => {
              return (
                <FoodBox
                  handleSelect={this.handleSelectFood}
                  key={food.id}
                  food={food}
                />
              );
            })}
          </div>

          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>

            <ul>
              {todaysFoods.map((food, index) => (
                <li key={index}>
                  {food.quantity} {food.name} = {food.calories} cal
                </li>
              ))}
            </ul>

            <strong>Total: {totalCalories} cal</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
