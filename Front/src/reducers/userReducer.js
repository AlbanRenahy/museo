import {
  UPDATE_USERFORM_FIELD,
  CONNECT_USER,
  SIGNIN,
  STORE_TOKEN,
  SEND_MESSAGE,
  DISCONNECT_USER,
  CONNECTING_ERROR,
  SIGNIN_ERRORS,
} from '../actions/userActions';

const initialState = {
  // ******* LOGIN FIELDS / SIGNIN FORM******/
  password: '', // correspond au password dans login et signin
  passConfirm: '', // correspond à la confirmation de mot de passe dans signin
  username: '', // correspond au pseudo dans signin
  email: '', // correspond aux input pour l'email
  userFirstname: null,
  userLastname: null,
  message: '', // correspond au message dans contact
  token: '', // string,
  refreshToken: '',
  isConnected: false,
  loginMessage: 'Vous devez vous identifier pour modifier museo',
  loginStatus: 'not-connected',
  signinErrors: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USERFORM_FIELD:
      return {
        ...state,
        [action.fieldName]: action.input,
      };
    case CONNECT_USER:
      return {
        ...state,
        loginMessage: 'Connexion en cours',
        loginStatus: 'connecting',
      };
    case STORE_TOKEN:
      return {
        ...state,
        token: action.token,
        refreshToken: action.refreshToken,
        isConnected: true,
        loginMessage: 'Vous êtes connecté(e)',
      };
    case DISCONNECT_USER:
      return {
        ...initialState,
        loginMessage: 'Vous avez bien été déconnecté(e)',
      };
    case CONNECTING_ERROR:
      return {
        ...state,
        loginMessage: action.message,
        loginStatus: 'not-connected',
      };
    case SIGNIN:
      return state;
    case SIGNIN_ERRORS:
      return {
        ...state,
        signinErrors: action.errors,
      };
    case SEND_MESSAGE:
      return state;
    default:
      return state;
  }
};

export default userReducer;
