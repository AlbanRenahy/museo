import axios from 'axios';

import { CONNECT_USER, SIGNIN, SEND_MESSAGE, storeToken } from 'src/actions/userActions';

const museoApi = 'http://54.91.98.36/back/projet-museo/public/api';

const userMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case CONNECT_USER:
      console.log("on va faire l'appel Axios");
      axios
        .post(`${museoApi}/users/`, {
          email: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          console.log(response.data);
          const { token, refresh_token: refreshToken } = response.data;
          store.dispatch(storeToken(token, refreshToken));
        })
        .catch((error) => {
          console.log('erreur :', error.response);
        });
      next(action);
      break;
    case SEND_MESSAGE:
      axios.get(`${museoApi}/users/`, {
      })
        .then((response) => {
          console.log('message envoyé : ', response);
        })
        .catch((error) => {
          console.log('erreur :', error.response);
        });
      next(action);
      break;
    case SIGNIN:
      next(action);
      axios
        .post(`${museoApi}/users/add`, {
          email: store.getState().user.email,
          password: store.getState().user.password,
          pseudo: store.getState().user.username,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default userMiddleware;
