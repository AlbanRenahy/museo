import axios from 'axios';

import {
  SUBMIT_MONUMENT,
} from 'src/actions/mapActions';


const mapMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case SUBMIT_MONUMENT:
      next(action);
      axios.post('', {
        latitude: store.getState().map.clickedLat,
        longitude: store.getState().map.clickedLng,
        adresse: store.getState().map.clickedAddress,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    default:
      next(action);
  }
};
export default mapMiddleware;
