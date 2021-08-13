import { Component } from "react";
import GuitarDetails from "../../Components/GuitarDetails/GuitarDetails";
import axios from "axios";
import "./OneGuitarPage.css";

class OneGuitarPage extends Component {
  state = {
    guitar: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`http://localhost:4000/api/guitars/${id}`)
      .then((response) => {
        this.setState({
          guitar: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.guitar) return null;

    return (
      <div className="OneGuitarPage">
        <GuitarDetails guitar={this.state.guitar} />
      </div>
    );
  }
}

export default OneGuitarPage;
