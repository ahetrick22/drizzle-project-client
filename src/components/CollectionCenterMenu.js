import React, { Component } from 'react';
import { drizzleConnect } from 'drizzle-react';
import { getState, sendEvent } from '../state';

class CollectionCenterMenu extends Component {
 
    render () {
        console.log(this.props.BagCount);
        return(
            <>
            <div>CollectionCenterMenu route</div>
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


export default drizzleConnect(CollectionCenterMenu,mapStateToProps);

