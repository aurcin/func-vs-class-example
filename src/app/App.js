import React from 'react';

import CounterClass from './counter/class';
import CounterHook from './counter/hook';

import './counter/counter.css';

const App = () => {
	return (
		<div className='examples'>
			<CounterClass />
			<CounterHook />
		</div>
	);
};

export default App;
