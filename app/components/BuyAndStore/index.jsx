import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import './style.less'

class BuyAndStore extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {};
	}
	render() {
		return (
			<div className='buy-store-container clear-fix'>
				<div className="item-container float-left">
					{this.props.isStore}
					<button className={this.props.isStore ? 'selected' : ''} onClick={this.storeClickHandle.bind(this)}>{this.props.isStore ? '已收藏' : '收藏'}</button>
				</div>
 				<div className="item-container float-right">
                    <button onClick={this.buyClickHandle.bind(this)}>购买</button>
                </div>				
			</div>
		)
	}
	storeClickHandle() {
		this.props.storeHandle()
	}
	buyClickHandle() {
		this.props.buyHandle()
	}
}
/*redux*/
export function mapStateToProps(state) {
	return {
		userinfo: userinfo
	}
}
export function mapDispatchToProps(dispatch) {
	return {

	}
}
export default connect(

)(BuyAndStore)