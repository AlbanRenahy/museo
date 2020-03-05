
import axios from 'axios';

import {
  OPEN_DATA_FORM,
} from 'src/actions/LoginActions';

// eslint-disable-next-line consistent-return
const extApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case OPEN_DATA_FORM:
      next(action);
      axios.get(`http://nominatim.openstreetmap.org/reverse?lat=${action.position.lat}&lon=${action.position.lng}&format=json&addressdetails=1`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      return next(action);
  }
};

export default extApiMiddleware;
