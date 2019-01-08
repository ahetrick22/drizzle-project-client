import React, { Component } from 'react';
import { drizzleConnect } from 'drizzle-react'
import { AccountData, ContractData } from 'drizzle-react-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


class Home extends Component {
    constructor(props, context) {
        super(props);
        this.contracts = context.drizzle.contracts;
    }

    //TEST - to get rid of later
    createCenter = () => {
       const newTx = this.contracts.BagCount.methods.createCenter().send();
       console.log(newTx);
    }


      render() {
          return(
              <>
                <p>The recycling plant for this application is at address: <ContractData contract="BagCount" method="recyclingPlant" /></p>
                Currently logged in as account: <AccountData accountIndex="0" units="ether" precision="3" />
                <Link to="/create">Register this account</Link>
                <button onClick={this.createCenter}>Create A Center at Current Address</button>
              </>
          )  
    }
}

const mapStateToProps = state => {
    return {
      accounts: state.accounts,
      drizzleStatus: state.drizzleStatus,
      contracts: state.contracts
    }
  }

  Home.contextTypes = {
    drizzle: PropTypes.object
  }

export default drizzleConnect(Home, mapStateToProps);


//PREVIOUS VERSION THAT MAY NEED TO INTEGRATE SOON

// const { BagCount } = this.props.drizzle.contracts;
  
// // using the saved `dataKey`, get the variable we're interested in
// const recyclingPlant = BagCount.recyclingPlant[this.state.dataKey];

// // if it exists, then we display its value
// return <p>Your recycling plant address is: {recyclingPlant && recyclingPlant.value}</p>;