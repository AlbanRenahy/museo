import {
  UPDATE_MAPFORM_FIELD,
  OPEN_DATA_FORM,
  SUBMIT_MONUMENT,
  CLOSE_ALL_MODALS,
  OPEN_DATA_FORM_RESPONSE,
  OPEN_DISPLAY_MONUMENT,
  AUTO_COMPLETE_RESULTS,
  OPEN_AUTO_COMPLETE,
} from '../actions/mapActions';

const initialState = {
  // ******* MANAGEMENT OF MODAL FORM ******/
  isDataFormOpen: false, // bool qui indique si le formulaire de renseignement de données est ouvert
  isDisplayMonumentOpen: false, // bool qui toggle l'ouverture de displayMonument
  clickedAddress: '', // String contenant l'adresse d'où a cliqué l'utilisateur
  name: '', // nom d'un monument dans le form
  address: '', // adresse d'un monument dans le form
  description: '', // description d'un monument dans le form

  // ************MANAGEMENT OF THE MENU********/
  searchInput: '', // string

  clickedLat: '', // gère la lattitude
  clickedLng: '', // gère la longitude

  token: '', // va contenir le token de session
  refreshToken: '', // va rafraichir le token pour se déconnecter de la session
  isConnected: false, // par défaut, connection sur false

  // Autocomplete results
  autoCompleteResults: [],
  isAutocompleteOpen: false,
};

const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_MAPFORM_FIELD:
      return {
        ...state,
        [action.fieldName]: action.input,
      };
    case OPEN_DATA_FORM:
      return {
        ...state,
        isDataFormOpen: true,
      };
    case CLOSE_ALL_MODALS:
      return {
        ...state,
        isDataFormOpen: false,
        isDisplayMonumentOpen: false,
        isAutocompleteOpen: false,
        // Les futurs modals à fermer
      };
    case OPEN_DISPLAY_MONUMENT:
      return {
        ...state,
        isDisplayMonumentOpen: true,
      };
    case OPEN_DATA_FORM_RESPONSE:
      // eslint-disable-next-line camelcase
      const { display_name } = action.data;
      return {
        ...state,
        address: display_name,
      };
    case AUTO_COMPLETE_RESULTS:
      return {
        ...state,
        autoCompleteResults: action.address,
      };
    case OPEN_AUTO_COMPLETE:
      return {
        ...state,
        isAutocompleteOpen: true,
      };
    case SUBMIT_MONUMENT:
      return state;
    default:
      return state;
  }
};

export default mapReducer;
