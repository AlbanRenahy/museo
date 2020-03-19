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
  getMonuments,
  GET_MONUMENTS,
  setMonuments,
  SUBMIT_PICTURE,
  GET_MONUMENTS_LIST_DATA,
  setMonumentsListData,
  GET_PICTURES,
  setPictures,
} from 'src/actions/mapActions';

const museoApi = 'http://54.91.98.36/api';

const mapMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    // case SUBMIT_STAR:
    //   submitStarFormData.append('picture', store.getState().star.picture);
    //   submitStarFormData.append('json', submitStarData);
    //   console.log(submitStarFormData);
    //   axios({
    //     method: 'post',
    //     url: 'http://3.82.172.77/celestial-bodies',
    //     headers: {
    //       Authorization: `Bearer ${store.getState().user.token.token}`,
    //       'Content-Type': 'multipart/form-data',
    //     },
    //     data: submitStarFormData,
    //   })
    //     .then((response) => {
    //  <form enctype="multipart/form-data" method="post" name="fileinfo"></form>
    case SUBMIT_MONUMENT:
      axios.post(`${museoApi}/monuments`, {
        latitude: store.getState().map.clickedLat,
        longitude: store.getState().map.clickedLng,
        address: store.getState().map.address ? store.getState().map.address : null,
        name: store.getState().map.name ? store.getState().map.name : null,
        description: store.getState().map.description ? store.getState().map.description : null,
        available: true,
        createdAt: new Date(),
        // imageFile: {"path", store.getState().map.fileInput ? store.getState().map.fileInput : null},
        // imageName: store.getState().map.fileText ? store.getState().map.fileText : null,
        // imageSize: store.getState().map.fileSize ? store.getState().map.fileSize : null,
        // category: store.getState().map.thematic ? store.getState().map.thematic : null,
        // region: store.getState().map.region ? store.getState().map.region : null,
        // period: store.getState().map.period ? store.getState().map.period : null,
        // target: store.getState().map.target ? store.getState().map.target : null,
      })
        .then((response) => {

          // console.log(response);


          // store.dispatch(createMarker(store.getState().clickedLat, store.getState().clickedLng, response.data));
          store.dispatch(getMonuments());
          store.dispatch(resetFormMonument());
        })
        .catch((error) => {
          console.log(error.message);
        });
      next(action);
      break;
    // case SUBMIT_PICTURE:
    //   fd.append('file', store.getState().map.fileInput, store.getState().map.fileText, store.getState().map.fileSize);
    //   axios.post('http://54.91.98.36/projet-museo/public/assets/img/upload/monuments', fd)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log('FAILURE!!');
    //     });
    //   next(action);
    //   break;
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
    case GET_MONUMENTS:
      next(action);
      axios.get(`${museoApi}/monuments`)
        .then((response) => {
          console.log(response.data['hydra:member']);
          store.dispatch(setMonuments(response.data['hydra:member']));
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    case GET_MONUMENTS_LIST_DATA:
      next(action);
      const queries = action.list.map((item) => axios.get(`${museoApi}/monuments/${item.id}`));
      axios.all(queries)
        .then((results) => {
          console.log(results);
          const list = results.map((item) => item.data);
          console.log('Les monuments: ', list);
          store.dispatch(setMonumentsListData(list));
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
