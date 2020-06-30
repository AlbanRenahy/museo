import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate } from 'redux-phoenix';

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

const initialStore = createStore(
  // reducer
  reducer,
  compose(
    autoRehydrate,
    // enhancer
    enhancers,
  ),
);

export default initialStore;
