import axios from 'axios';


// eslint-disable-next-line consistent-return
const extApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'TESTBLABLA':
      next(action);

      break;
    default:
      return next(action);
  }
};

export default extApiMiddleware;
