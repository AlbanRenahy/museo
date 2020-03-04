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
  loginInput, passwordInput, updateFormField, connectUser, isConnected,
}) => (
   <Form onSubmit={connectUser}>
     {isConnected && <Redirect to="/map" />}
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email*"
        value={loginInput}
        onChangeFunction={(input) => updateFormField('loginInput', input)}
      />
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Mot de passe*"
        value={passwordInput}
        onChangeFunction={(input) => updateFormField('passwordInput', input)}
      />
      <p className="lost-password">
        <a className="lost-password" onClick={() => alert('pas de chance !')}>J'ai perdu mon mot de passe</a>
      </p>
      <button type="submit" className="inverted-colors form-button">ME CONNECTER</button>
      <Link to="/signin">Je souhaite m'inscrire</Link>
      <Link to="/map">Entrer sur la carte en visiteur</Link>
    </Form>
  );

Login.propTypes = {
  loginInput: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  passwordInput: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  updateFormField: PropTypes.func.isRequired,
  connectUser: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};


/**
 * Export
 */
export default Login;
