import React from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet';
import PropTypes from 'prop-types';
import L from 'leaflet';
import Menu from '../../containers/Menu';
import RenseignementMonuments from '../../containers/RenseignementMonuments';
import './leafletmap.scss';


// pour utiliser des punaises
import pins from '../../styles/images/pins.png';
import pinsOrange from '../../styles/images/pinorange.png';
import pinsPurple from '../../styles/images/pinpurple.png';
import pinsPink from '../../styles/images/pinpink.png';
// Création de la map avec React Leaflet

class Leaflet extends React.Component {
  // openDataForm,
  // closeAllModals,
  // isDataFormOpen,
  // closeDataForm,
  // addMonument,
  // updateMapformField,

  myPin = L.icon({
    iconUrl: `${pins}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  myPinOrange = L.icon({
    iconUrl: `${pinsOrange}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  myPinPurple = L.icon({
    iconUrl: `${pinsPurple}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  myPinPink = L.icon({
    iconUrl: `${pinsPink}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  handleRightClick = (e) => {
    const { updateMapformField, openDataForm } = this.props;
    updateMapformField('clickedLat', e.latlng.lat);
    updateMapformField('clickedLng', e.latlng.lng);
    openDataForm(e.latlng);
  };

  render() {
    const { closeAllModals } = this.props;
    return (
      <>
        <Menu />
        <RenseignementMonuments />
        <LeafletMap
          center={[48.864716, 2.349014]}
          zoom={12}
          maxZoom={19}
          minZoom={6}
          attributionControl
          zoomControl={false}
          doubleClickZoom={false}
          scrollWheelZoom
          dragging
          animate
          easeLinearity={0.35}
          onContextmenu={this.handleRightClick}
          onClick={closeAllModals}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Marker
            position={[48.864716, 2.349014]}
            icon={this.myPin}
          >
            <Popup>
              Je suis un pop up à Paris
            </Popup>
          </Marker>
          <Marker
            position={[49.985289726555855, 2.649164199829102]}
            icon={this.myPinOrange}
          >
            <Popup>
              Bonjour, je suis une punaise !
            </Popup>
          </Marker>
          <Marker
            position={[48.59068837960679, -1.674041748046875]}
            icon={this.myPinPurple}
          >
            <Popup>
              Bonjour, je suis une punaise !
            </Popup>
          </Marker>
          <Marker
            position={[44.8242212653786, -0.608367919921875]}
            icon={this.myPinPink}
          >
            <Popup>
              Bonjour, je suis une punaise !
            </Popup>
          </Marker>
        </LeafletMap>
      </>
    );
  }
}

Leaflet.propTypes = {
  openDataForm: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  updateMapformField: PropTypes.func.isRequired,
};

export default Leaflet;
