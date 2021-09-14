import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to CORS server 😁')
})
app.get('/cors', (req, res) => {
  res.send('This has CORS enabled 🎈')
})
app.listen(8080, () => {
  console.log('listening on port 8080')
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
