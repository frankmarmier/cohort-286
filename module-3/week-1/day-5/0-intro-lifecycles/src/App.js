import logo from "./logo.svg";
import "./App.css";
import Lifecycle from "./Lifecycle";
import Home from "./Home";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Chronometer from "./Chronometer";
import RickAndMorty from "./RickAndMorty";
import RickAndMortyDetails from "./RickAndMortyDetails";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/lifecycle">
          Life cycle
        </NavLink>
        <NavLink exact to="/chronometer">
          Chronometer
        </NavLink>
        <NavLink exact to="/rick-and-morty">
          Rick and Morty
        </NavLink>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lifecycle" component={Lifecycle} />
        <Route exact path="/chronometer" component={Chronometer} />
        <Route path="/rick-and-morty" component={RickAndMorty} />
        {/* <Route
          exact
          path="/rick-and-morty-details/:id"
          component={RickAndMortyDetails}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
