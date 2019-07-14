import React from "react";
import Button from "@material-ui/core/Button";

const Forms = props => (

	<form onSubmit = {props.getPokemon}>
		
		<p>Type in the Pokemon's name or ID below.</p>

		<input type="text" autoComplete="off" name="name" placeholder="Name/ID..."/>

		<Button>Get Pokemon Info</Button>

	</form>



);

export default Forms;

