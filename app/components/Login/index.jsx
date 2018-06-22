import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'


import './style.less'

class LoginCon extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {
	  	username: ''
	  };
	}
	render() {
		return (
			<div id='login-container'>
				<div className='input-container phone-container'>
					<i className='icon-tablet'></i>
					<input type='text'
						placeholder='请输入手机号'
						value={this.state.username}
						onChange={this.changeHandle.bind(this)}
					 />
				</div>
				<div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>	
                <button className='btn-login' onClick={this.clickHandle.bind(this)}>登录</button>			
			</div>
		)
	}
	componnetDidMount() {

	}
	changeHandle(e) {
		this.setState({
			username: e.target.value
		})
	}
	clickHandle() {
		const username = this.state.username
		this.props.loginHandle(username)
	}
}

/*redux*/
export function mapStateToProps(state){
	return {
		userinfo: state.userinfo
	}
}
export function mapDispathToProps(dispatch) {
	return {

	}
}
export default connect(
	mapStateToProps,
	mapDispathToProps
)(LoginCon)