import { UPDATE_FORM_FIELD, OPEN_DATA_FORM, CLOSE_DATA_FORM, CONNECT_USER, SEND_MESSAGE, SIGNIN } from '../actions/LoginActions';


const initialState = {
  loginInput: '',
  passwordInput: '',
  passConfirmInput: '', // string
  usernameInput: '', // string
  emailInput: '',
  messageInput: '',
  userId: '', // id
  userEmail: '',
  userFirstname: null,
  userLastname: null,
  userPicture: null,
  userPseudo: '',
  isDataFormOpen: false, // bool qui indique si le formulaire de renseignement de données est ouvert ou non
  clickedAdress: '', // String contenant l'adresse d'où a cliqué l'utilisateur
};

const reducerModele = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        [action.fieldName]: action.input,
      };
    case OPEN_DATA_FORM:
      return {
        ...state,
        isDataFormOpen: true,
      };
    case CLOSE_DATA_FORM:
      return {
        ...state,
        isDataFormOpen: false,
      };
    case CONNECT_USER:
      return state;
    case SEND_MESSAGE:
      return state;
    case SIGNIN:
      return state;
    default:
      return state;
  }
};

export default reducerModele;
