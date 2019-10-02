import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Componente principal
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('pepe'));
serviceWorker.unregister();
