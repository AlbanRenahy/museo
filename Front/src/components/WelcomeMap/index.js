import React from 'react';
import './welcomeMap.scss';

import France from 'src/styles/images/France-vector-map.svg';

const WelcomeMap = () => (
  <div className="map">
    <div className="markers">
      <div className="francemap"><img src={France} className="france" alt="FranceMap" /></div>
      <span className="marker1" />
      <span className="marker2" />
      <span className="marker3" />
      <span className="marker4" />
      <span className="marker5" />
    </div>
  </div>
);

export default WelcomeMap;
