import React from "react";
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Pokemon from "./components/Pokemon";
import BaseStat from "./components/BaseStat";

class App extends React.Component {
  state = {
    pokemon: undefined,
    link: undefined,
    name: undefined,
    id: undefined,
    picture: undefined,
    type1: undefined,
    type2: undefined,
    speed: undefined,
    specialdefense: undefined,
    specialdttack: undefined,
    defense: undefined,
    attack: undefined,
    hp: undefined,
    error: undefined
  };

  // function called when user clicks on Get pokemon info
  getPokemon = async e => {
    e.preventDefault();
    // const nameID = e.target.elements.name.value;
    const nameID = document.getElementById("nameID").value;

    const api_call = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameID}/`
    );

    try {
      const pokemon = await api_call.json(); // data = json object
      console.log(pokemon);
      const PokeName = pokemon.name;
      let PicLink;
      let type2Set;
      PicLink = `http://www.pokestadium.com/sprites/xy/${PokeName}.gif`;

      if (pokemon.types.length === 2) {
        type2Set = pokemon.types[1].type.name;
      }

      if (nameID) {
        this.setState({
          link: `https://pokeapi.co/api/v2/pokemon/${nameID}/`,
          name: pokemon.name,
          id: pokemon.id,
          picture: PicLink,
          type1: pokemon.types[0].type.name,
          type2: type2Set,
          speed: pokemon.stats[0].base_stat,
          specialdefense: pokemon.stats[1].base_stat,
          specialattack: pokemon.stats[2].base_stat,
          defense: pokemon.stats[3].base_stat,
          attack: pokemon.stats[4].base_stat,
          hp: pokemon.stats[5].base_stat1,
          error: ""
        });
      } else {
        this.setState({
          name: undefined,
          id: undefined,
          picture: undefined,
          type1: undefined,
          type2: undefined,
          error: "Enter a valid name or ID"
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <center>
          <Titles />

          <Forms getPokemon={this.getPokemon} />

          <Pokemon
            link={this.state.link}
            name={this.state.name}
            id={this.state.id}
            picture={this.state.picture}
            type1={this.state.type1}
            type2={this.state.type2}
            speed={this.state.speed}
            error={this.state.error}
          />

          <BaseStat
            speed={this.state.speed}
            specialdefense={this.state.specialdefense}
            specialattack={this.state.specialattack}
            defense={this.state.defense}
            attack={this.state.attack}
            hp={this.state.hp}
          />
        </center>
      </div>
    );
  }
}

export default App;
