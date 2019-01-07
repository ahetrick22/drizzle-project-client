import React from "react";
import { cacheMethod } from '../utils';

class ReadPlant extends React.Component {

  state = { 
      dataKey: null 
    };

    componentDidMount() {
        const dataKey = cacheMethod("recyclingPlant", "call", this);
        this.setState({ dataKey });
    }

    render() {
        // get the contract state from drizzleState
        const { BagCount } = this.props.drizzleState.contracts;

        // using the saved `dataKey`, get the variable we're interested in
        const recyclingPlant = BagCount.recyclingPlant[this.state.dataKey];

        // if it exists, then we display its value
        return <p>Your recycling plant address is: {recyclingPlant && recyclingPlant.value}</p>;
    }
}

export default ReadPlant;