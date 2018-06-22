import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import BuyAndStore from '../../../components/BuyAndStore/index.jsx'

import * as storeActionsFromFile from '../../../actions/store.js'

class Buy extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {
	  	isStore: false
	  };
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
		const store = this.props.store

		store.forEach(item => {
			if (item.id === id) {
				this.setState({
					isStore: true
				})
				return false
			}
		})
	}
	buyHandle() {
		//判断是否登录
		const loginFlag = this.loginCheck()
		if (!loginFlag) {
			return
		}	
  		// 跳转到用户主页
        hashHistory.push('/User')			
	}
	//检查登录状态
	loginCheck() {
		const id = this.props.id
		const userinfo = this.props.userinfo
		if (!userinfo.username) {
			//跳转到指定路由
			hashHistory.push('/login/' + encodeURIComponent('/detail/' + id))
			return false
		}
		return true
	}
	//收藏事件
	storeHandle() {
		//判断是否登录
		const loginFlag = this.loginCheck()
		if (!loginFlag) {
			return
		}

		//判断是否之前收藏
		const id = this.props.id
		 const storeActions = this.props.storeActions
		if (this.state.isStore) {
			storeActions.rm({'id': id})
		} else {
			storeActions.add({'id': id})
		}

		//更改状态
		this.setState({
			isStore: !this.state.isStore
		})
		console.log(this.state.isStore)
	}
}
/*redux*/
function mapStateToProps(state) {
	return {
		store: state.store,
		userinfo: state.userinfo
	}
}
function mapDispatchToProps(dispatch) {
	return {
		storeActions: bindActionCreators(storeActionsFromFile, dispatch)
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Buy)