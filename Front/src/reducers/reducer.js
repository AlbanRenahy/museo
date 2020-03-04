import { UPDATE_FORM_FIELD, OPEN_DATA_FORM, CLOSE_DATA_FORM, CONNECT_USER, SEND_MESSAGE, SIGNIN, STORE_TOKEN, SUBMIT_MONUMENT } from '../actions/LoginActions';


const initialState = {
  loginInput: '', // correspond à l'email dans login et signin
  passwordInput: '', // correspond au password dans login et signin
  passConfirmInput: '', // correspond à la confirmation de mot de passe dans signin
  usernameInput: '', // correspond au pseudo dans signin
  emailInput: '', // correspond à l'eamil dans contact
  messageInput: '', // correspond au message dans contact
  userFirstname: null,
  userLastname: null,
  isDataFormOpen: false, // bool qui indique si le formulaire de renseignement de données est ouvert ou non
  clickedAddress: '', // String contenant l'adresse d'où a cliqué l'utilisateur
  clickedLat: '', // gère la lattitude
  clickedLng: '', // gère la longitude
  nameInput: '', // nom d'un monument dans le Form
  addressInput: '', // adresse d'un monument dans le form
  description: '', // description d'un monument dans le form
  token: '', // va contenir le token de session
  refreshToken: '', // va rafraichir le token pour se déconnecter de la session
  isConnected: false, // par défaut, connection sur false
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
    case STORE_TOKEN:
      return {
        ...state,
        token: action.token,
        refreshToken: action.refreshToken,
        isConnected: true,
      };
    case SEND_MESSAGE:
      return state;
    case SIGNIN:
      return state;
    case SUBMIT_MONUMENT:
      return state;
    default:
      return state;
  }
};

export default reducerModele;
