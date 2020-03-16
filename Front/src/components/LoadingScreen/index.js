import React from 'react';

import './loadingScreen.scss';

const LoadingScreen = () => (
  <div className="container">
    <div className="bird-cont">
      <div className="bird" />
    </div>
    <div className="bird-cont2 bird2">
      <div className="bird" />
    </div>
    <div className="bird-cont3 bird3">
      <div className="bird" />
    </div>
    <div className="bird-cont4 bird4">
      <div className="bird" />
    </div>
    {/* <img src={LoadingGif} alt="LoadingGif" /> */}
  </div>
);

export default LoadingScreen;
