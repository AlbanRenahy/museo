// == Import npm
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// == Import
import Welcome from 'src/containers/Welcome';
import Signin from 'src/containers/Signin';
import Login from 'src/containers/Login';
import LeafletMap from 'src/containers/Leaflet';
import Contact from 'src/containers/Contact';
import About from 'src/components/About';
import LoadingScreen from 'src/components/LoadingScreen';
import NotFound from 'src/components/NotFound';


// == Composant
const App = () => (
  // <div className="app">
  //   {loading && <div>Chargement en cours</div>}
  //   {!loading && (
  //     <>
  //       <Nav />
  //       <Page />
  //     </>
  //   )}
  // </div>
  <Switch>
    {/* Route loading à enlever par la suite */}
    <Route
      exact
      path="/loading"
      render={() => (
        <Welcome>
          <LoadingScreen />
        </Welcome>
      )}
    />
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
      path="/contact"
      render={() => (
        <Welcome>
          <Contact />
        </Welcome>
      )}
    />

    <Route
      path="/about"
      render={() => (
        <About />
      )}
    />

    <Route
      path="/map"
      render={() => (
        <LeafletMap />
      )}
    />

    <Route component={NotFound} />
  </Switch>
);

// == Export
export default App;
