import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise'
import reducer from '../reducers/index'

const enhancer = applyMiddleware(promise)

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
