import axios from 'axios';

import {
  SUBMIT_MONUMENT,
  GET_THEMATICS,
  setThematics,
  GET_REGIONS,
  setRegions,
  GET_PERIODS,
  setPeriods,
  GET_TARGETS,
  setTargets,
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
        name: store.getState().map.name,
        picture: store.getState().map.fileInput ? store.getState().map.fileInput : null,
        categories: store.getState().map.thematic ? store.getState().map.thematic : null,
        regions: store.getState().map.region ? store.getState().map.region : null,
        periods: store.getState().map.period ? store.getState().map.period : null,
        targets: store.getState().map.target ? store.getState().map.target : null,
        description: store.getState().map.description ? store.getState().map.description : null,
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
    case GET_THEMATICS:
      axios.get(`${museoApi}/categories`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(setThematics(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_REGIONS:
      axios.get(`${museoApi}/regions`)
        .then((response) => {
          store.dispatch(setRegions(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_PERIODS:
      axios.get(`${museoApi}/periods`)
        .then((response) => {
          store.dispatch(setPeriods(response.data));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_TARGETS:
      axios.get(`${museoApi}/targets`)
        .then((response) => {
          store.dispatch(setTargets(response.data));
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
