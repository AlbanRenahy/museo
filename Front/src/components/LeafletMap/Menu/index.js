import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Button } from 'semantic-ui-react';

import './menu.scss';

const TopMenu = ({
  searchInput, updateMapformField, closeAllModals, autoComplete, autoCompleteResults, centerByAddress, isAutocompleteOpen, findAddressSearch
}) => {
  const handleSearch = (position) => (e) => {
    updateMapformField('searchInput', e.target.textContent);
    centerByAddress(position);
  };
  return (
    <div id="menu">
      {/* <Menu attached='top' borderless secondary> */}
      <Menu.Menu>
        <Button.Group>
          <Button active>Carte</Button>
          <Button className="no-border-left">Monuments</Button>
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


      <Dropdown item icon="bars" simple>
        <Dropdown.Menu>
          <Dropdown.Item>Déconnexion</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Mon compte</Dropdown.Item>
          <Dropdown.Item>Mon profil</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* </Menu> */}
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
};

export default TopMenu;
