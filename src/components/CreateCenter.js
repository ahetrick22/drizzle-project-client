import React from "react";
import { cacheMethod } from '../utils';

class CreateCenter extends React.Component {

  state = { 
      stackId: null
    };

    create = () => {
        const stackId = cacheMethod("createCenter", "send", this);
        // save the `stackId` for later reference
        this.setState({ stackId });
    };

    getTxStatus = () => {
        // get the transaction states from the drizzle state
        const { transactions, transactionStack } = this.props.drizzleState;
        // get the transaction hash using our saved `stackId`
        const txHash = transactionStack[this.state.stackId];
        // if transaction hash does not exist, don't display anything
        if (!txHash) return null;
        // otherwise, return the transaction status
        return `Center creation at ${this.props.drizzleState.accounts[0]}: ${transactions[txHash].status}`;
    };

    render() {
        return (
        <div>
            <div>You current account in Metamask is: {this.props.drizzleState.accounts[0]} </div>
            <button onClick={this.create}> Register a Center at the Listed Account </button>
            <button>Login to an Existing Center or Plant</button>
            <div>{this.getTxStatus()} </div>
        </div>
        );
    }
}

export default CreateCenter;