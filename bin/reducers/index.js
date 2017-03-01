import { combineReducers } from 'redux'
import AppReducer from './app'
import HomepageReducer from './homepage'

const rootReducer = combineReducers({
  app: AppReducer,
  homepage: HomepageReducer
})

export default rootReducer
