import React from "react";
import { Button } from "@material-ui/core";

// Update state of current pokemon to next evolution
const Evolution = props => {
  const {eData} = props;
  const evoultionData = eData;
  printAllEvolutions();

  function printAllEvolutions(){
    let currentChain = evoultionData.evolves_to;
    let currentSpecies = evoultionData.species.name;
    if(currentChain.length === 0) console.log(`${currentSpecies} does not have an evolution chain`);
    while(currentChain.length !== 0){
      console.log(currentSpecies);
      console.log("evolves to")
      currentSpecies = currentChain[0].species.name;
      currentChain = currentChain[0].evolves_to;
    }
    console.log(currentSpecies); 
  }
  
  return (
    <Button color="primary">Get Evolution</Button>   
  );
};

export default Evolution;
