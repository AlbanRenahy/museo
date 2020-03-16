// == Import npm
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Welcome from 'src/components/Welcome';
import Signin from 'src/containers/Signin';
import Login from 'src/containers/Login';
import LeafletMap from 'src/containers/Leaflet';
import Contact from 'src/containers/Contact';
import About from 'src/components/About';
import Profil from 'src/containers/Profil';
import LoadingScreen from 'src/components/LoadingScreen';
import NotFound from 'src/components/NotFound';
import FinalizeRegister from 'src/components/FinalizeRegister';
import Liste from 'src/containers/Liste';

// == Composant
const App = ({ loginStatus }) => {
  loginStatus === 'init';
  return (
    <Switch>
      {loginStatus === 'init' && (
      <Welcome>
        <LoadingScreen />
      </Welcome>
      )}
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
          <Welcome>
            <About />
          </Welcome>
        )}
      />

      <Route
        path="/map"
        render={() => (
          <LeafletMap />
        )}
      />

      <Route
        exact
        path="/list"
        render={() => (
          <Liste />
        )}
      />

      <Route
        path="/profil"
        render={() => (
          <Welcome>
            <Profil />
          </Welcome>
        )}
      />

      <Route
        path="/register"
        render={() => (
          <Welcome>
            <FinalizeRegister />
          </Welcome>
        )}
      />

      <Route
        // ROUTE LOADING A ENLEVER PAR LA SUITE
        exact
        path="/loading"
        render={() => (
          <Welcome>
            <LoadingScreen />
          </Welcome>
        )}
      />

      <Route component={NotFound} />
    </Switch>
  );
};

App.propTypes = {
  loginStatus: PropTypes.string.isRequired,
};

// == Export
export default App;
