import { Link } from 'react-router'
import React, { Component } from 'react'

class HomepageComponent extends Component {
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
          <h1>embedded-slack</h1>
          <h2>the simpliest way to add a slack build-in chat on your website</h2>
          <p>
            <Link to="/docs">Documentation</Link> •&nbsp;
            <a href="http://www.github.com/pacdiv/embedded-slack" target="_blank">Github </a>
            (React package <a href="http://www.github.com/pacdiv/embedded-slack-react" target="_blank">
              here
            </a>)
          </p>
        </div>
      </section>
    )
  }
}

HomepageComponent.propTypes = {
  loaded: React.PropTypes.func,
  loading: React.PropTypes.func
}

export default HomepageComponent
