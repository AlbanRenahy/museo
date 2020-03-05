/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

/**
 * Local import
 */
// Composants

import MuseoLogo from 'src/styles/images/logo_museo_couleur.png';
import Background from 'src/styles/images/BG-Login-Signin.png';
import BurgerNav from 'src/components/BurgerNav';

import Config from '../../../particlesJS-config.json';

// Styles et assets
import './welcome.scss';

/**
 * Code
 */
const Welcome = ({ children }) => (
  <div
    className="welcome"
    style={{
      backgroundImage: `url(${Background})`,
    }}
  >
    <div className="welcome">
      <BurgerNav />
      <Particles params={Config} />
      <div className="welcome-container">
        <img src={MuseoLogo} alt="Museo" />
        <p className="welcome-container_subtitle">L'application cartographique pour vos monuments et musées favoris </p>
        {children}
      </div>
    </div>
  </div>
);

Welcome.propTypes = {
  children: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default Welcome;
