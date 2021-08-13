import { Switch, Route } from "react-router-dom";
import NavMain from "./Components/NavMain/NavMain";
import GuitarPage from "./Pages/GuitarPage/GuitarPage";
import HomePage from "./Pages/HomePage/HomePage";
import GuitarForm from "./Components/GuitarForm/GuitarForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />

      <main className="App__main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/guitars" component={GuitarPage} />
          <Route exact path="/guitars/create" component={GuitarForm} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
