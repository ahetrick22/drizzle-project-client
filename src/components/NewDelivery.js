import React, { Component } from 'react';
import { drizzleConnect } from 'drizzle-react';
import { getState, sendEvent } from '../state';

class NewDelivery extends Component {
    
    render () {
        return(
        <>
            NewDelivery route
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


export default drizzleConnect(NewDelivery,mapStateToProps);
