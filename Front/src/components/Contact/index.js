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
  emailInput, messageInput, updateFormField, sendMessage,
}) => (
  <Form onSubmit={sendMessage}>
    <p className="contact-title">Contactez nous !</p>
    <Input
      type="email"
      id="email"
      name="email"
      placeholder="Email*"
      value={emailInput}
      onChangeFunction={(input) => updateFormField('emailInput', input)}
    />
    <TextArea
      type="text"
      rows="7"
      id="message"
      name="message"
      placeholder="Votre message*"
      value={messageInput}
      onChangeFunction={(input) => updateFormField('messageInput', input)}
    />
    <button type="submit" className="inverted-colors form-button">Envoyer mon message</button>
    <Link to="/map">Retour à la page d'accueil</Link>
  </Form>
);

Contact.propTypes = {
  emailInput: PropTypes.string.isRequired,
  messageInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default Contact;
