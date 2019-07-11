
import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

import RootNavigation from '../../screens/Route'
import reducers from './reducers'

const router = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  router,
  reducers
})

export default appReducer