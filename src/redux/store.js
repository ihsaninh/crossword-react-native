import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const initialState = {
  data: []
}

reducer = (state, action) => {

  return state
}

const middleware = applyMiddleware(logger)
const store = createStore(reducer, initialState, middleware)
export {
  store
}