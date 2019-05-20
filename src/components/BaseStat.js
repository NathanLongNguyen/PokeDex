import React from "react";

const BaseStat = props =>(

	/*<div>

		<h1>Base Stats</h1>

		{props.speed && <p>Speed: {props.speed}</p>}

		{props.attack && <p>Attack: {props.attack}</p>}

		{props.defense && <p>Defense: {props.defense}</p>}

		{props.specialattack && <p>Special Attack: {props.specialattack}</p>}

		{props.specialdefense && <p>Special Defense: {props.specialdefense}</p>}

	</div>*/

	<div>
		{
			props.speed &&

			<div>
				<h1>Base Stats</h1>

				<p>Speed: {props.speed}</p>

				<p>Attack: {props.attack}</p>

				<p>Defense: {props.defense}</p>

				<p>Special Attack: {props.specialattack}</p>

				<p>Special Defense: {props.specialdefense}</p>
				
			</div>
		}
	</div>

);

export default BaseStat;