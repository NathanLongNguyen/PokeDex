import React from "react";
import { Button } from "@material-ui/core";

// Update state of current pokemon to next evolution
const Evolution = props => {
  const {eData} = props;
  const evoultionData = eData;
  printAllEvolutions();

  function printAllEvolutions(){
    let currentChain = evoultionData.evolves_to.length;
    let currentSpecies = evoultionData.species.name;
    if(currentChain === 0) console.log(`${currentSpecies} does not have an evolution chain`);
    console.log(currentChain);
  }
  
  return (
    <Button color="primary">Get Evolution</Button>   
  );
};

export default Evolution;
