import React, { Component } from "react";
import Card from '@material-ui/core/Card';

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