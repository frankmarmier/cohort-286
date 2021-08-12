import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import FormFood from './Components/FormFood';
import FoodBox from './Components/FoodBox';
import foodsJSON from './foods.json';
import './App.css';

class App extends Component {
  state = {
    foods: foodsJSON,
    searchValue: '',
    displayForm: false,
    todaysFood: [],
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

  addFood = (food) => {
    this.setState({
      foods: [food, ...this.state.foods],
    });
  };

  handleSelectFood = (food) => {
    /**
     * The are many ways to make a copy of an array.
     * All the methods below are making a shallow copy
     * of the array.
     */

    // let todaysFoodCopy = this.state.todaysFood.map((food) => food);
    // let todaysFoodCopy = [...this.state.todaysFood]
    let todaysFoodCopy = this.state.todaysFood.slice();

    /**
     * We have to look into the todaysFood array before adding a new element
     * inside in order to avoid duplicates
     * If a food with the same name is found it means that we only want to
     * add the quantity and the calories to it
     * If no food is found we simply push the selected food coming from the FoodBox
     * into the todaysFood array
     */
    let found = todaysFoodCopy.find((el) => el.name === food.name);

    food.calories *= food.quantity;

    if (found) {
      const foundCopy = { ...found };
      foundCopy.quantity += food.quantity;
      foundCopy.calories += food.calories;

      /**
       * Using map, we can replace the "old food" with the copy we
       * just modified
       */

      this.setState({
        todaysFood: todaysFoodCopy.map((food) =>
          food.name === foundCopy.name ? foundCopy : food
        ),
      });
    } else {
      todaysFoodCopy.push(food);
      this.setState({
        todaysFood: todaysFoodCopy,
      });
    }
  };

  render() {
    const filteredFoods = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(this.state.searchValue);
    });

    const totalCalories = this.state.todaysFood.reduce(
      (accumulator, currentFood) => {
        return (accumulator += currentFood.calories);
      },
      0
    );

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
        {this.state.displayForm && <FormFood handleCreateFood={this.addFood} />}
        <div className="columns">
          <div className="column">
            {filteredFoods.map((food, index) => {
              return (
                <FoodBox
                  handleSelect={this.handleSelectFood}
                  key={index}
                  food={food}
                />
              );
            })}
          </div>

          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>

            <ul>
              {this.state.todaysFood.map((food, index) => (
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
