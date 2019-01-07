import React, { Component, Fragment } from 'react';
import { drizzleConnect } from 'drizzle-react'
import { AccountData, ContractData } from 'drizzle-react-components';
import { Link } from 'react-router-dom';




class Home extends Component {

    checkLogin = () => {
        console.log(this.props.BagCount)
        console.log(this.props.BagCount.recyclingPlant['0x0'].value);
    }

      render() {
          return(
              <Fragment>
                <p>The recycling plant for this application is at address: <ContractData contract="BagCount" method="recyclingPlant" /></p>
                Currently logged in as account: <AccountData accountIndex="0" units="ether" precision="3" />
                <Link to="/create">Register this account</Link>
                <button onClick={this.checkLogin}>Check the Login</button>
                <p>{this.props.accounts[0]}</p>
              </Fragment>
          )  
    }
}

const mapStateToProps = state => {
    return {
      accounts: state.accounts,
      drizzleStatus: state.drizzleStatus,
      BagCount: state.contracts.BagCount
    }
  }

export default drizzleConnect(Home, mapStateToProps);


// const { BagCount } = this.props.drizzle.contracts;
  
// // using the saved `dataKey`, get the variable we're interested in
// const recyclingPlant = BagCount.recyclingPlant[this.state.dataKey];

// // if it exists, then we display its value
// return <p>Your recycling plant address is: {recyclingPlant && recyclingPlant.value}</p>;