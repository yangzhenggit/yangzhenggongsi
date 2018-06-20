import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'
import App from '../containers/App.jsx'
import Home from '../containers/Home/index.jsx'
import City from '../containers/City/index.jsx'
import Search from '../containers/Search/index.jsx'


class routeMap extends React.Component {
	render() {
		return(
			<Router history={this.props.history}>
				<Route path='/' component={App}>
					<IndexRoute component={Home}/>
					<Route path='/city' component={City} />
					<Route path='/search/:category(/:keyWord)' component={Search}/>
				</Route>
			</Router>			
		)
	}
}

export default routeMap