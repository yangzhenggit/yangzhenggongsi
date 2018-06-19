import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {};
	}
	render() {
		return (
			<div className='load-more' ref='wrapper'>
				{
					this.props.isLoadingMore
					? <span>加载中...</span>
					: <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
				}
			</div>
		)
	}
	loadMoreHandle() {
		this.props.loadMoreFn()
	}
	componentDidMount() {
		//滚动加载更多
		let _this = this
		const wrapper = this.refs.wrapper
		let timeoutId
		function callback() {
			const top = wrapper.getBoundingClientRect().top
			const windowHeight = window.screen.height
			if (top && top < windowHeight) {
				_this.props.loadMoreFn()
			}
		}
		window.addEventListener('scroll', function() {
			if (this.props.isLoadingMore) {
				return
			}
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			setTimeout(callback, 1000)			
			}.bind(this), false)
	}
}

export default LoadMore