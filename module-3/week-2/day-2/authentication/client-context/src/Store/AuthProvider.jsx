import React from "react";
import axios from "axios";
const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
  state = {
    user: null,
    isLoading: true,
  };

  componentDidMount() {
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
        console.log(error);
        this.setState({
          isLoading: false,
        });
      });
  }

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          setUser: this.setUser,
          isLoading: this.state.isLoading,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const withAuth = (Component) => {
  return (props) => {
    return (
      <AuthContext.Consumer>
        {(contextValue) => <Component {...props} context={contextValue} />}
      </AuthContext.Consumer>
    );
  };
};
