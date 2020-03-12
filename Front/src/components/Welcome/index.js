/**
 * Import
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

// Composants
import BurgerNav from 'src/components/BurgerNav';
import Logo from 'src/components/Logo';
import MuseoBackground from './MuseoBackground';

import Config from '../../../particlesJS-config.json';

// Styles et assets
import './welcome.scss';

/**
 * Code
 */

class Welcome extends Component {
  componentDidMount() {
    const { updateUserformField } = this.props;
    updateUserformField('redirectToLogin', false);
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <MuseoBackground />
        <BurgerNav />
        <Logo />
        <Particles params={Config} className="particles" />
        { children }
      </>
    );
  }
}

Welcome.propTypes = {
  children: PropTypes.object.isRequired,
  updateUserformField: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Welcome;
