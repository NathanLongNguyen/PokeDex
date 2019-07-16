import React from "react";
import { Button } from "@material-ui/core";

// Update state of current pokemon to next evolution
const Evolution = props => {
  const {eData} = props;
  const evoultionData = eData;
  let currentChain = evoultionData.evolves_to;
  let currentSpecies = evoultionData.species.name;
  
  if(currentChain.length === 0) console.log(`${currentSpecies} does not have an evolution chain`);
  else printEvolutionChain();

  function printEvolutionChain() {
    while(currentChain.length !== 0){
      let minLvl = currentChain[0].evolution_details[0].min_level;
      console.log(`${currentSpecies} at lvl ${minLvl}`);
      console.log("evolves to"); 
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
