import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        margin: '0 20px',
    },
})

export default function Cards({ confirmed, recovered, deaths }) {
    const cardsTitles = ['deaths', '', '']
    const classes = useStyles()

    return (
        <Grid container spacing={3} justify="conter">
            <Grid item component={Card} className={classes.root}>
                <CardContent>
                    <Typography gutterBottom>Confirmed</Typography>
                    <Typography variant="h5">REAL DATA</Typography>
                    <Typography color="textSecondary">REAL DATA</Typography>
                    <Typography variant="body2">
                        {confirmed ? confirmed : 'loading'}
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} className={classes.root}>
                <CardContent>
                    <Typography gutterBottom>Recovered</Typography>
                    <Typography variant="h5">REAL DATA</Typography>
                    <Typography color="textSecondary">REAL DATA</Typography>
                    <Typography variant="body2">
                        {recovered ? recovered : 'loading'}
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} className={classes.root}>
                <CardContent>
                    <Typography gutterBottom>Deaths</Typography>
                    <Typography variant="h5">REAL DATA</Typography>
                    <Typography color="textSecondary">REAL DATA</Typography>
                    <Typography variant="body2">
                        {deaths ? deaths : 'loading'}
                    </Typography>
                </CardContent>
            </Grid>
        </Grid>
    )
}
