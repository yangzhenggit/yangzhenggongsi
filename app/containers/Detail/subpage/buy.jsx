import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import BuyAndStore from '../../../components/BuyAndStore/index.jsx'

class Buy extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {};
	}
	render() {
		return (
			<div>
				<BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
			</div>
		)
	}
	componentDidMount() {
		//验证当前是否收藏
		this.checkStoreState()
	}
	checkStoreState() {
		const id = this.props.id
		
	}
	buyHandle() {

	}
	storeHandle() {
		
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

	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Buy)