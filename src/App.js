import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import SingleItem from './pages/SingleItem/SingleItem';
import AuthProvider from './context/AuthProvider';
import LoggedInPrivetRoute from './components/PrivetRoutes/LoggedInPrivetRoute';
import LoggedOutPrivetRoute from './components/PrivetRoutes/LoggedOutPrivetRoute';

function App() {
  return (
    <AuthProvider>

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
          <LoggedOutPrivetRoute path="/dashboard">
            <Dashboard></Dashboard>
          </LoggedOutPrivetRoute>
          <LoggedOutPrivetRoute path="/drone/:droneId">
            <SingleItem></SingleItem>
          </LoggedOutPrivetRoute>
          <LoggedInPrivetRoute path="/login">
            <Login></Login>
          </LoggedInPrivetRoute>
          <LoggedInPrivetRoute path="/signup">
            <Signup></Signup>
          </LoggedInPrivetRoute>
          <Route path="*">
            <Explore></Explore>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
