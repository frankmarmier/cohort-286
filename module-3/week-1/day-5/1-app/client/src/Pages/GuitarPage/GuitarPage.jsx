import React from "react";
import GuitarList from "../../Components/GuitarList/GuitarList";
import axios from "axios";

import "./GuitarPage.css";

class GuitarPage extends React.Component {
  state = {
    guitars: [],
  };

  componentDidMount() {
    // GET http://localhost:4000/api/guitars

    axios
      .get("http://localhost:4000/api/guitars")
      .then((response) => {
        this.setState({
          guitars: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="GuitarPage">
        <h1 className="GuitarPage__title">Check out our latest guitars</h1>

        <GuitarList guitars={this.state.guitars} />
      </div>
    );
  }
}

export default GuitarPage;
