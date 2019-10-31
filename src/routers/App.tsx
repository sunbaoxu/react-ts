import React from 'react';
import './App.css';
import loadable from 'loadable-components'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

const Home = loadable (()=>import('../views/home'));
const A1 = loadable (()=>import('../views/A1'));
const A2 = loadable (()=>import('../views/A2'));
const A3 = loadable (()=>import('../views/A3'));
const A4 = loadable (()=>import('../views/A4'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/A1">about1</Link>
          </li>
          <li>
            <Link to="/A2">about2</Link>
          </li>
          <li>
            <Link to="/A3">about3</Link>
          </li>
          <li>
            <Link to="/A4">about4</Link>
          </li>
        </ul>
      </div>
      <Route exact path="/" component={Home}></Route>
      <Route path="/A1" component={A1}></Route>
      <Route path="/A2" component={A2}></Route>
      <Route path="/A3" component={A3}></Route>
      <Route path="/A4" component={A4}></Route>
    </Router>
  );
}

export default App;
