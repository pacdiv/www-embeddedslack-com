import { Link } from 'react-router'
import React, { Component } from 'react'

const messages = [
  'http://i.giphy.com/BxWTWalKTUAdq.gif',
  'http://i.giphy.com/h4Z6RfuQycdiM.gif',
  'http://i.giphy.com/l3q2SaisWTeZnV9wk.gif',
  'http://i.giphy.com/yIgR9t9b53uZG.gif',
  'http://i.giphy.com/nWGiKNNqPTJKM.gif',
  'http://i.giphy.com/j4HxgTM9uK3tu.gif',
  'http://i.giphy.com/t9ctG5MZhyyU8.gif'
]

class NoMatchComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: messages[Math.floor(Math.random() * messages.length)],
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
    const { offsetHeight } = this.refs.sectionChild
    this.setState({ sectionMargin: Math.floor(offsetHeight / 2) })
  }

  render () {
    const style = { marginTop: `${this.state.sectionMargin}px` }

    return (
      <section id="notfound-section">
        <div ref="sectionChild" style={style}>
          <h1>404, page not found</h1>
          <h2>Hey, how did you end up here exactly ?</h2>
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <img
                className="col-xs-12"
                onLoad={this.updateSectionMargin}
                src={this.state.image}
              />
            </div>
          </div>
          <p>
            Please click <Link to="/">here</Link> to back home.
          </p>
        </div>
      </section>
    )
  }
}

NoMatchComponent.propTypes = {
  noMatch: React.PropTypes.func
}

export default NoMatchComponent
