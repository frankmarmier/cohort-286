import React from "react";

const SimpleList = () => {
  const pokemons = [
    {
      name: "Pikachu",
    },
    {
      name: "Charizard",
    },
    {
      name: "Squirtle",
    },
  ];

  //   let myArray = [];

  //   for (let i = 0; i < pokemons.length; i++) {
  //     myArray.push(<li>{pokemons[i].name}</li>);
  //   }

  //    ["Pikachu", "Charizard", "Squirtle"]

  const myArray = pokemons.map((pokemon) => {
    return <li>{pokemon.name}</li>;
  });

  // return <ul>{myArray}</ul>;

  //   return (
  <ul>
    {pokemons.map((pokemon) => (
      <li key={pokemon.name}>{pokemon.name}</li>
    ))}
  </ul>;
  //   );

  return (
    <ul>
      {pokemons.map((pokemon) => {
        // console.log(pokemon);
        return <li key={pokemon.name}>{pokemon.name}</li>;
      })}
    </ul>
  );
};

export default SimpleList;
