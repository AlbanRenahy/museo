
import axios from 'axios';

import {
  OPEN_DATA_FORM,
  openDataFormResponse,
  AUTO_COMPLETE,
  autoCompleteResults,
  openAutocomplete,
  updateMapformField,
} from 'src/actions/mapActions';

// eslint-disable-next-line consistent-return
const extApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case OPEN_DATA_FORM:
      next(action);
      axios.get(`http://nominatim.openstreetmap.org/reverse?lat=${action.position.lat}&lon=${action.position.lng}&format=json&addressdetails=1`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(openDataFormResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case AUTO_COMPLETE:
      store.dispatch(updateMapformField('searchInput', action.value));
      if (action.value !== '') {
        axios.get(`https://api-adresse.data.gouv.fr/search/?q=${store.getState().map.searchInput}&limit=4&autocomplete=1`)
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
    default:
      return next(action);
  }
};

export default extApiMiddleware;
