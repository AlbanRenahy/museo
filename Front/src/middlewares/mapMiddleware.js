import axios from 'axios';

import {
  SUBMIT_MONUMENT,
} from 'src/actions/mapActions';

const museoApi = 'http://54.91.98.36/back/projet-museo/public/api';

const mapMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case SUBMIT_MONUMENT:
      next(action);
      axios.post(`${museoApi}/createMonument`, {
        latitude: store.getState().clickedLat,
        longitude: store.getState().clickedLng,
        address: store.getState().address,
        name: store.getState().name,
        description: store.getState().description,
        delivered: true,
      }, {
        headers: {
          Authorization: `${store.getState().token}`,
        },
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
