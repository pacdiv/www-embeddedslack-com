import HomepageContainer from '../containers/Homepage'
import React, { Component } from 'react'

class Homepage extends Component {
  render () {
    return (
      <div>
        <HomepageContainer {...this.props} />
      </div>
    )
  }
}

export default Homepage
