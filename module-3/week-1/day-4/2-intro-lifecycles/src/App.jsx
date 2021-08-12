import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Pokemons from "./Components/Pokemons";
import PokemonDetails from "./Components/PokemonDetails";

class App extends React.Component {
  state = {
    display: true,
  };

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <div
          style={{
            display: "flex",
          }}
        >
          <Pokemons />
          <Switch>
            <Route exact path="/:name" component={PokemonDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
