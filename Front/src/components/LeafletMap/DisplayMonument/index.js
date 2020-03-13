/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import './DisplayMonument.scss';
import mainPicture from '../../../styles/images/louvre.jpg';

const DisplayMonument = ({
  isDisplayMonumentOpen,
  closeAllModals,
  monuments,
  id,
}) => {
  const handleCloseDataForm = (e) => {
    e.preventDefault();
    console.log('Dataform closed');
    closeAllModals();
  };


  return (
    <div id="DisplayMonument">
      <div className={isDisplayMonumentOpen ? 'display-donnees open' : 'display-donnees'}>
        <div className="dysplay-donnees_relative">
          <header>
            <div
              className="header-picture"
              style={{
                backgroundImage: `url(${mainPicture})`,
              }}
            />
            <a href="#" className="renseignement-donnees_close" onClick={handleCloseDataForm}>Fermer</a>
            <div className="header-info">
              <h2 className="header-info-name">Musée du Louvre</h2>
              <h3 className="header-info-address">Rue de Rivoli, 75001 Paris</h3>
            </div>
          </header>
          <hr />
          <div className="panel-description">
            <p className="panel-description-title">Description</p>
            <p className="panel-description-text">Musée le plus visité au monde. Il abrite notamment le célèbre tableau de la Joconde, peint par Léonard de Vinci.</p>
          </div>
          <hr />
          <div className="panel-informations">
            <ul>
              <li>
                <p className="information">Thématique</p>
                <p>Art</p>
              </li>
              <li>
                <p className="information">Période</p>
                <p>XVIIIeme siècle</p>
              </li>
              <li>
                <p className="information">Région</p>
                <p>Île de France</p>
              </li>
              <li>
                <p className="information">Public visé</p>
                <p>Toute la famille</p>
              </li>
            </ul>
          </div>
          <hr />
          <footer>
            <div className="panel-vote">
              <p>VOTER POUR CETTE FICHE</p>
              <span className="upvote">
                <a href="">
                  <Icon name="arrow up" />
                </a>
              </span>
              <span className="downvote">
                <a>
                  <Icon name="arrow down" />
                </a>
              </span>
            </div>
          </footer>
          <div className="panel-modify visible">
            <hr />
            <a href=""><p>Modifier des informations sur cette fiche</p></a>
          </div>
        </div>
      </div>
    </div>
  );
};

DisplayMonument.propTypes = {
  closeAllModals: PropTypes.func.isRequired,
  isDisplayMonumentOpen: PropTypes.bool.isRequired,
};

export default DisplayMonument;
