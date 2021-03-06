import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Counter from "./Counter";
import styles from "./Card.module.css";
import cx from "classnames";

export default function Cards({ confirmed, recovered, deaths }) {
  // const cardsTitles = ["deaths", "", ""];

  return (
    <Grid container spacing={3} justify="center">
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={cx(styles.container, styles.confirmed)}
      >
        <CardContent>
          <Typography gutterBottom>Confirmed</Typography>
          <Typography variant="h5">
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
          <Typography variant="h5">
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
          <Typography variant="h5">
            {deaths ? <Counter end={deaths} /> : "loading"}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}
