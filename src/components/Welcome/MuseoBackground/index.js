/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants

import Background from 'src/styles/images/BG-Login-Signin.png';

// Styles et assets
import './museoBackground.scss';

/**
 * Code
 */
const MuseoBackground = () => (
  <div
    className="museoBackground"
    style={{
      backgroundImage: `linear-gradient( rgba(251, 225, 146, 0.6),rgba(0, 0, 255, 0.5)), url(${Background})`,
    }}
  />
);

/**
 * Export
 */
export default MuseoBackground;
