import React from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Circle,
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { geolocated } from 'react-geolocated';
import PropTypes from 'prop-types';
import L from 'leaflet';
import Menu from '../../containers/Menu';
import RenseignementMonuments from '../../containers/RenseignementMonuments';
import DisplayMonument from '../../containers/DisplayMonument';
import './leafletmap.scss';


// pour utiliser des punaises
import pins from '../../styles/images/Pins_brown.png';
import pinsOrange from '../../styles/images/Pins_orange.png';
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
    iconSize: [40, 80], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  myPinOrange = L.icon({
    iconUrl: `${pinsOrange}`,
    iconSize: [40, 80], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });

  map = React.createRef();

  componentDidMount() {
    const {
      getThematics,
      getMonuments,
      getRegions,
      getPeriods,
      getTargets,
      closeMenu,
    } = this.props;
    getThematics();
    getRegions();
    getPeriods();
    getTargets();
    getMonuments();
    closeMenu();
  }

  handleRightClick = (e) => {
    const {
      updateMapformField,
      openDataForm,
      closeAllModals,
      isConnected,
    } = this.props;
    updateMapformField('clickedLat', e.latlng.lat);
    updateMapformField('clickedLng', e.latlng.lng);
    closeAllModals();
    isConnected && openDataForm(e.latlng, true);
  };

  handleClickMarker = (e) => {
    const {
      // updateMapformField,
      openDisplayMonument,
      closeAllModals,
      setMonumentDatas,
      monuments,
    } = this.props;
    // console.log(e.target.options.id);
    const currentCard = monuments.find((monument) => monument.id === e.target.options.id);
    const current = {
      idCard: currentCard.id,
      nameCard: currentCard.name,
      addressCard: currentCard.address,
      descriptionCard: currentCard.description,
    };
    console.log(current);
    closeAllModals();
    // updateMapformField('nameCard', current.name);
    setMonumentDatas(current);
    openDisplayMonument();
  }


  render() {
    const { closeAllModals } = this.props;
    const {
      coords,
      isGeolocationEnabled,
      center,
      zoom,
      userLocalized,
      updateMapformField,
      monuments,
    } = this.props;
    if (isGeolocationEnabled && coords && !userLocalized) {
      // eslint-disable-next-line no-unused-expressions
      updateMapformField('center', [coords.latitude, coords.longitude]);
      updateMapformField('userLocalized', true);
      updateMapformField('zoom', 13);
    }
    return (
      <>
        <Menu />
        <DisplayMonument />
        <RenseignementMonuments />
        <LeafletMap
          ref={this.map}
          center={center}
          zoom={zoom}
          maxZoom={19}
          minZoom={3}
          setView
          attributionControl
          zoomControl={false}
          doubleClickZoom
          scrollWheelZoom
          dragging
          animate
          infinite
          easeLinearity={0.35}
          onContextmenu={this.handleRightClick}
          onClick={closeAllModals}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            maxZoom={19}
            minZoom={3}
          />
          {/* <Marker
            position={[48.864716, 2.349014]}
            icon={this.myPin}
            onClick={this.handleClickMarker}
          />
          <Marker
            position={[48.59068837960679, -1.674041748046875]}
            icon={this.myPinOrange}
            onClick={this.handleClickMarker} */}
          {/* /> */}
          <MarkerClusterGroup>
            {
            monuments.map((monument) => (
              <Marker
                position={[monument.latitude, monument.longitude]}
                key={monument.id}
                id={monument.id}
                icon={this.myPinOrange}
                onClick={this.handleClickMarker}
              />
            ))
          }
          </MarkerClusterGroup>
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
  monuments: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMonuments: PropTypes.func.isRequired,
  openDataForm: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  updateMapformField: PropTypes.func.isRequired,
  openDisplayMonument: PropTypes.func.isRequired,
  coords: PropTypes.object,
  isGeolocationEnabled: PropTypes.bool.isRequired,
  getThematics: PropTypes.func.isRequired,
  getRegions: PropTypes.func.isRequired,
  getPeriods: PropTypes.func.isRequired,
  getTargets: PropTypes.func.isRequired,
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  userLocalized: PropTypes.bool.isRequired,
  setMonumentDatas: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

Leaflet.defaultProps = {
  coords: null,
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: null,
  watchPosition: true,
})(Leaflet);
