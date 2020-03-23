/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


// Composants
import Form from '../Form';
import Input from '../Input';
import TextArea from '../TextArea';

// Styles et assets
import './contact.scss';

/*
 * Code
 */
const Contact = ({
  email, message, updateUserformField, sendMessage, contactMessage, isConnected
}) => (
  <Form onSubmit={sendMessage} className="contact-form">
    <p className="contact-message">{contactMessage}</p>
    <h1 className="contact-title">Contactez nous !</h1>
    <Input
      className="email-input"
      type="email"
      id="email"
      name="email"
      placeholder="Email*"
      value={email}
      onChangeFunction={(input) => updateUserformField('email', input)}
    />
    <TextArea
      type="text"
      rows="7"
      id="message"
      name="message"
      placeholder="Votre message*"
      value={message}
      onChangeFunction={(input) => updateUserformField('message', input)}
    />
    <button type="submit" className="inverted-colors form-button">ENVOYER MON MESSAGE</button>
    <Link to="/" className="login-link">{isConnected ? 'Retour à la carte' : 'Retour à la page d\'accueil'}</Link>
  </Form>
);

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  updateUserformField: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  contactMessage: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired,
};


/**
 * Export
 */
export default Contact;
