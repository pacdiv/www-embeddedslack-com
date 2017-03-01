import DocumentationContainer from '../containers/Documentation'
import React, { Component } from 'react'

class Documentation extends Component {
  render () {
    return (
      <div>
        <DocumentationContainer {...this.props} />
      </div>
    )
  }
}

export default Documentation
