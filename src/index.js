import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import './assets/styles/style.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Home from "./components/pages/home/Home"

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
