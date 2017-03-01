import App from '../components/App'
import { connect } from 'react-redux'

const mapStateToProps = state => (state)

const mapDispatchToProps = dispatch => {
  return {}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
