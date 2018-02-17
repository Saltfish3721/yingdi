import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,IndexRoute,Link } from 'react-router'

import App from './modules/App'
import Seedname from './modules/Seedname'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
       <IndexRoute component={Seedname}/>
       <Route path="article/:seedname" component={Seedname}/>
    </Route>
  </Router>
), document.getElementById('app'))
