import { Link } from 'react-router'
import React, { Component } from 'react'

class DocumentationComponent extends Component {
  componentWillMount () {
    this.props.loading()
  }

  componentDidMount () {
    this.props.loaded()
  }

  render () {
    return (
      <section id="main-section">
        <div>
          <h2>Coming soon</h2>
          <h3>
            Sorry, the documentation is being written.<br/>
            It will be available later this month ;)</h3>
          <p>
            Please click <Link to="/">here</Link> to back home.
          </p>
        </div>
      </section>
    )
  }
}

DocumentationComponent.propTypes = {
  loaded: React.PropTypes.func,
  loading: React.PropTypes.func
}

/*
  EMBEDDED-SLACK
  EmbeddedSlack requires an object as parameter containing :
  - channel   (string)  The Slack channel ID to link to the chat
  - token     (string)  The Slack token used for authentication
  - 
*/

export default DocumentationComponent
