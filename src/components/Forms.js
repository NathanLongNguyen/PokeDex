import React from "react";
import { Button, TextField, MenuItem, FormGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "baseline"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "60%"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    // TODO
  }
}));

const Forms = props => {
  const classes = useStyles();

  return (
    <form className={classes.container} onSubmit={props.getPokemon}>
      <TextField
        id="nameID"
        // label="Type in the Pokemon's name or ID below"
        // InputLabelProps={{ shrink: true }}
        name="name"
        placeholder="Name/ID..."
        className={classes.textField}
        variant="outlined"
        margin="normal"
      />

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={props.getPokemon}
      >
        Get Pokemon Info
      </Button>
    </form>
  );
};

export default Forms;
