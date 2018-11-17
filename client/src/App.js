import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import API from "./utils/API";
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SearchAppBar from "./components/SearchAppBar";
import SimpleCard from "./components/SimpleCard";
import PinnedSubheaderList from "./components/PinnedSubheaderList";
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
    return (
      // this.state.images.map(elem => {
      //   return <Card >
      //     <CardActionArea>
      //       <CardContent>
      //         <Typography>
                
      //           <img src={"https:"+elem}></img>
      //         </Typography>
      //       </CardContent>
      //     </CardActionArea>
      //   </Card>
      // })

      <React.Fragment>
        <SearchAppBar></SearchAppBar>
      {/* //   <br></br> */}
         <SimpleCard></SimpleCard>
  
      {/* //   <Button  */}
      {/* //   onClick={() => this.tester()}>Get Games</Button> */}
      {/* //   <div> */}
        
      {/* //   <h3>{this.state.games.name}</h3> */}
          {/* <img style={{width: '100px', height: '100px'}} src= {"https:"+this.state.images}></img> */}
      {/* // </div> */}
      </React.Fragment>
    );
}

}

export default App;