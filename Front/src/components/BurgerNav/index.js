import React from 'react';
import Popup from 'reactjs-popup';

import './burgerNav.scss';

const BurgerNav = () => (
  <div id="Burgernav">
    <Popup
      trigger={<button type="button" className="popup"> Icône </button>}
      position="bottom"
      closeOnDocumentClick
    >

      <ul className="navigation">
        <li>Mon profil</li>
        <li>Contact</li>
        <li>A propos</li>
        <li>Connexion</li>
      </ul>
    </Popup>
  </div>
);

export default BurgerNav;
