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
  username,
  email,
  password,
  passConfirm,
  updateFormField,
  signin,
}) => (
  <Form onSubmit={signin}>
    <Input
      type="email"
      id="email"
      name="email"
      placeholder="Email*"
      value={email}
      onChangeFunction={(input) => updateFormField('email', input)}
    />

    <Input
      type="text"
      id="username"
      name="pseudonyme"
      placeholder="Pseudonyme*"
      value={username}
      onChangeFunction={(input) => updateFormField('username', input)}
    />


    <Input
      type="password"
      id="password"
      name="mot de passe"
      placeholder="Mot de passe*"
      value={password}
      onChangeFunction={(input) => updateFormField('password', input)}
    />

    <Input
      type="password"
      id="password-confirm"
      name="confirmer votre mot de passe"
      placeholder="Confirmer votre mot de passe*"
      value={passConfirm}
      onChangeFunction={(input) => updateFormField('passConfirm', input)}
    />

    <button type="submit" className="form-button">M'inscrire</button>

    <p className="map-link"><Link to="/login">J'ai déjà mes identifiants</Link></p>
  </Form>

);

Signin.propTypes = {
  // FORM FIELDS
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passConfirm: PropTypes.string.isRequired,
  // FUNCTIONS
  updateFormField: PropTypes.func.isRequired,
  signin: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Signin;
