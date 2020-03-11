import axios from 'axios';

import {
  SUBMIT_MONUMENT,
} from 'src/actions/mapActions';

const museoApi = 'http://54.91.98.36/projet-museo/public/api';

const mapMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case SUBMIT_MONUMENT:
      next(action);
      axios.post(`${museoApi}/monuments`, {
        latitude: store.getState().map.clickedLat,
        longitude: store.getState().map.clickedLng,
        address: store.getState().map.address,
        picture: store.getState().map.fileInput ? store.getState().map.fileInput : null,
        name: store.getState().map.name,
        description: store.getState().map.description,
        available: true,
        createdAt: new Date(),
      })
        .then((response) => {
          // console.log(response.data);
        })
        .catch((error) => {
          // console.log(error.message);
        });
      break;
    default:
      next(action);
  }
};
export default mapMiddleware;
