import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers/reducer';
import userMiddleware from 'src/middlewares/userMiddleware';
import extApiMiddleware from 'src/middlewares/extApiMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    extApiMiddleware,
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
