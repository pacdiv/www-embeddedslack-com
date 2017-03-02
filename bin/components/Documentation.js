import { Link } from 'react-router'
import React, { Component } from 'react'

class DocumentationComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sectionMargin: 0
    }
    this.updateSectionMargin = this.updateSectionMargin.bind(this)
  }

  componentWillMount () {
    this.props.loading()
  }

  componentDidMount () {
    this.updateSectionMargin()
    this.props.loaded()
  }

  updateSectionMargin () {
    const { offsetHeight: sectionHeight } = this.refs.section
    const { offsetHeight: childHeight } = this.refs.sectionChild

    this.setState({
      sectionMargin: Math.floor((sectionHeight - childHeight) / 2)
    })
  }

  render () {
    const style = { marginTop: `${this.state.sectionMargin}px` }

    return (
      <section id="main-section" ref="section">
        <div ref="sectionChild" style={style}>
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
