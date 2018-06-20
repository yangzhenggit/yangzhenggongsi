import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import SearchInput from '../SearchInput/index.jsx'

import './style.less'

class SearchHeader extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {};
	}
	render() {
		return (
			<div id='search-header' className='clear-fix'>
			 	<span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>	
				<div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                   <SearchInput value={this.props.keyWord || ''} enterHandle={this.searchHandle.bind(this)} />
                </div>                			
			</div>
		)
	}
	searchHandle(val) {
		hashHistory.push('/search/all/' + encodeURIComponent(val))
	}
	clickHandle() {
		 window.history.back()
	}
}

export default SearchHeader