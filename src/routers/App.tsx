import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../views/home';
const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
    </Router>
  );
}

export default App;
