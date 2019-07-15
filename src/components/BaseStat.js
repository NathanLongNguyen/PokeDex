import React from "react";

const BaseStat = props => {
  const { speed, attack, defense, specialattack, specialdefense } = props;

  return (
    <div>
      {speed && (
        <div>
          <h1>Base Stats</h1>
          <p>Speed: {speed}</p>
          <p>Attack: {attack}</p>
          <p>Defense: {defense}</p>
          <p>Special Attack: {specialattack}</p>
          <p>Special Defense: {specialdefense}</p>
        </div>
      )}
    </div>
  );
};

export default BaseStat;
