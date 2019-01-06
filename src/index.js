import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

let app = document.createElement('main');

app.setAttribute('id', 'app');
document.body.appendChild(app);

ReactDOM.render(<Router><App /></Router>, app);
