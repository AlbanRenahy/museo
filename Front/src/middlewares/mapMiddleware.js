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
  createMarker,
  resetFormMonument,
} from 'src/actions/mapActions';

const museoApi = 'http://54.91.98.36/projet-museo/public/api';

const mapMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case SUBMIT_MONUMENT:
      axios.post(`${museoApi}/monuments`, {
        latitude: store.getState().map.clickedLat,
        longitude: store.getState().map.clickedLng,
        address: store.getState().map.address ? store.getState().map.address : null,
        name: store.getState().map.name ? store.getState().map.name : null,
        // picture: store.getState().map.fileInput ? store.getState().map.fileInput : null,
        // category: store.getState().map.thematic ? store.getState().map.thematic : null,
        // region: store.getState().map.region ? store.getState().map.region : null,
        // period: store.getState().map.period ? store.getState().map.period : null,
        // target: store.getState().map.target ? store.getState().map.target : null,
        category: 'Château',
        region: 'Monaco',
        periode: 'Renaissance',
        target: 'Tout public',
        description: store.getState().map.description ? store.getState().map.description : null,
        available: true,
        createdAt: new Date(),
      })
        .then((response) => {
          store.dispatch(createMarker(store.getState().clickedLat, store.getState().clickedLng, response.data));
          store.dispatch(resetFormMonument());
        })
        .catch((error) => {
          console.log(error.message);
        });
      next(action);
      break;
    case GET_THEMATICS:
      axios.get(`${museoApi}/categories`)
        .then((response) => {
          console.log(response.data['hydra:member']);
          store.dispatch(setThematics(response.data['hydra:member']));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_REGIONS:
      axios.get(`${museoApi}/regions`)
        .then((response) => {
          // console.log(response.data['hydra:member']);
          store.dispatch(setRegions(response.data['hydra:member']));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_PERIODS:
      axios.get(`${museoApi}/periods`)
        .then((response) => {
          // console.log(response.data['hydra:member']);
          store.dispatch(setPeriods(response.data['hydra:member']));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_TARGETS:
      axios.get(`${museoApi}/targets`)
        .then((response) => {
          // console.log(response.data['hydra:member']);
          store.dispatch(setTargets(response.data['hydra:member']));
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
