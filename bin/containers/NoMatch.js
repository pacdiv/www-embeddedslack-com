import { connect } from 'react-redux'
import {
  noMatchLoaded,
  noMatchLoading
} from '../actions/app'
import NoMatchComponent from '../components/NoMatch'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    loaded: () => {
      dispatch(noMatchLoaded())
    },
    loading: () => {
      dispatch(noMatchLoading())
    }
  }
}

const NoMatchContainer = connect(mapStateToProps, mapDispatchToProps)(NoMatchComponent)

export default NoMatchContainer
