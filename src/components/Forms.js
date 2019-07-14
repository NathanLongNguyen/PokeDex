import React from "react";
import { Button, TextField, MenuItem, FormGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const Forms = props => {
  const classes = useStyles();

  return (
    <form className={classes.container} onSubmit={props.getPokemon}>
      {/* <p>Type in the Pokemon's name or ID below.</p> */}

      {/* <input
        type="text"
        autoComplete="off"
        name="name"
        placeholder="Name/ID..."
      /> */}

      {/* <FormGroup row> */}
      <TextField
        id="nameID"
        label="Name/ID..."
        name="name"      
        className={classes.textField}
        margin="normal"
      />

      <div>
        <Button variant="contained" color="primary" onClick={props.getPokemon}>
          Get Pokemon Info
        </Button>
      </div>
      {/* </FormGroup> */}
    </form>
  );
};

export default Forms;
