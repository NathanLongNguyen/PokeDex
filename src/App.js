import React from "react";
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Pokemon from "./components/Pokemon";
import BaseStat from "./components/BaseStat";
import Evolution from "./components/Evolution";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { sizing } from "@material-ui/system";
import { Container, Divider, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

class App extends React.Component {
  state = {
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

  // Sets all state in app
  setAllState = async nameID => {
    const pokemonData = await this.getPokemonByNameID(nameID);
    const pictureLink = this.getPicturelink(pokemonData.name);
    let type2Set = undefined;

    if (pokemonData.types.length === 2) {
      type2Set = pokemonData.types[1].type.name;
    }

    if (nameID) {
      this.setState({
        link: `https://pokeapi.co/api/v2/pokemon/${nameID}/`,
        name: pokemonData.name,
        id: pokemonData.id,
        picture: pictureLink,
        type1: pokemonData.types[0].type.name,
        type2: type2Set,
        speed: pokemonData.stats[0].base_stat,
        specialdefense: pokemonData.stats[1].base_stat,
        specialattack: pokemonData.stats[2].base_stat,
        defense: pokemonData.stats[3].base_stat,
        attack: pokemonData.stats[4].base_stat,
        hp: pokemonData.stats[5].base_stat1,
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
  };

  getPokemonByNameID = nameID => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nameID}/`)
      .then(pokemon => pokemon.data)
      .catch(error => error);
  };

  getPicturelink = pokemonName => {
    return `http://www.pokestadium.com/sprites/xy/${pokemonName}.gif`;
  };

  getSpeciesData = pokemonSpecies => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonSpecies}`)
      .then(specie => specie.data)
      .catch(error => error);
  };

  getEvolutionChainData = evolutionChainURL => {
    return axios
      .get(evolutionChainURL)
      .then(evolution => evolution.data)
      .catch(error => error);
  };

  // function called when user clicks on Get pokemon info
  getPokemon = async e => {
    e.preventDefault();
    let nameID = document.getElementById("nameID").value;

    if (typeof nameID === "string") {
      nameID = nameID.toLowerCase();
    }

    try {
      // Gets pokemon data
      const pokemonData = await this.getPokemonByNameID(nameID);
      const pokemonName = pokemonData.name;
      const pictureLink = this.getPicturelink(pokemonName);
      console.log(pokemonData);

      // Gets species data
      const pokeSpecies = pokemonData.species.name;
      const speciesData = await this.getSpeciesData(pokeSpecies);
      console.log(speciesData);

      // Get Evolution chain data
      const evolutionChainURL = speciesData.evolution_chain.url;
      const evolutionData = await this.getEvolutionChainData(evolutionChainURL);
      console.log(evolutionData);

      // Set state of pokemon
      this.setAllState(nameID);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container maxWidth="sm">
        <center>
          <Titles />

          <Forms getPokemon={this.getPokemon} />

          {/* TODO: fix rendering */}
          {this.state.name && (
            <Paper elevation={10} square={false}>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <BaseStat
                    speed={this.state.speed}
                    specialdefense={this.state.specialdefense}
                    specialattack={this.state.specialattack}
                    defense={this.state.defense}
                    attack={this.state.attack}
                    hp={this.state.hp}
                  />
                  <Evolution />
                </Grid>
              </Grid>
            </Paper>
          )}
        </center>
      </Container>
    );
  }
}

export default App;
