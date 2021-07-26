const express = require("express");
const router = express.Router();
const PokedexWrapper = require("pokedex-promise-v2");
const Pokedex = new PokedexWrapper();

/**
 * ALL ROUTES HERE WILL BE PREFIXED WITH /pokemons
 */

router.get("/", (req, res, next) => {
  Pokedex.getPokemonsList()
    .then((apiRes) => {
      const data = {
        pokemons: apiRes.results,
      };
      console.log(apiRes.results);
      res.render("pokemons/pokemonList.hbs", data);
    })
    .catch((error) => {
      next(error);
      //   const err = new Error("What is life ?");
      //   next(err);
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Pokedex.getPokemonByName(id)
    .then((apiRes) => {
      //   res.json(apiRes);
      const data = {
        pokemon: apiRes,
      };

      res.render("pokemons/pokemonDetails.hbs", data);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
