import axios from 'axios';

import { CONNECT_USER } from 'src/actions/LoginActions';

const userMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case CONNECT_USER:
      console.log('on va faire l\'appel Axios');
      axios.post('http://museo/Login', {
        login: 'toto.tata@gmail.com',
        password: '1234',
      })
        .then((response) => {
          console.log(response.data);
        })
        .then((error) => {
          console.warn(error);
        });
      next(action);
      break;
    default:
    // on passe l'action à son voisin (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
