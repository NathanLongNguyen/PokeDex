import React from "react";
//import BasicInfo from "./PokeComp/BasicInfo";
import BaseStat from "./PokeComp/BaseStat";

const Pokemon = props => (
  <div>
    {props.name && props.picture && (
      <div>
        <h1>Basic Info</h1>

        <img src={props.picture} alt="null" />

        <p>Name: {props.name}</p>

        <p>ID: {props.id}</p>

        {props.type1 && !props.type2 && <p>Type: {props.type1}</p>}

        {props.type1 && props.type2 && (
          <p>
            Type: {props.type1} & {props.type2}
          </p>
        )}
      </div>
    )}
  </div>
);

/*class Pokemon extends React.Component {

	/*state = {
		name: this.props.name,
	    id: undefined,
	    picture: undefined,
	    type1: undefined,
	    type2: undefined,
	    speed: undefined,
	    specialdefense: undefined,
	    specialdttack: undefined,
	    defense: undefined,
	    attack: undefined,
	    hp: undefined,
	    error: undefined
	}*/

/*getData = async(e) => {
		e.preventDefault();
		console.log(this.props.link);
	}

	

	render() {

		

		return(

			<div>
				{this.props.name &&

					<h1>HI</h1>

					

					


				}
			</div>

		)
	}
}
*/
export default Pokemon;
