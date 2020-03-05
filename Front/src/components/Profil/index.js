import React from 'react';

import { Link } from 'react-router-dom';


import MuseoLogo from 'src/styles/images/logo_museo_couleur.png';
import Background from 'src/styles/images/BG-Login-Signin.png';
import BurgerNav from 'src/components/BurgerNav';
import Form from 'src/components/Form';
import Input from 'src/components/Input';
//import Pencil from 'src/styles/images/pencil.svg';
import './profil.scss';


const Profil = ({  }) => (
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
        <h3>Bienvenue sur votre profil</h3>
        <div className="profil-user">
          <Form>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              value={email}
              onChangeFunction={(input) => updateFormField('email', input)}
            />
            <Input
              type="username"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChangeFunction={(input) => updateFormField('username', input)}
            />

            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChangeFunction={(input) => updateFormField('password', input)}
            />
          </Form>
          <ul>
            <li className="pencil profil-user-email">Email</li>
            <li className="pencil profil-user-pseudo">Pseudo</li>
            <li className="pencil profil-user-editpass">Modifier votre mot de passe</li>
          </ul>
        </div>
        <p className="home-link"><Link to="/">Retour à la page d'accueil</Link></p>
      </div>
    </div>
  </div>
);

export default Profil;
