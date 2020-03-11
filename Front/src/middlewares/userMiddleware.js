import axios from 'axios';

import { CONNECT_USER, SIGNIN, SEND_MESSAGE, storeToken, connectingError, signinErrors, updateUserformField } from 'src/actions/userActions';

const museoApi = 'http://54.91.98.36/projet-museo/public/api';

const userMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case CONNECT_USER:
      // console.log("on va faire l'appel Axios");
      axios
        .post('http://54.91.98.36/projet-museo/public/authentication_token', {
          username: store.getState().user.username,
          password: store.getState().user.password,
        })
        .then((response) => {
          const { token, refresh_token: refreshToken } = response.data;
          store.dispatch(storeToken(token, refreshToken));
          store.dispatch(updateUserformField('isConnected', true));
          store.dispatch(updateUserformField('loginMessage', 'Vous êtes connecté(e)'));
          store.dispatch(updateUserformField('loginStatus', 'connected'));
        })
        .catch((error) => {
          // console.log('erreur :', error.response.data.code);
          const message = (error.response.data.code === 401 ? 'Identifiant ou mot de passe invalide' : 'Une erreur est survenue, veuillez essayer à nouveau');
          store.dispatch(connectingError(message));
        });
      next(action);
      break;
    case SEND_MESSAGE:
      axios.get(`${museoApi}/users/`, {
      })
        .then((response) => {
          // console.log('message envoyé : ', response);
        })
        .catch((error) => {
          // console.log('erreur :', error.response);
        });
      next(action);
      break;
    case SIGNIN:
      next(action);
      axios
        .post(`${museoApi}/users`, {
          email: store.getState().user.email,
          password: store.getState().user.password,
          username: store.getState().user.username,
          createdAt: new Date(),
          isActive: true,
        })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(signinErrors(response.data));
        })
        .catch((error) => {
          // console.log(error.message);
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default userMiddleware;
