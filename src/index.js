import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/Routes'; // where we are going to specify our routes
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
if (localStorage.getItem('lang') === 'ar') {
  require('./dist/css/style-ar.scss');
} else {
  require('./dist/css/style-en.scss');
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
