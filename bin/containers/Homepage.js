import { connect } from 'react-redux'
import {
  homepageLoaded,
  homepageLoading
} from '../actions/app'
import {
  homepageSwitchCode,
  homepageSwitchedCodeToDOM,
  homepageSwitchedCodeToReact
} from '../actions/homepage'
import HomepageComponent from '../components/Homepage'

const mapStateToProps = state => {
  return {
    code: state.homepage.code || 'DOM'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loaded: () => {
      dispatch(homepageLoaded())
    },
    loading: () => {
      dispatch(homepageLoading())
    },
    switchingCode: code => {
      dispatch(homepageSwitchCode(code))
    },
    switchedToDOM: () => {
      dispatch(homepageSwitchedCodeToDOM())
    },
    switchedToReact: () => {
      dispatch(homepageSwitchedCodeToReact())
    }
  }
}

const HomepageContainer = connect(mapStateToProps, mapDispatchToProps)(HomepageComponent)

export default HomepageContainer
