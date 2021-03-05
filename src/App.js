import React, { useEffect } from 'react';
import './App.css';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { selectUser, login, logout } from './features/userSlice';

import {auth} from './firebase';

import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Basket from './components/Basket';
import Transactions from './components/Transactions';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
          dispatch(login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          }))
      } else {
          dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      {user ? (
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
            <Route exact path="/basket">
              <Navbar />
              <Basket />
            </Route>
            <Route exact path="/transactions">
              <Navbar />
              <Transactions />
            </Route>
          </Switch>
        </Router>
      ):(
        <Login />
      )}
    </div>
  );
}

export default App;
