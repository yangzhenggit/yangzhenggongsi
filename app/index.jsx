import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
//import configureStore form './store/configureStore'

//创建redux的store对象
//const store = configureStore()

import RouteMap from './router/routeMap.jsx'

render(
	//<Provider>
		<RouteMap history={hashHistory} />,
	//</Provider>,
	document.getElementById('root')
)
