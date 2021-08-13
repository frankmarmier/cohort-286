import React from "react";
import axios from "axios";

class RickAndMortyDetails extends React.Component {
  state = {
    character: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("https://rickandmortyapi.com/api/character/" + id)
      .then((response) => {
        // console.log(response);
        this.setState({
          character: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("this is prevProps,", prevProps);
    // console.log("this is prevState,", prevState);

    console.log("previous", prevProps.match.params.id);
    console.log("current,", this.props.match.params.id);

    // console.log("Updating....");
    // console.log("wohooooooooooooooooooooooooooooooooooooooooooooooooooo");

    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;

    if (this.props.match.params.id !== prevProps.match.params.id) {
      axios
        .get("https://rickandmortyapi.com/api/character/" + id)
        .then((response) => {
          console.log(response);
          this.setState({
            character: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    // console.log(this.props.match.params.id);

    if (this.state.character === null) {
      return <div>Loading ...</div>;
    }

    // if (Object.keys(this.state.character).length === 0) {
    //   return <div>Loading...</div>;
    // }

    return (
      <div>
        <h1>{this.state.character.name} Details</h1>
        <p>{this.state.character.origin.name}</p>
      </div>
    );
  }
}

export default RickAndMortyDetails;
