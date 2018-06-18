import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/homeData'

import './style.less'

class List extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {
	  	data: [],
	  	isLoadingMore: false,
	  	page: 0,
	  	hasMore: false
	  };
	}
	render() {
		return (
			<div>
				<h2 className="home-list-title">猜你喜欢</h2>
				{
					this.state.data.length
					? <ListComponent data={this.state.data} />
					: <div>{}</div>
				}
				{
					this.state.hasMore
					? <LoadMore isLoadingMore={this.state.isLoadingMore} loanMoreFn={this.loadMoreData.bind(this)} />
					: ''
				}
			</div>
		)
	}
}

export default List