import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import CollectionCenterMenu from './CollectionCenterMenu';
import CreateAccount from './CreateAccount';
import Home from './Home';
import NewDelivery from './NewDelivery';
import PlantMenu from './PlantMenu';
import VerifyDelivery from './VerifyDelivery';
import '../css/App.css';

class App extends Component {

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateAccount} />
          <Route path="/plantmenu" component={PlantMenu} />
          <Route path="/collectioncentermenu" component={CollectionCenterMenu} />
          <Route path="/newdelivery" component={NewDelivery} />
          <Route path="/verifydelivery" component={VerifyDelivery} />
        </Switch>
      </>
    );
  }
}

export default App;