import React from "react";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";

const Pokemon = props => {
  const { data, picture} = props;
  const pokemonData = data;
  let name, id, type1, type2;
  console.log(pokemonData);

  setAllInfo();

  if (pokemonData.types.length === 2) {
    type2 = pokemonData.types[1].type.name;

  }

  function hasTwoTypes() {
    return type1 && type2;
  }

  function setAllInfo() {
    name = pokemonData.name;
    id = pokemonData.id;
    type1 = pokemonData.types[0].type.name;
  }

  return (
    <div>
      {name && picture && (
        <div>
          <h1>Basic Info</h1>
          <img src={picture} alt="null" />
          <p>Name: {name}</p>
          <p>ID: {id}</p>

          {hasTwoTypes() ? (
            <p>
              Type: {type1} & {type2}
            </p>
          ) : (
            <p>Type: {type1}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Pokemon;
