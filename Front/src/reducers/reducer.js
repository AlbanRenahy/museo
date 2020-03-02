import { CHANGE_LOGIN_INPUT, CHANGE_PASSWORD_INPUT } from '../actions/LoginActions';


const initialState = {
  loginInput: '',
  passwordInput: '',
  passwordConfirmInput: '', // string
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
    default:
      return state;
  }
};

export default reducerModele;
