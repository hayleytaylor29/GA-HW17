import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Stock from './pages/stock';
import About from './pages/about';
import Stocks from './pages/stocks'; 
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/stock">
          <Stock />
          </Route>
        <Route
        path="/stocks/:symbol"
        render={(routerProps) => <Stocks {...routerProps} /> } />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
