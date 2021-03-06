import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'
import App from '../containers/App.jsx'
import Home from '../containers/Home/index.jsx'
import City from '../containers/City/index.jsx'
import Search from '../containers/Search/index.jsx'
import Detail from '../containers/Detail/index.jsx'
import User from '../containers/User/index.jsx'
import Login from '../containers/Login/index.jsx'

class routeMap extends React.Component {
	render() {
		return(
			<Router history={this.props.history}>
				<Route path='/' component={App}>
					<IndexRoute component={Home}/>
					<Route path='/city' component={City} />
					<Route path='/search/:category(/:keyWord)' component={Search}/>
					<Route path='/detail/:id' component={Detail} />
					<Route path='/user' component={User} />
					<Route path='/login(/:returnUrl)' component={Login} />
				</Route>
			</Router>			
		)
	}
}

export default routeMap