// == Import npm
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// == Import
import Signin from '../Signin';
import Login from '../Login';
import LeafletMap from '../LeafletMap';

// == Composant
const App = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <Redirect to="/login" />
      )}
    />

    <Route
      path="/login"
      render={() => (
        <Login />
      )}
    />

    <Route
      path="/signin"
      render={() => (
        <Signin />
      )}
    />

    <Route
      path="/map"
      render={() => (
        <LeafletMap />
      )}
    />
  </Switch>
);

// == Export
export default App;
