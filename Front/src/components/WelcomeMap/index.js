
import React from 'react';
import './welcomeMap.css';

import France from 'src/images/France-vector-map.svg';

const WelcomeMap = () => (
  <div className="map">
    <img src={France} alt="FranceMap" />
    <div className="markers">
      <span className="marker1" />
      <span className="marker2" />
      <span className="marker3" />
      <span className="marker4" />
      <span className="marker5" />
    </div>
  </div>
);

export default WelcomeMap;
