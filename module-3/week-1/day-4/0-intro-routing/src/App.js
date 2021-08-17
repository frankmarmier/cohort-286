import { Switch, Route, NavLink, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink exact to="/" className="link">
            Home
          </NavLink>
          <NavLink exact to="/contact" className="link">
            Contact
          </NavLink>
          <NavLink exact to="/about" className="link">
            About
          </NavLink>
          <a href="https://reactrouter.com/web/guides/quick-start">
            React Router DOM DOCS
          </a>
        </nav>
      </header>

      <Switch>
        {/* <Route
          exact
          path="/"
          render={(historyProps) => (
            <Home {...historyProps} myProp="I am a prop" />
          )}
        /> */}
        {/* <Route exact path="/">
          <Home foo={"yo"}/>
        </Route> */}
        <Route exact path="/">
          <Home foo={"yo"} />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>

      <footer>Hello i'm a footer !</footer>
    </div>
  );
}

export default App;
