import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    minWidth: 275,
    marginRight: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  mainDiv: {
    display: 'flex',
    marginTop: 20,
  }
});

const Cards = ({ data: { deaths, confirmed, recovered, lastUpdate } }) => {
  const classes = useStyles();
  return (
    deaths.value || confirmed.value || recovered.value ?
      <div className={classes.mainDiv}>
        <Card className={classes.root}>
          <CardContent className={classes.title}>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="body2" component="p">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
              <br />
            </Typography>
            <Typography variant="body2" component="p">
              {new Date(lastUpdate).toDateString()}
              <br />
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent className={classes.title}>
            <Typography color="textSecondary" gutterBottom>
              Infected
          </Typography>
            <Typography variant="body2" component="p">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
              <br />
            </Typography>
            <Typography variant="body2" component="p">
              {new Date(lastUpdate).toDateString()}
              <br />
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent className={classes.title}>
            <Typography color="textSecondary" gutterBottom>
              Death
          </Typography>
            <Typography variant="body2" component="p">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
              <br />
            </Typography>
            <Typography variant="body2" component="p">
              {new Date(lastUpdate).toDateString()}
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
      : null
  );

}
export default Cards;

