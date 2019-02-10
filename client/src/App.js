import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import API from "./utils/API";
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SimpleCard from "./components/SimpleCard";
import Welcome from './components/Welcome';
import product from "./components/Product";
import { CardActionArea, Typography } from '@material-ui/core';

class App extends Component {
  
  state={
    hackJobs: [],
    showHackJobs: false,
    games: [],
    images: [],
  };

  tester = () => {
    API.getgameData()
    .then(res => {
      // console.log("testing games");
      console.log(res.data[0].cover);
      this.setState({ games: res.data[0],
       images: res.data[0].cover.url })
    });
  }

  render() {
    const { classes } = this.props;
    return (

      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/simple" exact component={SimpleCard}/>
          </Switch>
          
        </>
      </Router>
    )
   
  }
}

export default App;