import React from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './burgerNav.scss';

const BurgerNav = ({ isConnected, disconnect }) => (
  <div id="Burgernav">
    <Popup
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
      trigger={<button type="button" className="popup" />}
      position="bottom center"
      on="hover"
    >
      <ul className="navigation">
        {!isConnected && <li><NavLink to="/login" className="navigation-link">Connexion</NavLink></li>}
        {isConnected && <li><NavLink to="/profil" className="navigation-link">Mon compte</NavLink></li>}
        <li><NavLink to="/contact" className="navigation-link">Contact</NavLink></li>
        <li><NavLink to="/about" className="navigation-link">A propos</NavLink></li>
        {isConnected && <li><NavLink onClick={disconnect} to="/login" className="navigation-link">Déconnexion</NavLink></li>}
      </ul>
    </Popup>
  </div>
);

BurgerNav.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  disconnect: PropTypes.func.isRequired,
};
export default BurgerNav;
