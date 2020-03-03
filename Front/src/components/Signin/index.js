/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Composants
import Form from '../Form';
import Input from '../Input';

// Styles et assets
import './signin.scss';

/**
 * Code
 */
const Signin = ({
  usernameInput,
  loginInput,
  passwordInput,
  passConfirmInput,
  updateFormField,
}) => (
  <Form>
    <Input
      type="text"
      id="username"
      name="username"
      placeholder="Pseudonyme*"
      value={usernameInput}
      onChangeFunction={(input) => updateFormField('usernameInput', input)}
    />

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

    <Input
      type="password"
      id="password-confirm"
      name="password-confirm"
      placeholder="Confirmer votre mot de passe*"
      value={passConfirmInput}
      onChangeFunction={(input) => updateFormField('passConfirmInput', input)}
    />

    <button type="submit" className="form-button">M'inscrire</button>

    <p className="map-link"><Link to="/login">J'ai déjà mes identifiants</Link></p>
  </Form>

);

Signin.propTypes = {
  // FORM FIELDS
  usernameInput: PropTypes.string.isRequired,
  loginInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  passConfirmInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Signin;
