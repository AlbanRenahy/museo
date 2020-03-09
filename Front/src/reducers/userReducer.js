import {
  UPDATE_USERFORM_FIELD,
  CONNECT_USER,
  SIGNIN,
  STORE_TOKEN,
  SEND_MESSAGE,
  OPEN_CONFIRM_DELETE_USER,
  CLOSE_CONFIRM_DELETE_USER,
} from '../actions/userActions';

const initialState = {
  // ******* LOGIN FIELDS / SIGNIN FORM******/
  password: '', // correspond au password dans login et signin
  passConfirm: '', // correspond à la confirmation de mot de passe dans signin
  username: '', // correspond au pseudo dans signin
  email: '', // correspond aux input pour l'email
  isConnected: false,
  userFirstname: null,
  userLastname: null,
  message: '', // correspond au message dans contact
  displayConfirmDeleteUser: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USERFORM_FIELD:
      return {
        ...state,
        [action.fieldName]: action.input,
      };
    case CONNECT_USER:
      return state;
    case STORE_TOKEN:
      return {
        ...state,
        token: action.token,
        refreshToken: action.refreshToken,
        isConnected: true,
      };
    case SIGNIN:
      return state;
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
