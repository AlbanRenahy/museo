import {
  CHANGE_LOGIN_INPUT,
  CHANGE_PASSWORD_INPUT,
  CHANGE_LASTNAME_INPUT,
  CHANGE_FIRSTNAME_INPUT,
  CHANGE_PASSCONFIRM_INPUT,
} from '../actions/LoginActions';


const initialState = {
  loginInput: '',
  passwordInput: '',
  passConfirmInput: '', // string
  firstNameInput: '', // string
  lastNameInput: '', // string
};

const reducerModele = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_INPUT:
      return {
        ...state,
        loginInput: action.value,
      };
    case CHANGE_PASSWORD_INPUT:
      return {
        ...state,
        passwordInput: action.value,
      };
    case CHANGE_PASSCONFIRM_INPUT:
      return {
        ...state,
        passConfirmInput: action.value,
      };
    case CHANGE_FIRSTNAME_INPUT:
      return {
        ...state,
        firstNameInput: action.value,
      };
    case CHANGE_LASTNAME_INPUT:
      return {
        ...state,
        lastNameInput: action.value,
      };
    default:
      return state;
  }
};

export default reducerModele;
