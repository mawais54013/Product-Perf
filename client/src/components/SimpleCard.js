import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import API from "../utils/API";
import  { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";
import '../App.css';
import SearchAppBar from "../components/SearchAppBar";
import moment from 'moment'

const styles = {
  card: {
    minWidth: 100,
    marginRight: 65,
    marginLeft: 50,
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
  selected: {
    color: 'white',
  },
};
 
class SimpleCard extends Component {
  
  state={
    hackJobs: [],
    showHackJobs: false,
    games: [],
    popular: [],
    pop1:[], pop2:[], pop3:[], pop4:[], pop5:[], pop6:[], pop7:[], pop8:[], pop9:[], pop10:[],
    images: [],
    new: [],
    date: moment().format('x'),
    toProducts: false,
  };


  componentDidMount() {
    this.popularGames();
 }

  tester = () => {
    API.getgameData()
    .then(res => {
      // console.log("testing games");
      console.log(res.data[0].cover);
      this.setState({ games: res.data[0],
       images: res.data[0].cover.url })
    });
  }

  popularGames = () => {
    API.getPopularGame()
      .then(res => {
        console.log(res.data);
        this.setState({ popular: res.data })
        this.setState({ pop1: this.state.popular[0] })
        this.setState({ pop2: this.state.popular[1] })
        this.setState({ pop3: this.state.popular[2] })
        this.setState({ pop4: this.state.popular[3] })
        this.setState({ pop5: this.state.popular[4] })
        this.setState({ pop6: this.state.popular[5] })
        this.setState({ pop7: this.state.popular[6] })
        this.setState({ pop8: this.state.popular[7] })
        this.setState({ pop9: this.state.popular[8] })
        this.setState({ pop10: this.state.popular[9] })
        console.log(this.state.pop1);
      });
  }

  newGames = () => {
    API.getUpcoming(this.state.date)
    .then(res => {
      console.log(res);
      this.setState({ new:res.data })
      console.log(this.state.new);
      console.log(this.state.new[0].game.name)
    });
  } 


  render() {
    const listItems = this.state.new.map((items) =>
      <li id="list1">{items.game.name}
        <ul>
          <li>Date Release: {items.human}</li>
        </ul>
      </li>
    );
  
    return (
    <div>
      <SearchAppBar></SearchAppBar>
      <Grid container spacing={24}>
      <Grid item xs={6}>
        <Card id="card1">
          <div id="head1">
          <br></br>
          <span>Popular Games</span>
          <hr></hr>
          <br/>
          
            {/* <Link to="/productinfo"> */}
            <List>
              <ListItemText primary={this.state.pop1.name}/>
            </List>
            {/* </Link> */}
            
            <Divider />
            <br></br>
            <List>
              <ListItemText primary={this.state.pop2.name}/>
            </List>
            <Divider />
            <br></br>
            <List>
              <ListItemText primary={this.state.pop3.name}/>
            </List>
            <Divider />
            <br></br>
            <List>
              <ListItemText primary={this.state.pop4.name}/>
            </List>
            <Divider />
            <br></br>
            <List>
              <ListItemText primary={this.state.pop5.name}/>
            </List>
            <Divider />
            <br></br>
            <List>
              <ListItemText primary={this.state.pop6.name}/>
            </List>
            <Divider />
            <br></br>
            <List>
              <ListItemText primary={this.state.pop7.name}/>
            </List>
            <Divider />
            <br></br>
            <List>
              <ListItemText primary={this.state.pop8.name}/>
            </List>
            <Divider />
            <br></br>
            <List>
              <ListItemText primary={this.state.pop9.name}/>
            </List>
            <Divider />
            <br></br>
            <List>
              <ListItemText primary={this.state.pop10.name}/>
            </List>
            <Divider />
          </div>
        </Card>
        <br></br>
        <br></br>
        <div>
          <br></br>
        </div>
      </Grid>
      <Grid item sm={6}>
        <Card id="card2">
          <Button onClick={() => this.newGames()} id="button1">Click To Get Upcoming Games</Button>
          <div class = "container" id="area1">
            {listItems}
          </div>
          {/* {listItems} */}
        </Card>
      </Grid>
      <br></br>
      </Grid>
      </div>
    );
}

}

export default withStyles(styles)(SimpleCard);