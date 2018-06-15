import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'
import App from '../containers/App.jsx'
import Home from '../containers/Home/index.jsx'
class routeMap extends React.Component {
	render() {
		return(
			<Router history={this.props.history}>
				<Route path='/' component={App}>
					<IndexRoute component={Home}/>
				</Route>
			</Router>			
		)
	}
}

export default routeMap