import React, { Component } from 'react';
import { drizzleConnect } from 'drizzle-react';
//import { getState, sendEvent } from '../state';

class VerifyDelivery extends Component {
    
    render () {
        return(
        <>
            VerifyDelivery route
        </>
        )
    }
}

const mapStateToProps = state => {
    return {
      accounts: state.accounts,
      drizzleStatus: state.drizzleStatus,
      BagCount: state.contracts.BagCount,
    }
  }


export default drizzleConnect(VerifyDelivery,mapStateToProps);
