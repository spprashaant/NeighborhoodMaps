import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.gm_authFailure = function() { 
		alert('Sorry, there was an authentication failure.\n Please check the credentials and try again.');
	};
ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();