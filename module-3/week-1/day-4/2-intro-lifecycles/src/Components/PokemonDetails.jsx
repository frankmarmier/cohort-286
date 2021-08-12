import React from "react";
import axios from "axios";

class PokemonDetails extends React.Component {
  state = {
    pokemon: null,
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.props.match.params.name)
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          this.setState({
            pokemon: response.data,
          });
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("this is prevprops", prevState);
    if (prevProps.match.params.name !== this.props.match.params.name) {
      axios
        .get(
          "https://pokeapi.co/api/v2/pokemon/" + this.props.match.params.name
        )
        .then((response) => {
          console.log(response);
          this.setState({
            pokemon: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    // console.log(this.props);
    console.log("wohouu");

    console.log(this.state);

    if (!this.state.pokemon) return <div>Loading...</div>;

    return (
      <div>
        <h1>Pokemon Details</h1>
        <p>{this.state.pokemon.name}</p>
        <img src={this.state.pokemon.sprites.back_default} alt="" />
      </div>
    );
  }
}

export default PokemonDetails;
