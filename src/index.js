/* eslint-disable import/no-named-as-default */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,

	document.getElementById('root'),
);
