import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header/index.jsx'
import LoginComponent from '../../components/Login/index.jsx'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'

class Login extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {
	  	checking: true
	  };
	}
	render() {
		return (
			<div>
				<Header title='登录' />
				{
					this.state.checking ? <div>{}</div> : <LoginComponent loginHandle={this.loginParent.bind(this)} />
				}
			</div>
		)
	}
	componentDidMount() {
		this.doCheck()
	}
	doCheck() {
		const userinfo = this.props.userinfo
		if (userinfo.username) {
			this.getUserPage()
		}  else {
			this.setState({
				checking: false
			})
		}
	}
	getUserPage() {
		hashHistory.push('/User')
	}
	//处理登录之后的事情
	loginParent(username) {
		
		let userinfo = this.props.userinfo
		userinfo.username = username

		const actions = this.props.userInfoActions
		actions.update(userinfo)
		
		const params = this.props.params
        const returnUrl = params.returnUrl
		alert(returnUrl)
		if(returnUrl) {
			hashHistory.push(returnUrl)
		} else {
			//跳转到用户主页
			this.getUserPage()
		}
	}
}
// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)