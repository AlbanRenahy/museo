import {
  UPDATE_FORM_FIELD,
  OPEN_DATA_FORM,
  CLOSE_DATA_FORM,
  CONNECT_USER,
  SEND_MESSAGE,
  SIGNIN,
  STORE_TOKEN,
  SUBMIT_MONUMENT,
  CLOSE_ALL_MODALS,
} from '../actions/LoginActions';


const initialState = {

  // ******* LOGIN FIELDS / SIGNIN FORM******/
  password: '', // correspond au password dans login et signin
  passConfirm: '', // correspond à la confirmation de mot de passe dans signin
  username: '', // correspond au pseudo dans signin
  email: '', // correspond aux input pour l'email
  message: '', // correspond au message dans contact
  userFirstname: null,
  userLastname: null,


  // ******* MANAGEMENT OF MODAL FORM ******/
  isDataFormOpen: false, // bool qui indique si le formulaire de renseignement de données est ouvert
  clickedAddress: '', // String contenant l'adresse d'où a cliqué l'utilisateur
  name: '', // nom d'un monument dans le form
  address: '', // adresse d'un monument dans le form
  description: '', // description d'un monument dans le form

  clickedLat: '', // gère la lattitude
  clickedLng: '', // gère la longitude

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
    case CLOSE_ALL_MODALS:
      return {
        ...state,
        isDataFormOpen: false,
        // Les futurs modals à fermer
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
