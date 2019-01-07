import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { generateContractsInitialState } from 'drizzle';
import { createBrowserHistory } from 'history'
import { DrizzleProvider } from 'drizzle-react';
import {LoadingContainer} from 'drizzle-react-components';
import "./css/index.css";
import App from "./components/App";
import createRootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import BagCount from "./contracts/BagCount.json";

//create the browser history to use with connected react router
const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let drizzle know what contracts we want and events to listen to
const options = { web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [BagCount], 
  events: {
    BagCount: [ 
        'LogCenterDelivery', 'LogDeliveryInfo', 'LogDiscrepancies'
    ]
    } 
};

//create the state that represents the contract
const initialState = {
    contracts: generateContractsInitialState(options)
};

// setup the drizzle store and drizzle
//const drizzleStore = generateStore(options);

const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
    )
    )
)

// pass in the drizzle instance
ReactDOM.render((
    <DrizzleProvider options = {options}>
        <Provider store={store}>
        <LoadingContainer>
            <ConnectedRouter history={history}>
                <App />            
            </ConnectedRouter>
            </LoadingContainer>
        </Provider>
    </DrizzleProvider>

), document.getElementById("root"));