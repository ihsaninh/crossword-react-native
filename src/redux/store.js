import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import appReducer from './reducers/index'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(thunk, logger, promise)
const store = createStore(appReducer, {}, middleware)
export {
  store
}