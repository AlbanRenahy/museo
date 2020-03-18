/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Composants
import Form from '../Form';
import Input from '../Input';

// Styles et assets
import './recovery.scss';

/*
 * Code
 */
const Recovery = ({
  updateUserformField,
  sendRecovery,
  recoveryMessage,
  email,
}) => (
  <Form onSubmit={sendRecovery} className="recovery-form">
    <p className="recovery-message">{recoveryMessage}</p>
    <div className="recovery-instructions">
      <p>Si vous avez oublié votre mot de passe et souhaitez le réinitialiser :</p>
      <p>1 - Saisissez votre adresse e-mail et cliquez sur "Envoyer".</p>
      <p>2 - Suivez les instructions dans l'email de vérification qui va vous être envoyé.</p>
    </div>
    <Input
      className="email-input"
      type="text"
      id="email"
      name="Email"
      placeholder="Email*"
      value={email}
      onChangeFunction={(input) => updateUserformField('email', input)}
    />
    <button type="submit" className="form-button">ENVOYER</button>
    <Link to="/" className="login-link">Retour à la page d'accueil</Link>
  </Form>
);

Recovery.propTypes = {
  updateUserformField: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  sendRecovery: PropTypes.func.isRequired,
  recoveryMessage: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Recovery;
