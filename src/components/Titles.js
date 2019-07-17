import React from 'react'
import {Spring} from 'react-spring/renderprops'

export default function Titles() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -600 }}
      to={{opacity:1, marginTop:0}}
    >
      {props => (
        <div style={props}>
          <h1>Welcome Trainers!</h1>
          <p>This is your personal pokedex. Here you can learn more about pokemon</p>
      </div>
      )}
    </Spring>
  )
}


/* import React from "react";

const Titles = () => (
  <div>
    <h1>Welcome Trainers!</h1>
    <p>This is your personal pokedex. Here you can learn more about pokemon</p>
  </div>
);

export default Titles;
 */