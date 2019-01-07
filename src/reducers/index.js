import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { drizzleReducers } from 'drizzle'


export default (history) => combineReducers({
  router: connectRouter(history),
  loggedInAccount: function(state=null, action) {
      switch(action.type) {
          case "LOGIN_ACCOUNT":
          return action.payload;
          default:
          return state;
      }
  },
  ...drizzleReducers
})