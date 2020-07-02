import React, { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	const increase = () => {
		setCount(count + 1);
	};

	return (
		<div className='container'>
			<h2 className='title'>Function component</h2>
			<p className='count'>{count}</p>
			<button className='btn-counter-increase' onClick={increase}>
				Increase
			</button>
		</div>
	);
};

export default Counter;
