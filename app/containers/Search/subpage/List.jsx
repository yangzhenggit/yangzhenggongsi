import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import ListComponent from '../../../components/List/List.jsx'
import LoadMore from '../../../components/LoadMore/LoadMore.jsx'

import { getSearchData } from '../../../fetch/search/search'

class SearchList extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {};
	}
	render() {
		return (
			<div>
				
			</div>
		)
	}
}

export default SearchList