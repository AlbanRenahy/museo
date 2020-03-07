import React from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Popup, Circle,
} from 'react-leaflet';
import { geolocated } from 'react-geolocated';
import PropTypes from 'prop-types';
import L from 'leaflet';
import Menu from '../../containers/Menu';
import RenseignementMonuments from '../../containers/RenseignementMonuments';
import DisplayMonument from '../../containers/DisplayMonument';
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
    const { updateMapformField, openDataForm, closeAllModals } = this.props;
    updateMapformField('clickedLat', e.latlng.lat);
    updateMapformField('clickedLng', e.latlng.lng);
    closeAllModals();
    openDataForm(e.latlng);
  };

  handleClickMarker = () => {
    const { openDisplayMonument, closeAllModals } = this.props;
    console.log('marker clicked');
    closeAllModals();
    openDisplayMonument();
  }


  render() {
    const { closeAllModals } = this.props;
    const {
      coords, isGeolocationEnabled,
    } = this.props;
    const defaultCenter = coords ? [coords.latitude, coords.longitude] : [46.7248003746672, 2.9003906250000004];
    console.log(this.props);
    return (
      <>
        <Menu />
        <RenseignementMonuments />
        <DisplayMonument />
        <LeafletMap
          center={isGeolocationEnabled ? defaultCenter : [
            coords.latitude,
            coords.longitude,
          ]}
          // center={defaultCenter}
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
            onClick={this.handleClickMarker}
          >
            <Popup>
              Je suis un pop up à Paris
            </Popup>
          </Marker>
          <Marker
            position={[49.985289726555855, 2.649164199829102]}
            icon={this.myPinOrange}
            onClick={this.handleClickMarker}
          >
            <Popup>
              Bonjour, je suis une punaise !
            </Popup>
          </Marker>
          <Marker
            position={[48.59068837960679, -1.674041748046875]}
            icon={this.myPinPurple}
            onClick={this.handleClickMarker}
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
          {coords !== null && (
            <>
              <Circle
                center={[coords.latitude, coords.longitude]}
                radius={coords.accuracy / 2}
                color="purple"
                fillColor="purple"
              />
              <Circle
                center={[coords.latitude, coords.longitude]}
                radius={0.1}
                color="purple"
                fillColor="purple"
              />
            </>
          )}
        </LeafletMap>
      </>
    );
  }
}

Leaflet.propTypes = {
  openDataForm: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  updateMapformField: PropTypes.func.isRequired,
  openDisplayMonument: PropTypes.func.isRequired,
  coords: PropTypes.object.isRequired,
  isGeolocationEnabled: PropTypes.bool.isRequired,
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: null,
  watchPosition: true,
})(Leaflet);
