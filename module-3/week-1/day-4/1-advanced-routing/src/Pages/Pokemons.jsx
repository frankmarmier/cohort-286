import React from "react";
import { Link } from "react-router-dom";
import pokemonsJSON from "../data/data.json";

const Pokemons = (props) => {
  return (
    <div>
      <h1>Pokemons !</h1>
      {pokemonsJSON.map((pokemon) => {
        return (
          <div>
            <Link to={"/pokemons/" + pokemon.id}>
              <img src={pokemon.picture} alt={pokemon.name} />
            </Link>
            <p>{pokemon.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemons;
