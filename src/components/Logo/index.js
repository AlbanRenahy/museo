import React from 'react';

import MuseoLogo from 'src/styles/images/new_logo_museo_couleur.png';

// Styles et assets
import './logo.scss';

const Logo = () => (
  <div className="museo-logo">
    <img src={MuseoLogo} className="museo-logo_image" alt="Museo" />
    <p className="museo-logo_subtitle">L'application cartographique pour vos monuments et musées favoris </p>
  </div>
);

/**
 * Export
 */
export default Logo;
