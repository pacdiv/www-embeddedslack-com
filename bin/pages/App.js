import AppContainer from '../containers/App'
import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <AppContainer>
        {this.props.children}
      </AppContainer>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object
}

export default App
