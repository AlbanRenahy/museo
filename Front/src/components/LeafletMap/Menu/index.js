import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'semantic-ui-react';

import './menu.scss';
import './burger.scss';

const TopMenu = ({
  searchInput, updateMapformField, closeAllModals, autoComplete, autoCompleteResults, centerByAddress, isAutocompleteOpen, findAddressSearch,
  isMenuOpen, toggleMenu, isConnected, disconnect, redirectToLogin,
}) => {
  const handleSearch = (position) => (e) => {
    updateMapformField('searchInput', e.target.textContent);
    centerByAddress(position);
  };

  const handleMenuClick = () => {
    console.log('clicked');
    closeAllModals();
    toggleMenu();
  };
  return (
    <div id="menu">
      {redirectToLogin && <Redirect to="/login/" />}
      <Menu.Menu>
        <Button.Group>
          <Button
            active
            as={Link}
            to="/map"
          >
            Carte
          </Button>
          <Button
            as={Link}
            to="/liste"
            className="no-border-left"
          >
            Monuments
          </Button>
        </Button.Group>
      </Menu.Menu>

      <Menu.Menu position="right">
        <div className="ui right aligned category search item">
          <div className={`ui transparent icon input ${searchInput && 'not-empty'}`}>
            <div className="input-container">
              <input
                className="input"
                type="text"
                value={searchInput}
                id="search-input"
                name="search-input"
                placeholder="Rechercher une adresse"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    closeAllModals();
                    findAddressSearch();
                  }
                }}
                onChange={(e) => {
                  autoComplete(e.target.value);
                }}
                onFocus={(event) => {
                  event.target.classList.add('open');
                }}
              />
            </div>
            <i
              className="search link icon"
              onClick={() => {
                closeAllModals();
                findAddressSearch();
              }}
            />
          </div>
          <div className={isAutocompleteOpen ? 'results transition visible' : 'results transition'}>
            {
              autoCompleteResults.map((address) => (
                <p key={address.properties.id} className="result" onClick={handleSearch([address.geometry.coordinates[1], address.geometry.coordinates[0]])}><span className="city">{address.properties.name}</span>, {address.properties.context}</p>
              ))
            }
          </div>
        </div>
      </Menu.Menu>


      <button onClick={handleMenuClick} className={isMenuOpen ? 'hamburger hamburger--elastic is-active' : 'hamburger hamburger--elastic'} type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <nav className={isMenuOpen ? 'content-menu open' : 'content-menu'}>
        <ul>
          {isConnected && <NavLink onClick={disconnect} to="/login">Déconnexion</NavLink>}
          {!isConnected && <NavLink to="/login">Connexion</NavLink>}
          {isConnected && <NavLink to="/profil">Mon compte</NavLink>}
          <NavLink to="/about">A propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </div>
  );
};

TopMenu.propTypes = {
  searchInput: PropTypes.string.isRequired,
  updateMapformField: PropTypes.func.isRequired,
  autoComplete: PropTypes.func.isRequired,
  autoCompleteResults: PropTypes.array.isRequired,
  isAutocompleteOpen: PropTypes.bool.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  centerByAddress: PropTypes.func.isRequired,
  findAddressSearch: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
  disconnect: PropTypes.func.isRequired,
  redirectToLogin: PropTypes.bool.isRequired,
};

export default TopMenu;
