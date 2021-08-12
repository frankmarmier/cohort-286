import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Pokemons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      pokemons: [],
    };
    console.log("in construct");
  }

  //   state= {
  //  count: 0
  //   }
  componentDidMount() {
    console.log("In component did mount");
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        this.setState({
          pokemons: response.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    console.log("After update");
  }

  componentWillUnmount() {
    console.log("Unmounting...");
  }

  //   getPokemons = () => {
  //     axios
  //       .get("https://pokeapi.co/api/v2/pokemon")
  //       .then((response) => {
  //         this.setState({
  //           pokemons: response.data.results,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  render() {
    // console.log("wohooooooooooooooo");
    // console.log(this.state.pokemons);
    return (
      <div>
        {/* <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={this.getPokemons}>Get Pokemons</button> */}
        {this.state.pokemons.map((pokemon) => {
          return (
            <div>
              <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Pokemons;
