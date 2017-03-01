import { connect } from 'react-redux'
import {
  documentationLoading,
  documentationLoaded
} from '../actions/app'
import DocumentationComponent from '../components/Documentation'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    loading: () => {
      dispatch(documentationLoading())
    },
    loaded: () => {
      dispatch(documentationLoaded())
    }
  }
}

const DocumentationContainer = connect(mapStateToProps, mapDispatchToProps)(DocumentationComponent)

export default DocumentationContainer
