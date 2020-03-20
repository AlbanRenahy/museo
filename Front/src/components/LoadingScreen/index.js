import React from 'react';

import './loadingScreen.scss';


const LoadingScreen = () => (
  <div className="container">
    <div className="loadingCamera">
      <p className="letter2">Chargement en cours<br/>
      <p className="letter1"></p>
      </p>
     
      </div>
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
  </div>
);

export default LoadingScreen;
