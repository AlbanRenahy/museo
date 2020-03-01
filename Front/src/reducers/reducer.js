import { TOGGLE_WELCOME_VIEW } from '../actions/welcomeAction';


const initialState = {
  welcomeView: 'Login',
};

const reducerModele = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_WELCOME_VIEW:
      return {
        ...state,
        welcomeView: action.welcomeView,
      };
    default:
      return state;
  }
};

export default reducerModele;
