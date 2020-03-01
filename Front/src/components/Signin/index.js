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
import Form from '../Form';
import Input from '../Input';

// Styles et assets
import './signin.scss';

/**
 * Code
 */
const Signin = () => (
        <Form>
          <div className="signin-container_names">
            <Input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Nom*"
            />

            <Input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="Prénom*"
            />
          </div>

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

          <Input
            type="password"
            id="password-confirm"
            name="password-confirm"
            placeholder="Confirmer votre mot de passe*"
          />

          <button type="submit" className="form-button">M'inscrire</button>

          <p className="map-link"><Link to="/login">J'ai déjà mes identifiants</Link></p>
        </Form>

);

/**
 * Export
 */
export default Signin;
