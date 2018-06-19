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
		const loadMoreFn = this.props.loadMoreFn()
		const wrapper = this.refs.wrapper
		let timeoutId
		function callbalk() {

		}
		window.addEventListener('scroll', function() {
			const top = wrapper.getBoundingClientRect().top
		}.bind(this), false)
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		setTimeout(callback, 1000)
	}
}

export default LoadMore