import React, { Component } from "react";

class StateList extends Component {
  state = {
    pokemons: [
      {
        name: "Squirtle",
        isCute: true,
      },
      {
        name: "Charizard",
        isCute: false,
      },
      {
        name: "Pikachu",
        isCute: true,
      },
    ],
  };

  handleRemove = (pokemon) => {
    console.log("clicked: ", pokemon); // {name: "Pikachu"}
    // const newArray = [...this.state.pokemons];
    // console.log("Clickity click");
    // console.log(event.target);
    //{name: "Charizard"}
    const newArray = this.state.pokemons.filter((p) => p.name !== pokemon.name);

    // const copy = [...this.state.pokemons];

    this.setState({
      pokemons: newArray,
    });
  };

  handleSort = () => {
    // this.state.pokemons.sort((a, b) => {
    //   return a.name.localeCompare(b.name);
    // });

    const copy = [...this.state.pokemons];

    copy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    this.setState({
      pokemons: copy,
    });
  };

  render() {
    if (!this.state.pokemons.length) {
      return <div>You most likely obliterated them all !</div>;
    }

    return (
      <div>
        <button onClick={this.handleSort}>Sort !</button>
        <ul>
          {!this.state.pokemons.length && (
            <li>You have no pokemons to obliterate !</li>
          )}
          {this.state.pokemons.map((pokemon) => {
            return (
              <li
                key={pokemon.name}
                style={{
                  border: "1px solid black",
                  marginBottom: 10,
                }}
              >
                {pokemon.name}
                {pokemon.isCute && <p>This pokemon is cute</p>}
                <span>
                  <button
                    onClick={() => {
                      this.handleRemove(pokemon);
                    }}
                  >
                    Obliterate !
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default StateList;
