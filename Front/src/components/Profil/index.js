import React from 'react';

import Pencil from 'src/styles/images/pencil.svg';
import './profil.scss';

const Profil = () => (
      <div className="profil-page">
        <h3> Bienvenue sur votre profil</h3>
         <div className="profil-user">
        <img 
        scr={Pencil} 
        alt="pencil" 
        className="pencil-img" />
        <div>Username</div>
      </div>
      </div>
);

export default Profil;