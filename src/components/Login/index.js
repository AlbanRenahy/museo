/**
 * Import
 */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// images
// import MuseoLogoBW from '../../styles/images/museo_logo.png';


// Composants
import Form from '../Form';
import Input from '../Input';

// Styles et assets
import './login.scss';

/*
 * Code
 */

const Login = ({
  username,
  password,
  updateUserformField,
  connectUser,
  isConnected,
  loginMessage,
  loginStatus,
  clearMessages,
}) => (
  <>
    <Form onSubmit={connectUser} className="login-form">
      {isConnected && <Redirect to="/map" />}
      <p className={`identification-message ${loginStatus}`}>{loginMessage}</p>
      <p className="clear-messages">{setTimeout(() => clearMessages(), 3000)}</p>
      <Input
        className="email-input"
        type="text"
        id="email"
        name="Nom d'utilisateur"
        placeholder="Nom d'utilisateur*"
        value={username}
        onChangeFunction={(input) => updateUserformField('username', input)}
      />
      <Input
        className="password-input"
        type="password"
        id="password"
        name="mot de passe"
        placeholder="Mot de passe*"
        value={password}
        onChangeFunction={(input) => updateUserformField('password', input)}
      />
      <Link className="recovery-link" to="/recovery">J'ai perdu mon mot de passe</Link>
      <button type="submit" className="form-button">ME CONNECTER</button>
      <Link className="signin-link" to="/signin">Je souhaite m'inscrire</Link>
      <Link className="map-link" to="/map">Entrer sur la carte en visiteur</Link>
    </Form>
  </>
);

Login.propTypes = {
  username: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  password: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  updateUserformField: PropTypes.func.isRequired,
  connectUser: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
  loginMessage: PropTypes.string.isRequired,
  loginStatus: PropTypes.string.isRequired,
  clearMessages: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default Login;
