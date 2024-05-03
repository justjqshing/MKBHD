import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import Main from './All-products/Main.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Compdents/ScrollToTop.js'

import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/MKBHD/" element={<App />} />
        <Route path="/MKBHD/All-Products/" element={<Main />} />
      </Routes>
    </Router>
  </React.StrictMode>
);