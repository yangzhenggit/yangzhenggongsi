import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchHeader from '../../components/SearchHeader/index.jsx'
import SearchList from './subpage/List.jsx'

class Search extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {};
	}
	render() {
		const params = this.props.params
		return (
			//<div>keyword: {params.keyWord},category: {params.category}</div>
			<div>
				<SearchHeader keyWord={params.keyWord} />
				<SearchList keyWord={params.keyWord} category={params.category}/>
			</div>
		)
	}
	componentDidMount() {
		//alert(this.props.params.router)
	}
}

export default Search