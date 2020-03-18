
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card, Icon, Image, Message,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import ViewToggler from 'src/containers/ViewToggler';
import BurgerMap from 'src/containers/BurgerMap';

import MainPicture from 'src/styles/images/stephaneBern.jpg';

import './liste.scss';

class Liste extends Component {
  // {buildings, listData, loading, getBuildingsListData} = this.props;
  // { buildingsData } = getBuildingsListData(buildings);
  // console.log(buildingsData);
  componentDidMount() {
    const { monuments, getMonumentsListData } = this.props;
    getMonumentsListData(monuments);
  }

  render() {
    const { monuments, loading } = this.props;
    return (
      <div id="liste">
        <ViewToggler />
        <BurgerMap />
        {monuments && (
        <Card.Group>
          {monuments.map((item) => (
            <Card key={item.id} className="card">
              <Image src={MainPicture} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Description>{item.address}</Card.Description>
                <Card.Description>{item.description}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
        )}
        {(monuments.length === 0) && (
          <Message compact>
            <Message.Header>{loading ? 'Chargement...' : 'Aucun musée ou monument trouvé'}</Message.Header>
            {!loading && (
            <p>
              Il n'y a pas de musée ou monument enregistré dans la zone observée.
            </p>
            )}
          </Message>
        )}
        <div className="back-to-map">
          <Link className="back-to-map-btn" to="/map">
            <Icon.Group>
              <Icon name="map outline" />
              <Icon corner name="reply" />
            </Icon.Group>
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
};

export default Liste;
