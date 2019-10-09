import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; // Componente principal
import App2 from './App2'; // Componente principal
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<App2 notasUno={['unoApp', 'dosApp']} />, 
	document.getElementById('pepe')
);
serviceWorker.unregister();
