import { combineReducers } from 'redux';

// on importe tous les reducers
import userReducer from './userReducer';
import mapReducer from './mapReducer';

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  user: userReducer,
  map: mapReducer,
});

// pour accéder au state il faudra indiquer le nom correspondant
// par exemple si ici on avait state.info, ça devient state.recipes.info

export default rootReducer;
