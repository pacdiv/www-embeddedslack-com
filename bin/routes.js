import { IndexRoute, Route, Redirect } from 'react-router'
import React from 'react'

import App from './pages/App'
import Documentation from './pages/Documentation'
import Homepage from './pages/Homepage'
import NoMatch from './pages/NoMatch'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage}/>
    <Route path="docs" component={Documentation}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
