import NoMatchContainer from '../containers/NoMatch'
import React, { Component } from 'react'

class NoMatch extends Component {
  render () {
    return (
      <div>
        <NoMatchContainer {...this.props} />
      </div>
    )
  }
}

export default NoMatch
