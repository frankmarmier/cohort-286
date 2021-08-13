import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import RickAndMortyDetails from "./RickAndMortyDetails";
import axios from "axios";

class RickAndMorty extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        console.log("this is res", response);
        this.setState({
          characters: response.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Rick and Morty</h1>

        <Route
          exact
          path="/rick-and-morty/:id"
          component={RickAndMortyDetails}
        />

        <ul>
          <li>
            {this.state.characters.map((oneElement) => {
              return (
                <li>
                  {/* <Link to={"/rick-and-morty-details/" + oneElement.id}>
                    {oneElement.name}
                  </Link> */}
                  <Link to={`/rick-and-morty/${oneElement.id}`}>
                    {oneElement.name}
                  </Link>
                </li>
              );
            })}
          </li>
        </ul>
      </div>
    );
  }
}

export default RickAndMorty;
