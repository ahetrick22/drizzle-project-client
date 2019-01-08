import React, { Component } from 'react';
import { drizzleConnect } from 'drizzle-react';
import { getState, sendEvent } from '../state';

class PlantMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            centers:getState('centers')
        }
    }

    componentDidMount = () => {
        this.fetchCenters();
    }

    //get the centers from the server & update the app state, then the component state
    fetchCenters = async () => {
        const centers = await fetch('/centers').then(res => res.json());
        await sendEvent('setCenters', centers);
        await this.setState({centers:getState('centers')});

      };

    render () {
        const { centers } = this.state;
        console.log('centers in render', centers);
        return (
        <>
           <p>Your centers are:</p>
           {centers && centers.map(center => (
            <p key={center.idcenter}>{center.name}</p>
            ))}
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


export default drizzleConnect(PlantMenu,mapStateToProps);

