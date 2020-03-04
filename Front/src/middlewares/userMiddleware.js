import axios from 'axios';

import { CONNECT_USER, SIGNIN } from 'src/actions/LoginActions';

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
          console.log('on a reçu la réponse : ', response);
          // je veux indiquer au store le pseudo de l'utilisateur, pour qu'il le stocke
          // je dispatch au store l'action SAVE_NICKNAME
          store.dispatch(saveConnectedUser(response));

          // INTERDIT de modifier directement le state, si on ne passe pas par
          // dispatch, React ne sera pas au courant qu'il y a eu une modification
          // et donc pas de mise à jour de l'interface
          // store.getState().nickname = response.data;
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
          pseudo: store.getState().usernameInput,
          email: store.getState().userEmail,
          password: store.getState().passwordInput,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    default:
      return next(action);
  }
};
export default userMiddleware;
