
import axios from 'axios';

import {
  OPEN_DATA_FORM,
  openDataFormResponse,
  AUTO_COMPLETE,
  autoCompleteResults,
  openAutocomplete,
  updateMapformField,
  FIND_ADDRESS,
  centerByAddress,
  FIND_ADDRESS_SEARCH,
} from 'src/actions/mapActions';

// eslint-disable-next-line consistent-return
const extApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case OPEN_DATA_FORM:
      next(action);
      // ! NE PAS OUBLIER HTTPS
      axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${action.position.lat}&lon=${action.position.lng}&format=json&addressdetails=1`)
        .then((response) => {
          console.log(response.data);
          // console.log('JE SUIS LA');
          store.dispatch(openDataFormResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case AUTO_COMPLETE:
      store.dispatch(updateMapformField('searchInput', action.value));
      if (action.value !== '') {
        axios.get(`https://api-adresse.data.gouv.fr/search/?q=${store.getState().map.searchInput}&limit=4&limit=4`)
          .then((response) => {
            const address = response.data.features;
            console.log(address);
            store.dispatch(autoCompleteResults(address));
            store.dispatch(openAutocomplete());
          })
          .catch((error) => {
            console.log(error);
          });
      }
      else {
        store.dispatch(autoCompleteResults([]));
      }
      break;
    case FIND_ADDRESS:
      axios.get(`https://nominatim.openstreetmap.org/search/?q=${store.getState().map.address}&format=geojson`)
        .then((response) => {
          console.log(response);
          const position = response.data.features[0].geometry.coordinates;
          store.dispatch(centerByAddress([position[1], position[0]]));
          store.dispatch(updateMapformField('clickedLat', position[1]));
          store.dispatch(updateMapformField('clickedLng', position[0]));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FIND_ADDRESS_SEARCH:
      axios.get(`https://api-adresse.data.gouv.fr/search/?q=${store.getState().map.searchInput}`)
        .then((response) => {
          console.log(response);
          const position = response.data.features[0].geometry.coordinates;
          store.dispatch(centerByAddress([position[1], position[0]]));
          store.dispatch(updateMapformField('clickedLat', position[1]));
          store.dispatch(updateMapformField('clickedLng', position[0]));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      return next(action);
  }
};

export default extApiMiddleware;
