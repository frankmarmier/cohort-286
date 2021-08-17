import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./Components/NavMain";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";
import ProfilePage from "./Pages/ProfilePage";
import NotFoundPage from "./Pages/NotFoundPage";
import HomePage from "./Pages/HomePage";
import ProtectedRoute from "./Components/ProtectedRoute";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavMain />
        <main className="App__content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin">
              <SigninPage />
            </Route>
            <Route exact path="/signup" component={SignupPage} />
            <ProtectedRoute exact path="/profile" component={ProfilePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
