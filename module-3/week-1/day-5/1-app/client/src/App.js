import { Switch, Route } from "react-router-dom";
import NavMain from "./Components/NavMain/NavMain";
import GuitarPage from "./Pages/GuitarPage/GuitarPage";
import HomePage from "./Pages/HomePage/HomePage";
import OneGuitarPage from "./Pages/OneGuitarPage/OneGuitarPage";
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
          <Route exact path="/guitars/:id" component={OneGuitarPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
