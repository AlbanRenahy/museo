/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';

// images
// import MuseoLogoBW from '../../styles/images/museo_logo.png';


// Composants
import Form from '../Form';
import Input from '../Input';

// Styles et assets
import './login.scss';

/*
 * Code
 */
const Login = () => (
  <Form>
    <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
          />
    <Input
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe*"
          />
    <p className="lost-password">
            <a className="lost-password" onClick={() => alert('pas de chance !')}>J'ai perdu mon mot de passe</a>
          </p>
    <button type="submit" className="inverted-colors form-button">Me connecter</button>
    <Link to="/signin">Je souhaite m'inscrire</Link>
    <Link to="/map">Entrer en simple visite</Link>
  </Form>
);

/**
 * Export
 */
export default Login;
