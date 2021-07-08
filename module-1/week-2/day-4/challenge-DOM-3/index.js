const pokemons = [
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/001Bulbasaur.png",
    id: 0,
    name: "Bulbasaur",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/002Ivysaur.png",
    id: 1,
    name: "Ivysaur",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/003Venusaur.png",
    id: 2,
    name: "Venusaur",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/004Charmander.png",
    id: 3,
    name: "Charmander",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/005Charmeleon.png",
    id: 4,
    name: "Charmeleon",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/006Charizard.png",
    id: 5,
    name: "Charizard",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/007Squirtle.png",
    id: 6,
    name: "Squirtle",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/008Wartortle.png",
    id: 7,
    name: "Wartortle",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/009Blastoise.png",
    id: 8,
    name: "Blastoise",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/010Caterpie.png",
    id: 9,
    name: "Caterpie",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/011Metapod.png",
    id: 10,
    name: "Metapod",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/012Butterfree.png",
    id: 11,
    name: "Butterfree",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/013Weedle.png",
    id: 12,
    name: "Weedle",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/014Kakuna.png",
    id: 13,
    name: "Kakuna",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/015Beedrill.png",
    id: 14,
    name: "Beedrill",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/016Pidgey.png",
    id: 15,
    name: "Pidgey",
  },
  {
    picture: "https://ironhack-pokeapi.herokuapp.com/img/017Pidgeotto.png",
    id: 16,
    name: "Pidgeotto",
  },
];

const pokemonList = document.getElementById("pokemon-list");
const filterInput = document.getElementById("input-filter-pokemon");

filterInput.oninput = () => {
  const inputValue = filterInput.value;

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  listPokemons(filteredPokemons);
};

listPokemons(pokemons);

function listPokemons(pokemons) {
  pokemonList.innerHTML = "";
  pokemons.forEach((pokemon) => {
    const pokemonItem = createPokemonListItem(pokemon);
    pokemonList.appendChild(pokemonItem);
  });
}

function createPokemonListItem(pokemon) {
  const listItem = document.createElement("li");
  listItem.classList.add("pokemon");

  listItem.textContent = pokemon.name;
  listItem.setAttribute("data-id", pokemon.id);

  listItem.onclick = handleSelection;

  return listItem;
}

function handleSelection(event) {
  const id = Number(event.target.getAttribute("data-id"));

  // console.log(event.target);
  const foundPokemon = pokemons.find((pokemon) => pokemon.id === id);

  const pokemonDisplay = document.getElementById("selected-pokemon");

  pokemonDisplay.innerHTML = `
        <div>${foundPokemon.name}</div>
        <img src="${foundPokemon.picture}" />
    `;
}

// function createPokemonListItem(pokemon) {
//   const listItem = document.createElement("li");
//   listItem.classList.add("pokemon");

//   listItem.textContent = pokemon.name;
//   listItem.setAttribute("data-id", pokemon.id);

//   listItem.onclick = () => {
//     const pokemonDisplay = document.getElementById("selected-pokemon");

//     pokemonDisplay.innerHTML = `
//           <div>${pokemon.name}</div>
//           <img src="${pokemon.picture}" />
//       `;
//   };

//   return listItem;
// }
