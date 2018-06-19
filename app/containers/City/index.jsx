import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header/index.jsx'
import CurrentCity from '../../components/CurrentCity/index.jsx'
import CityList from '../../components/CityList/index.jsx'

import { CITYNAME } from '../../config/localStoreKey.js'
import localStore from '../../util/localStore.js' 

import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'

class City extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {};
	}
	render() {
		return (
			<div>
				<Header title='选择城市' />
				<CurrentCity cityName={this.props.userinfo.cityName} />
				<CityList changeFn={this.changeCity.bind(this)} />
			</div>
		)
	}
	changeCity(newCity) {
		if (newCity == null) {
			return
		}
		//修改redux
		const userinfo = this.props.userinfo
		userinfo.cityName = newCity
		this.props.userinfoActions.update(userinfo)
		//修改cookie
		localStore.setItem(CITYNAME, newCity)
		hashHistory.push('/')
	}
}

/*redux*/
function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}
function mapDispatchToProps(dispatch) {
	return {
		userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(City)