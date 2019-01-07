import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom'
//import ReadPlant from "./ReadPlant";
//import CreateCenter from "./CreateCenter";
import CollectionCenterMenu from './CollectionCenterMenu';
import CreateAccount from './CreateAccount';
import Home from './Home';
import NewDelivery from './NewDelivery';
import PlantMenu from './PlantMenu';
import VerifyDelivery from './VerifyDelivery';

import '../css/App.css';

class App extends Component {
  state = { 
    loading: true, 
    drizzleState: null 
  };

  // componentDidMount() {
  //   const { drizzle } = this.props;
  
  //   // subscribe to changes in the store
  //   this.unsubscribe = drizzle.store.subscribe(() => {
  
  //     // every time the store updates, grab the state from drizzle
  //     const drizzleState = drizzle.store.getState();
  
  //     // check to see if it's ready, if so, update local component state
  //     if (drizzleState.drizzleStatus.initialized) {
  //       this.setState({ loading: false, drizzleState });
  //     }
  //   });
  // }

  // compomentWillUnmount() {
  //   this.unsubscribe();
  // }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateAccount} />
          <Route path="/plantmenu" component={PlantMenu} />
          <Route path="/collectioncentermenu" component={CollectionCenterMenu} />
          <Route path="/newdelivery" component={NewDelivery} />
          <Route path="/verifydelivery" component={VerifyDelivery} />
        </Switch>


        {/* // <ReadPlant
        //   drizzle={this.props.drizzle}
        //   drizzleState={this.state.drizzleState}
        // />
        //     <CreateCenter
        //   drizzle={this.props.drizzle}
        //   drizzleState={this.state.drizzleState}
        // /> */}
      </Fragment>
    );
  }
}

export default App;

// if (this.state.loading) return "Loading Drizzle...";