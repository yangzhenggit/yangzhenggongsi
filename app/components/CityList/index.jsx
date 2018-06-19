import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class CityList extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {};
	}
	render() {
		const data = ['北京', '上海', '广州','天津', '武汉', '城都','杭州', '重庆', '深圳']
		return (
			<div className='city-list-container'>
				<h3>热门城市</h3>
				<ul className='clear-fix'>
					{
						data.map((item, index) => {
							return <li key={index}><span onClick={this.clickHandle.bind(this, item)}>{item}</span></li>
						})
					}
				</ul>
			</div>
		)
	}
	clickHandle(val) {
		this.props.changeFn(val)
	}
}

export default CityList