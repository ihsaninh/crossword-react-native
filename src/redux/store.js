import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import appReducer from './reducers/index'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk, logger)
const store = createStore(appReducer, {}, middleware)
export {
  store
}