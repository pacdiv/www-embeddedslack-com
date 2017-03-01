import {
  HOMEPAGE_SWITCHING_CODE,
  HOMEPAGE_SWITCHED_CODE_TO_DOM,
  HOMEPAGE_SWITCHED_CODE_TO_REACT
} from '../actions/homepage'

const INITIAL_STATE = {
  displayedCode: 'DOM'
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case HOMEPAGE_SWITCHING_CODE:
      return { displayedCode: action.value }
    case HOMEPAGE_SWITCHED_CODE_TO_DOM:
    case HOMEPAGE_SWITCHED_CODE_TO_REACT:
      return { ...state }
    default:
      return state
  }
}
