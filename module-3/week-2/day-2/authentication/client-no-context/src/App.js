import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./Components/NavMain";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";
import ProfilePage from "./Pages/ProfilePage";
import NotFoundPage from "./Pages/NotFoundPage";
import HomePage from "./Pages/HomePage";
import axios from "axios";
import ProtectedRoute from "./Components/ProtectedRoute";
import "./App.css";

class App extends React.Component {
  state = {
    user: null,
    isLoading: true,
  };

  componentDidMount() {
    // check with the backend if the user is logged in
    // if we make a request to /api/users/me, there might be an
    // error, if it's the case it's either because the user hasn't
    // loggedin yet, or there is an error with the session, so we don't
    // log him in when this component mounts (our app)
    // If the response is successful, it means the user has a valid session
    // ongoing, and the route will send us the user information

    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/users/me", {
        withCredentials: true,
      })
      .then((apiResponse) => {
        this.setState({
          user: apiResponse.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        });
      });
  }

  isLoggedIn = () => {
    return this.state.user !== null;
  };

  setUser = (user) => {
    console.log("here");
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div className="App">
        <NavMain
          isLoggedIn={this.isLoggedIn()}
          logout={() => this.setUser(null)}
        />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <main className="App__content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin">
              <SigninPage onSubmit={this.setUser} />
            </Route>
            <Route exact path="/signup" component={SignupPage} />
            {/* <Route exact path="/profile">
              <ProfilePage
                isLoading={this.state.isLoading}
                isLoggedIn={this.isLoggedIn()}
                user={this.state.user}
              />
            </Route> */}
            <ProtectedRoute
              isLoggedIn={this.isLoggedIn()}
              isLoading={this.state.isLoading}
              exact
              path="/profile"
            >
              <ProfilePage user={this.state.user} />
            </ProtectedRoute>

            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
