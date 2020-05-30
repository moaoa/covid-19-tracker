import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Counter from "./Counter";
import styles from "./Card.module.css";
import cx from "classnames";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: "0 20px",
  },
});

export default function Cards({ confirmed, recovered, deaths }) {
  const cardsTitles = ["deaths", "", ""];
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="conter">
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={cx(styles.container, styles.confirmed)}
      >
        <CardContent>
          <Typography gutterBottom>Confirmed</Typography>
          <Typography variant="h5">REAL DATA</Typography>
          <Typography color="textSecondary">REAL DATA</Typography>
          <Typography variant="body2">
            {confirmed ? <Counter end={confirmed} /> : "loading"}
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        component={Card}
        className={cx(styles.recovered, styles.container)}
        xs={12}
        md={3}
      >
        <CardContent>
          <Typography gutterBottom>Recovered</Typography>
          <Typography variant="h5">REAL DATA</Typography>
          <Typography color="textSecondary">REAL DATA</Typography>
          <Typography variant="body2">
            {recovered ? <Counter end={recovered} /> : "loading"}
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        component={Card}
        className={cx(styles.deaths, styles.container)}
        xs={12}
        md={3}
      >
        <CardContent>
          <Typography gutterBottom>Deaths</Typography>
          <Typography variant="h5">REAL DATA</Typography>
          <Typography color="textSecondary">REAL DATA</Typography>
          <Typography variant="body2">
            {deaths ? <Counter end={deaths} /> : "loading"}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}
