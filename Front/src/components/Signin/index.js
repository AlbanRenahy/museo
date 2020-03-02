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
  firstNameInput,
  lastNameInput,
  loginInput,
  passwordInput,
  passConfirmInput,
  changeFirstName,
  changeLastName,
  changeLogin,
  changePassword,
  changePassConfirm,
}) => (
  <Form>
    <div className="signin-container_names">
      <Input
        type="text"
        id="last-name"
        name="last-name"
        placeholder="Nom*"
        value={lastNameInput}
        onChangeFunction={changeLastName}
      />

      <Input
        type="text"
        id="first-name"
        name="first-name"
        placeholder="Prénom*"
        value={firstNameInput}
        onChangeFunction={changeFirstName}
      />
    </div>

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

    <Input
      type="password"
      id="password-confirm"
      name="password-confirm"
      placeholder="Confirmer votre mot de passe*"
      value={passConfirmInput}
      onChangeFunction={changePassConfirm}
    />

    <button type="submit" className="form-button">M'inscrire</button>

    <p className="map-link"><Link to="/login">J'ai déjà mes identifiants</Link></p>
  </Form>

);

Signin.propTypes = {
  // FORM FIELDS
  firstNameInput: PropTypes.string.isRequired,
  lastNameInput: PropTypes.string.isRequired,
  loginInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  passConfirmInput: PropTypes.string.isRequired,
  changeFirstName: PropTypes.func.isRequired,
  changeLastName: PropTypes.func.isRequired,
  changeLogin: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  changePassConfirm: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Signin;
