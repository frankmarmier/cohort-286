import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pokemons from "./Pages/Pokemons";
import PagePokemon from "./Pages/PagePokemon";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemons" component={Pokemons} />
        <Route exact path="/pokemons/:id" component={PagePokemon} />
      </Switch>
    </div>
  );
}

export default App;
