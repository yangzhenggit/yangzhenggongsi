import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class SearchInput extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	  this.state = {
	  	value: ''
	  };
	}
	render() {
		return (
			<input 
				style={{color:'#666'}}
				className='search-input'
				value={this.state.value} 
				onChange={this.changeHandle.bind(this)}
				onKeyUp={this.keyUpHandle.bind(this)}
			/>
		)
	}
	componentDidMount() {
		this.setState({
			value: this.props.value || ''
		})
	}
	changeHandle(e) {
		this.setState({
			value: e.target.value
		})
	}
	keyUpHandle(e) {
		if (e.keyCode !== 13) {
			return
		}
		this.props.enterHandle(e.target.value)
	}
}

export default SearchInput