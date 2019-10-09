import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Counter extends Component {
	// Version < 16 de React
	// constructor (props) {
	// 	super (props);
	// 	this.state = {
	// 		count: this.props.initialValue
	// 	}
	// }

	state = {
		count: this.props.initialValue
	}

	incrementar = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	
	decrementar = () => {
		const { count }= this.state;
		if (count > 0) {
			this.setState({
				count: count - 1
			})
		}
	}

	render () {
		const { count } = this.state;
		return (
			<React.Fragment>
				<h1>{count}</h1>
				<button 
					onClick={this.incrementar}
				>Incrementar</button>
				<button 
					onClick={this.decrementar}
				>Decrementar</button>
			</React.Fragment>
		)
	}
}

Counter.propTypes = {
	initialValue: PropTypes.number.isRequired
}

Counter.defaultProps = {
	initialValue: 1
}

export default Counter;