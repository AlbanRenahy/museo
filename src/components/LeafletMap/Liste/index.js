
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card, Icon, Image, Message,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import ViewToggler from 'src/containers/ViewToggler';
import BurgerMap from 'src/containers/BurgerMap';

import MainPicture from 'src/styles/images/EiffelCards.png';

import './liste.scss';
import ListeBackground from './backGr';

class Liste extends Component {
  // {buildings, listData, loading, getBuildingsListData} = this.props;
  // { buildingsData } = getBuildingsListData(buildings);
  // console.log(buildingsData);
  componentDidMount() {
    const { monuments, getMonumentsListData } = this.props;
    getMonumentsListData(monuments);
  }

  render() {
    const { monuments, loading, toggleView } = this.props;
    return (
      <div id="liste">
        <ListeBackground />
        <ViewToggler />
        <BurgerMap />
        {monuments && (
        <Card.Group>
          {monuments.map((item) => (
            <Card key={item.id} className="card">
              <Image src={MainPicture} wrapped ui={false} />
              <Card.Content>
                <h1 className="Header">{item.name}</h1>
                <div className="Address">{item.address}</div>
                <div className="Description">{item.description}</div>
                <div className="Region">{item.region ? `Région : ${item.region.name}` : 'Région : non défini'}</div>
                <div className="Thematique">{item.category ? `Thématique : ${item.category.name}` : 'Thématique : non défini'}</div>
                <div className="Periode">{item.period ? `Période : ${item.period.name}` : 'Période : non défini'}</div>
                <div className="Public">{item.target ? `Public : ${item.target.name}` : 'Public : non défini'}</div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
        )}
        {(monuments.length === 0) && (
          <Message compact className="list-message">
            <Message.Header>{loading ? 'Chargement...' : 'Aucun musée ou monument trouvé'}</Message.Header>
            {!loading && (
            <p>
              Il n'y a pas de musée ou monument enregistré dans la zone observée.
            </p>
            )}
          </Message>
        )}
        <div className="back-to-map">
          <Link className="back-to-map-btn" to="/map" onClick={() => toggleView('map')}>
            <Icon.Group>
              <Icon name="map outline" />
              <Icon corner name="reply" />
            </Icon.Group><br />
            Retour à la carte
          </Link>
        </div>
      </div>
    );
  }
}

Liste.propTypes = {
  monuments: PropTypes.array.isRequired,
  getMonumentsListData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  toggleView: PropTypes.func.isRequired,
};

export default Liste;
