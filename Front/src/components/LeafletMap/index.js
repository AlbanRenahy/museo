import React from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet';
import RenseignementMonuments from '../../containers/RenseignementMonuments';
import './leafletmap.scss';

// Création de la map avec React Leaflet

const Leaflet = ({openDataForm, isDataFormOpen, closeDataForm, addMonument}) => {

  const handleRightClick = (e) => {
    console.log(e.latlng);
    openDataForm(e.latlng);
  };


  return (
    <>
      <RenseignementMonuments isDataFormOpen={isDataFormOpen} closeDataForm={closeDataForm} addBuilding={addMonument} />
      <LeafletMap
        center={[48.864716, 2.349014]}
        zoom={6}
        maxZoom={18}
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
        <Marker position={[48.864716, 2.349014]}>
          <Popup>
            Je suis un pop up à Paris
          </Popup>
        </Marker>
      </LeafletMap>
    </>
  );
};

export default Leaflet;
