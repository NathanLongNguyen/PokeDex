import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { sizing } from '@material-ui/system';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import Pokemon from "./Pokemon";
import BaseStat from "./BaseStat";

const useStyles = makeStyles({
  card: {
    maxWidth: "40%"
  },
  media: {
    height: 140,
    width: "100%",
  }
});

const PokemonPaper = props => {
  const classes = useStyles();
  const { name, picture, id, type1, type2 } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title={name}
        />
      </CardActionArea>
    </Card>
  );
};

export default PokemonPaper;
