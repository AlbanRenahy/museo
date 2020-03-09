import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import Form from 'src/components/Form';
import Input from 'src/components/Input';

import './profil.scss';


const Profil = ({
  username,
  email,
  password,
  updateUserformField,
  updateUser,
}) => (
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
    <p className="login-link"><Link to="/">Retour à la page d'accueil</Link></p>
  </Form>
);

Profil.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateUserformField: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default Profil;
