import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

import Header from '../../components/Header/index.jsx'
import Info from './subpage/Info.jsx'
import Buy from './subpage/buy.jsx'
import Comment from './subpage/Comment.jsx'

class Detail extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {};
	}
	render() {

		const id = this.props.params.id

		return (
			<div>
				<Header title='商户详情' />
				<Info id={id} />
				<Buy id={id} />
				<Comment id={id} />
			</div>
		)
	}
}

export default Detail