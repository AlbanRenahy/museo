import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './burger.scss';
import './burgermap.scss';

const BurgerMap = ({
  isConnected,
  isMenuOpen,
  disconnect,
  closeAllModals,
  toggleMenu,
  closeMenu,
}) => {
  const handleNavLinkClick = () => {
    closeMenu();
  };

  const handleMenuClick = () => {
    closeAllModals();
    toggleMenu();
  };

  return (
    <div id="burgernav">
      <button onClick={handleMenuClick} className={isMenuOpen ? 'hamburger hamburger--elastic is-active' : 'hamburger hamburger--elastic'} type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <nav className={isMenuOpen ? 'content-menu open' : 'content-menu'}>
        <ul>
          {isConnected && (
          <NavLink
            onClick={() => {
              disconnect(); handleNavLinkClick();
            }}
            to="/login"
          >Déconnexion
          </NavLink>
          )}
          {!isConnected && <NavLink to="/login">Connexion</NavLink>}
          {isConnected && <NavLink to="/profil">Mon compte</NavLink>}
          <NavLink to="/about">A propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </div>
  );
};
BurgerMap.propTypes = {
  closeAllModals: PropTypes.func.isRequired,
  disconnect: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default BurgerMap;
