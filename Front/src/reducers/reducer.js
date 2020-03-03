import { UPDATE_FORM_FIELD, CONNECT_USER } from '../actions/LoginActions';


const initialState = {
  loginInput: '',
  passwordInput: '',
  passConfirmInput: '', // string
  usernameInput: '', // string
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
    case CONNECT_USER:
      return state;
    default:
      return state;
  }
};

export default reducerModele;
