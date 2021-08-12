import React from "react";
import pokemonsJSON from "../data/data.json";

const PagePokemon = (props) => {
  //   console.log("props match", props.match.params.id);

  const foundPokemon = pokemonsJSON.find((pokemon) => {
    return pokemon.id === Number(props.match.params.id);
  });

  //   console.log(foundPokemon);

  return (
    <div>
      <h1>One Pokemon Page !</h1>
      <h2>{foundPokemon.name}</h2>
      <img src={foundPokemon.picture} alt={foundPokemon.name} />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default PagePokemon;
