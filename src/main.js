import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routeMap from './routers'
import './styles/less/app.less'

render(
  <Router routes={routeMap} history={browserHistory} />, document.getElementById('app')
)

