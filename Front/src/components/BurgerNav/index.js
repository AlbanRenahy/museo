import React from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

import './burgerNav.scss';

const BurgerNav = () => (
  <div id="Burgernav">
    <Popup
      trigger={<button type="button" className="popup" />}
      position="bottom"
      closeOnDocumentClick
    >

      <ul className="navigation">
        <li>Mon profil</li>
        <li><Link to="/contact">Contact</Link></li>
        <li>A propos</li>
        <li><Link to="/signin">Connexion</Link></li>
      </ul>
    </Popup>
  </div>
);

export default BurgerNav;
