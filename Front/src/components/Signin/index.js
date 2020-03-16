/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/**
 * Import
 */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
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
  username,
  email,
  password,
  passConfirm,
  updateUserformField,
  signin,
  signinErrors,
  signinIsValid,
}) => (
  <>
    {signinIsValid && <Redirect to="/register" />}
    <Form onSubmit={signin} className="signin-form">
      {
        signinErrors.map((error) => (
          <p className="current-error" key={error}>{error}</p>
        ))
      }
      <Input
        className="email-input"
        type="email"
        id="email"
        name="email"
        placeholder="Email*"
        value={email}
        onChangeFunction={(input) => updateUserformField('email', input)}
      />

      <Input
        className="username-input"
        type="text"
        id="username"
        name="pseudonyme"
        placeholder="Pseudonyme*"
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

      <Input
        className="passconfirm-input"
        type="password"
        id="password-confirm"
        name="confirmer votre mot de passe"
        placeholder="Confirmer votre mot de passe*"
        value={passConfirm}
        onChangeFunction={(input) => updateUserformField('passConfirm', input)}
      />

      <button type="submit" className="form-button">M'INSCRIRE</button>

      <p className="login-link"><Link to="/login">J'ai déjà mes identifiants</Link></p>
    </Form>
  </>
);

Signin.propTypes = {
  // FORM FIELDS
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passConfirm: PropTypes.string.isRequired,
  // FUNCTIONS
  updateUserformField: PropTypes.func.isRequired,
  signin: PropTypes.func.isRequired,
  signinErrors: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  signinIsValid: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Signin;
