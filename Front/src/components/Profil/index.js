import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import Form from 'src/components/Form';
import Input from 'src/components/Input';
import ConfirmModale from './ConfirmModale';

import './profil.scss';


const Profil = ({
  username,
  email,
  password,
  updateUserformField,
  updateUser,
  displayConfirmDeleteUser,
  OpenConfirmDeleteUser,
  CloseConfirmDeleteUser,
}) => (
  <>
  <Form onSubmit={updateUser} className="profil-form">
    <h1 className="profil-title">Bienvenue sur votre profil</h1>
    <div className="profil-field">
      <Input
        className="pencil username-input"
        type="username"
        id="username"
        name="pseudonyme"
        placeholder={username}
        value={username}
        onChangeFunction={(input) => updateUserformField('username', input)}
      />
    </div>

    <div className="profil-field">
      <Input
        className="pencil email-input"
        type="email"
        id="email"
        name="email"
        placeholder={email}
        value={email}
        onChangeFunction={(input) => updateUserformField('email', input)}
      />
    </div>

    <div className="profil-field">
      <Input
        className="pencil password-input"
        type="password"
        id="password"
        name="mot de passe"
        placeholder={password}
        value={password}
        onChangeFunction={(input) => updateUserformField('password', input)}
      />
    </div>

    <button type="submit" className="profil-update inverted-colors form-button">ENREGISTRER</button>
    <button type="button" className="delete-profil" onClick={OpenConfirmDeleteUser}>Supprimer mon compte</button>
    <Link to="/" className="login-link">Retour à la page d'accueil</Link>
  </Form>
    {displayConfirmDeleteUser && <ConfirmModale closeModale={CloseConfirmDeleteUser} />}
  </>
);

Profil.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateUserformField: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  displayConfirmDeleteUser: PropTypes.bool.isRequired,
  OpenConfirmDeleteUser: PropTypes.func.isRequired,
  CloseConfirmDeleteUser: PropTypes.func.isRequired,
};

export default Profil;
