const btn = document.getElementById("btn");

btn.onclick = function (event) {
  const pokemonList = document.querySelector(".pokemons");
  //   const pokemonsLength = document.querySelectorAll(".pokemons li").length;

  //   pokemonList.innerHTML += `<li>Pokemon ${pokemonList.children.length}</li>`;
  pokemonList.innerHTML += `<li>Pokemon ${pokemonsLength}</li>`;
};
