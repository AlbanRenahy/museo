import axios from 'axios';

import { CONNECT_USER, SEND_MESSAGE, SIGNIN, storeToken } from 'src/actions/LoginActions';

const userMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case CONNECT_USER:
      console.log("on va faire l'appel Axios");
      axios
        .post('http://54.91.98.36/projet-museo/public/api/users/', {
          // loginInput: store.getState().loginInput,
          // passwordInput: store.getState().passwordInput,
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
      axios.get('http://54.91.98.36/projet-museo/public/api/users/', {
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
        .post('http://54.91.98.36/projet-museo/public/api/users/add', {
          email: store.getState().userEmail,
          password: store.getState().passwordInput,
          pseudo: store.getState().usernameInput,
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
