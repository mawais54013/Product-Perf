import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "../components/Welcome.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import SimpleCard from './SimpleCard';
import Background from '../images/7Lx5.gif'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Welcome(props) {
  const { classes } = props;

  return (
    <div className={classes.root} id="area1">
      <Grid container spacing={24}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '90vh' }}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper} style={{backgroundColor: 'red', color: 'white'}}> */}
          <Paper className={classes.paper} style={{backgroundImage: `url(${Background})`,backgroundSize: 'cover',backgroundPosition: 'center'}}>
          <div class="knockout">NEXTGame</div>
          <Link to="/simple"><button class="button">Click To View Games</button></Link> 
          </Paper>
        </Grid>
        {/* <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);