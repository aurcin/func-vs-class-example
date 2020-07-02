import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
	};

	increase = () => {
		this.setState(({ count }) => ({ count: count + 1 }));
	};

	render() {
		const { count } = this.state;
		return (
			<div className='container'>
				<h2 className='title'>Class component</h2>
				<p className='count'>{count}</p>
				<button className='btn-counter-increase' onClick={this.increase}>
					Increase
				</button>
			</div>
		);
	}
}

export default Counter;
