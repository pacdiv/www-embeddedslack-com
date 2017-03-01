import { Link } from 'react-router'
import React, { Component, PureComponent } from 'react'

class MainSection extends PureComponent {
  render() {
    return (
      <section id="main-section">
        <div>
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

class HomepageComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
    this.handleFixedTabChange = this.handleFixedTabChange.bind(this)
  }

  componentWillMount () {
    this.props.loading()
  }

  componentDidMount () {
    this.props.loaded()
  }

  handleFixedTabChange (index) {
    this.setState({ fixedIndex: index })
  }

  render () {
    return (
      <div>
        <MainSection/>
      </div>
    )
  }
}

HomepageComponent.propTypes = {
  loaded: React.PropTypes.func,
  loading: React.PropTypes.func
}

export default HomepageComponent
