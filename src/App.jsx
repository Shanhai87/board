// src/App.jsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <Routes>
        <AppRoutes />
      </Routes>
    </Router>
  );
};

export default App;
