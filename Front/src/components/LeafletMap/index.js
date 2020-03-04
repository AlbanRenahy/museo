import React from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';
import RenseignementMonuments from '../../containers/RenseignementMonuments';
import './leafletmap.scss';


// pour utiliser des punaises
import pins from '../../styles/images/pinorange.png';
import pins2 from '../../styles/images/pins.png';

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
  const myPin2 = L.icon({
    iconUrl: `${pins2}`,
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
          icon={myPin2}
        >
          <Popup>
            Je suis un pop up à Paris
          </Popup>
        </Marker>
        <Marker
          position={[49.985289726555855, 2.649164199829102]}
          icon={myPin}
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
