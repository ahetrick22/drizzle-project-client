import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { drizzleReducers } from 'drizzle'


export default (history) => combineReducers({
    ...drizzleReducers,
  router: connectRouter(history)
})