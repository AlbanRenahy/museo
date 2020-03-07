import React from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

import './burgerNav.scss';

const BurgerNav = () => (
  <div id="Burgernav">
    <Popup
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
      trigger={<button type="button" className="popup" />}
      position="bottom"
      closeOnDocumentClick
    >

      <ul className="navigation">
        <li><Link to="/profil">Mon compte</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">A propos</Link></li>
        <li><Link to="/login">Connexion</Link></li>
      </ul>
    </Popup>
  </div>
);

export default BurgerNav;
