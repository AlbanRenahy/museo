import axios from 'axios';

import {
  CONNECT_USER,
  UPDATE_USER,
  SIGNIN,
  SEND_MESSAGE,
  SEND_RECOVERY,
  storeToken,
  storeRefreshToken,
  connectingError,
  signinErrors,
  contactMessage,
  recoveryMessage,
  clearSigninErrors,
  redirectToRegister,
  updateUserformField,
} from 'src/actions/userActions';

const museoApi = 'http://54.91.98.36/projet-museo/public';

const userMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case CONNECT_USER:
      // console.log("on va faire l'appel Axios");
      axios
        .post(`${museoApi}/authentication_token`, {
          username: store.getState().user.username,
          password: store.getState().user.password,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(storeToken(response.data.token));
          store.dispatch(storeRefreshToken(response.data.refreshToken));
          store.dispatch(updateUserformField('isConnected', true));
          store.dispatch(updateUserformField('loginMessage', 'Vous êtes connecté(e).'));
          store.dispatch(updateUserformField('loginStatus', 'connected'));
        })
        .catch((error) => {
          // console.log('erreur :', error.response.data.code);
          const message = (error.response.data.code === 401 ? 'Identifiant ou mot de passe invalide.' : 'Une erreur est survenue, veuillez essayer à nouveau.');
          store.dispatch(connectingError(message));
        });
      next(action);
      break;
    case UPDATE_USER:
      axios
        .patch(`${museoApi}/api/users/{id}`, {
          username: store.getState().user.username,
          password: store.getState().user.password,
        })
        .then((response) => {
          // console.log('message envoyé : ', response);
          store.dispatch(contactMessage('Modifications enregistrées.'));
        })
        .catch((error) => {
          // console.log('erreur :', error.response);
          store.dispatch(contactMessage('Une erreur est survenue, veuillez essayer à nouveau.'));
        });
      next(action);
      break;
    case SEND_MESSAGE:
      axios.post(`${museoApi}/api/users/`, {
      })
        .then((response) => {
          // console.log('message envoyé : ', response);
          store.dispatch(contactMessage('Votre message a bien été envoyé.'));
        })
        .catch((error) => {
          // console.log('erreur :', error.response);
          store.dispatch(contactMessage('Une erreur est survenue, veuillez essayer à nouveau.'));
        });
      next(action);
      break;
    case SIGNIN:
      store.dispatch(clearSigninErrors());
      if (store.getState().user.password !== store.getState().user.passConfirm) {
        store.dispatch(signinErrors('Les mots de passe ne correspondent pas.'));
      }
      if (store.getState().user.password.length < 5) {
        store.dispatch(signinErrors('Mot de passe trop court.'));
      }
      if (store.getState().user.signinErrors.length === 0) {
        axios
          .post(`${museoApi}/api/users`, {
            email: store.getState().user.email,
            password: store.getState().user.password,
            username: store.getState().user.username,
            createdAt: new Date(),
            isActive: true,
          })
          .then((response) => {
            console.log(response.data);
            store.dispatch(redirectToRegister());
          })
          .catch((error) => {
            // console.log(error.message);
            store.dispatch(signinErrors(error.message));
          });
      }
      next(action);
      break;
    case SEND_RECOVERY:
      axios.post(`${museoApi}/api/users/`, {
      })
        .then((response) => {
          // console.log('message envoyé : ', response);
          store.dispatch(recoveryMessage('L\'email a bien été envoyé.'));
        })
        .catch((error) => {
          // console.log('erreur :', error.response);
          store.dispatch(recoveryMessage('Une erreur est survenue, veuillez essayer à nouveau.'));
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default userMiddleware;
