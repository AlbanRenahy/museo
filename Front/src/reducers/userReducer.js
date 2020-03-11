import {
  UPDATE_USERFORM_FIELD,
  CONNECT_USER,
  SIGNIN,
  STORE_TOKEN,
  STORE_REFRESH_TOKEN,
  SEND_MESSAGE,
  OPEN_CONFIRM_DELETE_USER,
  CLOSE_CONFIRM_DELETE_USER,
  DISCONNECT_USER,
  CONNECTING_ERROR,
  SIGNIN_ERRORS,
  REDIRECT_TO_LOGIN,

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
  displayConfirmDeleteUser: false,
  token: '', // string,
  refreshToken: '',
  isConnected: false,
  loginMessage: '',
  loginStatus: 'not-connected',

  // ************ERRORS*******/
  signinErrors: [],
  redirectToLogin: false,
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
        loginMessage: 'Connexion en cours...',
        loginStatus: 'connecting',
      };
    case STORE_TOKEN:
      return {
        ...state,
        token: action.token,
        isConnected: true,
        loginMessage: 'Vous êtes connecté(e)',
      };
    case STORE_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.refreshToken,
        isConnected: true,
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
    case REDIRECT_TO_LOGIN:
      return {
        ...state,
        redirectToLogin: !state.redirectToLogin,
      };
    case SEND_MESSAGE:
      return state;
    case OPEN_CONFIRM_DELETE_USER:
      return {
        ...state,
        displayConfirmDeleteUser: true,
      };
    case CLOSE_CONFIRM_DELETE_USER:
      return {
        ...state,
        displayConfirmDeleteUser: false,
      };
    default:
      return state;
  }
};

export default userReducer;
