import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

let app = document.createElement('main');

app.setAttribute('id', 'app');
document.body.appendChild(app);

ReactDOM.render(<App />, app);
