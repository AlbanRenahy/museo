/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Local import
 */
// Composants
import MuseoLogo from 'src/styles/images/logo_museo_couleur.png';
import Background from 'src/styles/images/BG-Login-Signin.png';
import Form from '../Form';
import Input from '../Input';

// Styles et assets
import './signin.scss';

/**
 * Code
 */
const Signin = () => (
  <div
    className="login"
    style={{
      backgroundImage: `url(${Background})`,
    }}
  >
    <div className="signin">
      <div className="signin-container">


        <h1><img src={MuseoLogo} alt="Museo" /></h1>
        <p className="login-container_subtitle">Application cartographique pour vos monuments et musées favoris </p>


        <Form>
          <div className="signin-container_names">
            <Input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Nom"
            />

            <Input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="Prénom"
            />
          </div>

          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />

          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
          />

          <Input
            type="password"
            id="password-confirm"
            name="password-confirm"
            placeholder="Confirmer votre mot de passe"
          />

          <button type="submit">M'inscrire</button>

          <p className="map-link"><Link to="/login">J'ai déjà mes identifiants</Link></p>
        </Form>
      </div>
    </div>
  </div>

);

/**
 * Export
 */
export default Signin;
