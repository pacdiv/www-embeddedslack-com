import {
  DOCUMENTATION_LOADING,
  DOCUMENTATION_LOADED,
  HOMEPAGE_LOADED,
  HOMEPAGE_LOADING,
  NOMATCH_LOADED,
  NOMATCH_LOADING
} from '../actions/app'

const INITIAL_STATE = {
  globalState: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DOCUMENTATION_LOADING:
    case DOCUMENTATION_LOADED:
    case HOMEPAGE_LOADED:
    case HOMEPAGE_LOADING:
    case NOMATCH_LOADED:
    case NOMATCH_LOADING:
      return { globalState: action.type }
    default:
      return state
  }
}
