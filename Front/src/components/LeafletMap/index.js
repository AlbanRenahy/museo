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
import Loading from '../LoadingScreen';


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

  zoomControl = L.control.zoom({
    position: 'bottomright',
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

  handleMapReady = () => {
    const { updateMapformField } = this.props;
    setTimeout(() => updateMapformField('loading', false), 3000);
  }

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
    // console.log(current);
    closeAllModals();
    // updateMapformField('nameCard', current.name);
    setMonumentDatas(current);
    openDisplayMonument();
  }

  handleMove = () => {
    const { updateMapformField, getMonuments, fetchingMonuments } = this.props;
    const actualBounds = this.map.current.leafletElement.getBounds();
    updateMapformField('actualBounds', actualBounds);
    // eslint-disable-next-line no-unused-expressions
    fetchingMonuments || getMonuments(actualBounds);
    updateMapformField('fetchingMonuments', true);
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
      loading,
    } = this.props;
    if (isGeolocationEnabled && coords && !userLocalized) {
      // eslint-disable-next-line no-unused-expressions
      updateMapformField('center', [coords.latitude, coords.longitude]);
      updateMapformField('userLocalized', true);
      updateMapformField('zoom', 13);
    }
    return (
      <>
        {loading && <Loading />}
        {!loading && <RenseignementMonuments />}
        {!loading && <DisplayMonument />}
        <Menu />
        <DisplayMonument />
        <RenseignementMonuments />
        <LeafletMap
          ref={this.map}
          center={center}
          zoom={zoom}
          zoomSnap={1}
          markerZoomAnimation={false}
          flyTo
          attributionControl
          zoomControl
          doubleClickZoom
          scrollWheelZoom
          worldCopyJump
          dragging
          animate
          infinite
          inertia
          wheelDebounceTime={200}
          wheelPxPerZoomLevel={100}
          zoomAnimationThreshold={4}
          fadeAnimation
          easeLinearity={0.2}
          onContextmenu={this.handleRightClick}
          onClick={closeAllModals}
          whenReady={this.handleMapReady}
          onZoomEnd={this.handleMove}
          onMoveEnd={this.handleMove}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            maxZoom={21}
            minZoom={3}
          />
          <MarkerClusterGroup>
            {
              monuments.map(({
                latitude, longitude, id,
              }) => (
                <Marker
                  position={[latitude, longitude]}
                  key={id}
                  id={id}
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
  loading: PropTypes.bool.isRequired,
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
