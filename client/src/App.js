import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import API from "./utils/API";
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SearchAppBar from "./components/SearchAppBar";
import SimpleCard from "./components/SimpleCard";
import product from "./components/Product";
import { CardActionArea, Typography } from '@material-ui/core';

class App extends Component {
  
  state={
    hackJobs: [],
    showHackJobs: false,
    games: [],
    images: [],
  };

//   componentDidMount() {

//     this.tester();

//  }

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
    const checkRoutes = (props) => {
      return(
        <Router>
          <>
          <SimpleCard>
            <Switch>
              <Route path ="/productinfo" exact component={product}/>
            </Switch>
          </SimpleCard>
          </>
        </Router>
      )
    }
    return (

      // <React.Fragment>
        
      //   <SearchAppBar></SearchAppBar>
      // {/* //   <br></br> */}
      //    <SimpleCard></SimpleCard>
      
      // </React.Fragment>
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={SimpleCard} />
            {/* <Route path ="/productinfo" exact component={product}/> */}
            {/* <Route component={MyMenuAppBar} /> */}
          </Switch>
          
        </>
      </Router>
    )
   
  }
}

export default App;