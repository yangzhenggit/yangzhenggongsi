import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/homeData'
import ListComponent from '../../../components/List/List.jsx'
import LoadMore from '../../../components/LoadMore/LoadMore.jsx'

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
					? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
					: ''
				}
			</div>
		)
	}
	componentDidMount() {
		//获取首页数据
		this.loadFirstPageData()
	}
	//获取首页数据
	loadFirstPageData() {
		const cityName = this.props.cityName
		const result = getListData(cityName, 0)
		this.resultHandle(result)
	}
	//加载更多数据
	loadMoreData() {
		//记录状态
		this.setState({
			isLoadingMore: true
		})
		const cityName = this.props.cityName
		const page = this.state.page
		const result = getListData(cityName, page)
		this.resultHandle(result)

		//增加page请求
		this.setState({
			page: page + 1,
			isLoadingMore: false
		})
	}
	//处理数据
	resultHandle(result) {
		result.then(res => {
			return res.json()
		}).then(json => {
			const hasMore = json.hasMore
			const data = json.data
			this.setState({
				data: this.state.data.concat(data),
				hasMore: hasMore
			})
		}).catch(ex => {
			if (__dev__) {
				console.error('首页猜你喜欢获取数据抱错', ex.message)
			}
		})
	}
}

export default List