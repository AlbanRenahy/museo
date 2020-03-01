/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';

// images
// import MuseoLogoBW from '../../styles/images/museo_logo.png';
import MuseoLogo from 'src/styles/images/logo_museo_couleur.png';
import Background from 'src/styles/images/BG-Login-Signin.png';

// Composants
import Form from '../Form';
import Input from '../Input';

// Styles et assets
import './login.scss';

/*
 * Code
 */
const Login = () => (
  <div
    className="login"
    style={{
      backgroundImage: `url(${Background})`,
    }}
  >
    <div className="login">
      <div className="login-container">
        <img src={MuseoLogo} alt="Museo" />
        <p className="login-container_subtitle">Application cartographique pour vos monuments et musées favoris </p>
        <Form>
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
          <p className="lost-password">
            <a href="#">J'ai perdu mon mot de passe</a>
          </p>
          <button type="submit">Me connecter</button>
          <Link to="/signin">Je souhaite m'inscrire</Link>
          <Link to="/map">Entrer en simple visite</Link>
        </Form>
      </div>
    </div>
  </div>
 );

/**
 * Export
 */
export default Login;
