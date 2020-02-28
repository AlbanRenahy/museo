import React from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet';
import './leafletmap.scss';

// Création de la map avec React Leaflet

const Leaflet = () => (
  <LeafletMap
    center={[48.864716, 2.349014]}
    zoom={14}
    minZoom={3}
    maxZoom={18}
    attributionControl
    zoomControl={false}
    doubleClickZoom={true}
    scrollWheelZoom
    dragging
    animate
    easeLinearity={0.35}
  >
    <TileLayer
      url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png"
    />

  </LeafletMap>
);

export default Leaflet;
