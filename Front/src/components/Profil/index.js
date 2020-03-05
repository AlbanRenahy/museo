import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import MuseoLogo from 'src/styles/images/logo_museo_couleur.png';
import Background from 'src/styles/images/BG-Login-Signin.png';
import BurgerNav from 'src/components/BurgerNav';
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
  <div
    className="profil"
    style={{
      backgroundImage: `linear-gradient( rgba(251, 225, 146, 0.6),rgba(0, 0, 255, 0.5)), url(${Background})`,
    }}
  >
    <BurgerNav />
    <div className="profil-container">
      <div className="profil-logo">
        <img src={MuseoLogo} className="profil-image" alt="Museo" />
        <p className="profil-logo_subtitle">L'application cartographique pour vos monuments et musées favoris </p>
      </div>
      <div className="profil-content">
        <div className="profil-user">
          <Form onSubmit={updateUser}>
            <h3>Bienvenue sur votre profil</h3>
            <p className="pencil profil-user-pseudo">
              <Input
                className="profil-input"
                type="username"
                id="username"
                name="pseudonyme"
                placeholder={username}
                value={username}
                onChangeFunction={(input) => updateUserformField('username', input)}
              />
            </p>

            <p className="pencil profil-user-email">
              <Input
                className="profil-input"
                type="email"
                id="email"
                name="email"
                placeholder={email}
                value={email}
                onChangeFunction={(input) => updateUserformField('email', input)}
              />
            </p>

            <p className="pencil profil-user-editpass">
              <Input
                className="profil-input"
                type="password"
                id="password"
                name="mot de passe"
                placeholder={password}
                value={password}
                onChangeFunction={(input) => updateUserformField('password', input)}
              />
            </p>
            <button type="submit" className="profil-update inverted-colors form-button">Enregistrer</button>
            <p className="home-link"><Link to="/">Retour à la page d'accueil</Link></p>
          </Form>
        </div>
      </div>
    </div>
  </div>
);

Profil.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateUserformField: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default Profil;
