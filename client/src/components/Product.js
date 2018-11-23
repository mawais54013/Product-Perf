import React, { Component } from "react";
import API from "../utils/API";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

class productsInfo extends Component {

    render() {
        const {name} = this.props.location.state;
        console.log(name);
        return (
        <Card>
            <h1>tester</h1>
        </Card>
        )
    }
}
export default productsInfo;