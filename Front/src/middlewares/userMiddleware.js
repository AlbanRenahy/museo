import axios from 'axios';

import { CONNECT_USER, SEND_MESSAGE, SIGNIN } from 'src/actions/LoginActions';

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
          pseudo: store.getState().usernameInput,
          email: store.getState().loginInput,
          password: store.getState().passwordInput,
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
