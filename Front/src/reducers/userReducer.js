import {
  UPDATE_USERFORM_FIELD,
  CONNECT_USER,
  UPDATE_USER,
  DELETE_USER,
  SIGNIN,
  STORE_TOKEN,
  STORE_REFRESH_TOKEN,
  SEND_RECOVERY,
  RECOVERY_MESSAGE,
  SEND_MESSAGE,
  CONTACT_MESSAGE,
  OPEN_CONFIRM_DELETE_USER,
  CLOSE_CONFIRM_DELETE_USER,
  DISCONNECT_USER,
  CONNECTING_ERROR,
  SIGNIN_ERRORS,
  CLEAR_SIGNIN_ERRORS,
  REDIRECT_TO_REGISTER,
} from '../actions/userActions';

const initialState = {
  // ******* LOGIN FIELDS / SIGNIN FORM******/
  password: '', // correspond au password dans login et signin
  passConfirm: '', // correspond à la confirmation de mot de passe dans signin
  userId: null,
  username: '', // correspond au pseudo dans signin
  email: '', // correspond aux input pour l'email
  userFirstname: null,
  userLastname: null,
  recoveryMessage: '', // display a message with error or success on submit recovery form
  message: '', // correspond au message dans contact
  contactMessage: '', // display a message with error or success on submit contact form
  displayConfirmDeleteUser: false,
  token: '', // string,
  refreshToken: '',
  isConnected: false,
  loginMessage: '',
  loginStatus: 'not-connected',
  updateMessage: '',

  // ************ERRORS*******/
  signinErrors: [],
  signinIsValid: false,
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
    case UPDATE_USER:
      return {
        ...state,
        updateMessage: action.message,
      };
    case DELETE_USER:
      return {
        ...initialState,
        updateMessage: action.message,
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
    case SEND_RECOVERY:
      return state;
    case RECOVERY_MESSAGE:
      return {
        ...state,
        recoveryMessage: action.message,
      };
    case DISCONNECT_USER:
      return {
        ...initialState,
        isConnected: false,
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
        signinErrors: [...state.signinErrors, action.errors],
      };
    case CLEAR_SIGNIN_ERRORS:
      return {
        ...state,
        signinErrors: [],
      };
    case REDIRECT_TO_REGISTER:
      return {
        ...state,
        signinIsValid: true,
      };
    case SEND_MESSAGE:
      return state;
    case CONTACT_MESSAGE:
      return {
        ...state,
        contactMessage: action.message,
      };
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
