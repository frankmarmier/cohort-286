import React from "react";
import GuitarList from "../../Components/GuitarList/GuitarList";
import axios from "axios";
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
        <div>Guitars !</div>

        <GuitarList guitars={this.state.guitars} />
      </div>
    );
  }
}

export default GuitarPage;
