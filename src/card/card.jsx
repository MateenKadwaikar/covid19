import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import './card.css';

const Cards = ({ data: { deaths, confirmed, recovered, lastUpdate, isLoading } }) => {
  return (
    deaths.value || confirmed.value || recovered.value ?
      <div className="container">
        <Card className="root recovered">
          <CardContent className="title">
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
        <Card className="root infected">
          <CardContent className="title">
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
        <Card className="root deaths">
          <CardContent className="title">
            <Typography color="textSecondary" gutterBottom>
              Deaths
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
      : { isLoading } ? <span>Loading....</span> : null
  );

}
export default Cards;

