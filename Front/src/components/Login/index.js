/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';
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
  loginInput, passwordInput, changeLogin, changePassword, connectUser,
}) => (
  <Form onSubmit={connectUser}>
    <Input
      type="email"
      id="email"
      name="email"
      placeholder="Email*"
      value={loginInput}
      onChangeFunction={changeLogin}
    />
    <Input
      type="password"
      id="password"
      name="password"
      placeholder="Mot de passe*"
      value={passwordInput}
      onChangeFunction={changePassword}
    />
    <p className="lost-password">
      <a className="lost-password" onClick={() => alert('pas de chance !')}>J'ai perdu mon mot de passe</a>
    </p>
    <button type="submit" className="inverted-colors form-button">Me connecter</button>
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
  changeLogin: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  connectUser: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default Login;
