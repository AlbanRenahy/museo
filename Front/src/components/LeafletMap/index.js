import React from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';
import RenseignementMonuments from '../../containers/RenseignementMonuments';
import './leafletmap.scss';


// pour utiliser des punaises
import pins from '../../styles/images/pins.png';
import pinsOrange from '../../styles/images/pinorange.png';
import pinsPurple from '../../styles/images/pinpurple.png';
import pinsPink from '../../styles/images/pinpink.png';
// Création de la map avec React Leaflet

const Leaflet = ({openDataForm, isDataFormOpen, closeDataForm, addMonument, updateFormField }) => {

  const handleRightClick = (e) => {
    console.log(e.latlng);
    updateFormField('clickedLat', e.latlng.lat);
    updateFormField('clickedLng', e.latlng.lng);
    openDataForm(e.latlng);
  };
  const myPin = L.icon({
    iconUrl: `${pins}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });
  const myPinOrange = L.icon({
    iconUrl: `${pinsOrange}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });
  const myPinPurple = L.icon({
    iconUrl: `${pinsPurple}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });
  const myPinPink = L.icon({
    iconUrl: `${pinsPink}`,
    iconSize: [40, 40], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
  });



  return (
    <>
      <RenseignementMonuments isDataFormOpen={isDataFormOpen} closeDataForm={closeDataForm} addBuilding={addMonument} />
      <LeafletMap
        center={[48.864716, 2.349014]}
        zoom={12}
        maxZoom={19}
        attributionControl
        zoomControl={false}
        doubleClickZoom={false}
        scrollWheelZoom
        dragging
        animate
        easeLinearity={0.35}
        onContextmenu={handleRightClick}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker
          position={[48.864716, 2.349014]}
          icon={myPin}
        >
          <Popup>
            Je suis un pop up à Paris
          </Popup>
        </Marker>
        <Marker
          position={[49.985289726555855, 2.649164199829102]}
          icon={myPinOrange}
        >
          <Popup>
            Bonjour, je suis une punaise !
          </Popup>
        </Marker>
        <Marker
          position={[48.59068837960679, -1.674041748046875]}
          icon={myPinPurple}
        >
          <Popup>
            Bonjour, je suis une punaise !
          </Popup>
        </Marker>
        <Marker
          position={[44.8242212653786, -0.608367919921875]}
          icon={myPinPink}
        >
          <Popup>
            Bonjour, je suis une punaise !
          </Popup>
        </Marker>
      </LeafletMap>
    </>
  );
};

export default Leaflet;
