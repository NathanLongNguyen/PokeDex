import React from "react";

const Forms = props => (
  <form onSubmit={props.getPokemon}>
    <p>Type in the Pokemon's name or ID below.</p>

    <input
      type="text"
      autoComplete="off"
      name="name"
      placeholder="Name/ID..."
    />

    <button>Get Pokemon Info</button>
  </form>
);

export default Forms;
