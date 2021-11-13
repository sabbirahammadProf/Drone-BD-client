import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Header from './pages/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/explore">
        <Explore></Explore>
      </Route>
    </Router>
  );
}

export default App;
