import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/explore">
          <Explore></Explore>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="*">
          <Explore></Explore>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
