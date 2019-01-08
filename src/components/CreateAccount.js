import React, { Component } from 'react';
import { drizzleConnect } from 'drizzle-react';
//import { getState, sendEvent } from '../state';

class CreateAccount extends Component {
    
    // constructor(props, context) {
    //     super(props);
    //     this.state = {
    //         stackId: this.props.BagCount.createCenter.cacheSend(this.props.accounts[0])
    //     }
    //   }

    render () {
        console.log(this.props.BagCount);
        return(
        <>
            CreateAccount route
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


export default drizzleConnect(CreateAccount,mapStateToProps);
