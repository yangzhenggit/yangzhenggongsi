import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import localStore from '../util/localStore.js'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfroActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			initDone: false
		}
	}
	render() {
		return (
			<div>
				{
					this.state.initDone
					? this.props.children
					: <div>正在加载...</div>
				}
			</div>
		)
	}
	componentDidMount() {
		//获取位置信息
		let cityName = localStore.getItem(CITYNAME)
		if (cityName == null) {
			cityName = '北京'
		}
		this.props.userInfoActions.update({
			cityName: cityName
		})
		setTimeout(() => {
			this.setState({
				initDone: true
			})
		}, 1000)
		//change State
		
	}
}

//redux
function mapStateToProps(state) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		userInfoActions: bindActionCreators(userInfroActionsFromOtherFile, dispatch)
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)