// Importing the React Library
import React from 'react';
// Getting the dom
import ReactDOM from 'react-dom';
// Styling
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
// Root element is the index.html file in public folder

ReactDOM.render(
<BrowserRouter><App/></BrowserRouter>,
document.getElementById('root')
);
registerServiceWorker();
