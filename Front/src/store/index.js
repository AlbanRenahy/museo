import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import userMiddleware from 'src/middlewares/userMiddleware';
import mapMiddleware from 'src/middlewares/mapMiddleware';
import extApiMiddleware from 'src/middlewares/extApiMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    extApiMiddleware,
    mapMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
