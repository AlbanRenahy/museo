// == Import npm
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// == Import
import Welcome from 'src/containers/Welcome';
import Signin from 'src/containers/Signin';
import Login from 'src/containers/Login';
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
        <Welcome>
          <Login />
        </Welcome>
      )}
    />

    <Route
      path="/signin"
      render={() => (
        <Welcome>
          <Signin />
        </Welcome>
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
