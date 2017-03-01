import React, { Component } from 'react'

class AppComponent extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

AppComponent.propTypes = {
  children: React.PropTypes.object
}

export default AppComponent
