import React from "react";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";

const Pokemon = props => {
  const { name, picture, id, type1, type2 } = props;

  function hasTwoTypes() {
    return type1 && type2;
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
