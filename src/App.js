import React from "react";
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Pokemon from "./components/Pokemon";
import BaseStat from "./components/BaseStat";

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
  }

  getPokemon = async (e) => {
    e.preventDefault();
    const nameID = e.target.elements.name.value;
    const api_call = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameID}/`);
    const data = await api_call.json();
    console.log(data);
    const PokeName = data.name;
    let PicLink;
    let type2Set;
    PicLink = `http://www.pokestadium.com/sprites/xy/${PokeName}.gif`;
    //Set the src base on the id

    if(data.types.length === 2)
      type2Set = data.types[1].type.name;
    else
      type2Set = undefined;

    if(nameID){
      this.setState({
        link: `https://pokeapi.co/api/v2/pokemon/${nameID}/`,
        name: data.name, 
        id: data.id,
        picture: PicLink,
        type1: data.types[0].type.name,
        type2: type2Set,
        speed: data.stats[0].base_stat,
        specialdefense: data.stats[1].base_stat,
        specialattack: data.stats[2].base_stat,
        defense: data.stats[3].base_stat,
        attack: data.stats[4].base_stat,
        hp: data.stats[5].base_stat1,
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
  }


  render() {

    return(

      <div>
        <center>
          <Titles/>

          <Forms getPokemon={this.getPokemon}/>

          <Pokemon link={this.state.link} 
              name={this.state.name}
              id={this.state.id}
              picture={this.state.picture}
              type1={this.state.type1}
              type2={this.state.type2}
              speed={this.state.speed}
              error={this.state.error}
          />

          <BaseStat speed={this.state.speed}
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
};

export default App;