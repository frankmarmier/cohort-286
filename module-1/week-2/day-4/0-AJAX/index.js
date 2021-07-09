// console.log("Hello world");
// console.log(axios)

const list = document.getElementById("pokemons");
const treeList = document.getElementById("trees");

// axios
//   .get("https://ironhack-pokeapi.herokuapp.com/pokemon")
//   .then(function (response) {
//     console.log(response);

//     const pokemons = response.data;

//     pokemons.forEach((pokemon) => {
//       list.innerHTML += `<li>${pokemon.name}</li>`;
//     });
//   })
//   .catch(function (errorResponse) {
//     console.log(errorResponse);
//   });

console.log("I am before the get");

axios
  .get(
    "https://opendata.paris.fr/api/records/1.0/search/?dataset=les-arbres&q=&facet=typeemplacement&facet=domanialite&facet=arrondissement&facet=libellefrancais&facet=genre&facet=espece&facet=varieteoucultivar&facet=circonferenceencm&facet=hauteurenm&facet=stadedeveloppement&facet=remarquable"
  )
  .then((successResponse) => {
    console.log(successResponse);

    const trees = successResponse.data.records;

    trees.forEach((tree) => {
      treeList.innerHTML += `<li>${tree.fields.libellefrancais}</li>`;
    });
  })
  .catch((errorResponse) => {
    console.log(errorResponse);
  });

console.log("I am after the get");
