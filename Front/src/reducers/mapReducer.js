import {
  UPDATE_MAPFORM_FIELD,
  OPEN_DATA_FORM,
  SUBMIT_MONUMENT,
  CLOSE_ALL_MODALS,
  OPEN_DATA_FORM_RESPONSE,
  OPEN_DATA_FORM_BUTTON,
  OPEN_DISPLAY_MONUMENT,
  AUTO_COMPLETE_RESULTS,
  OPEN_AUTO_COMPLETE,
  CENTER_BY_ADDRESS,
  TOGGLE_MENU,
  SET_THEMATICS,
  SET_REGIONS,
  SET_PERIODS,
  SET_TARGETS,
  CREATE_MARKER,
  RESET_FORM_MONUMENT,
  SET_MONUMENTS,
  SET_MONUMENT_DATAS,
} from '../actions/mapActions';

const initialState = {
  // ******* MANAGEMENT OF MODAL FORM ******/
  isDataFormOpen: false, // bool qui indique si le formulaire de renseignement de données est ouvert
  isMenuOpen: false,
  isDisplayMonumentOpen: false,
  clickedAddress: '', // String contenant l'adresse d'où a cliqué l'utilisateur
  name: '', // nom d'un monument dans le form
  address: '', // adresse d'un monument dans le form
  description: '', // description d'un monument dans le form
  thematic: '',
  region: '',
  target: '',
  period: '',

  // *********MANAGEMENT OF THE GEOLOCALIZATION*********/
  center: [46.7248003746672, 2.9003906250000004], // Center of the map
  zoom: 6, // level of zoom
  userLocalized: false,

  // ************MANAGEMENT OF THE MENU********/
  searchInput: '', // string

  clickedLat: '', // gère la lattitude
  clickedLng: '', // gère la longitude
  fileInput: '', // Fichier converti prêt à être envoyé
  fileText: '', // Nom du fichier

  // Datas component did mount
  monuments: [],
  thematics: [],
  periods: [],
  regions: [],
  targets: [],

  // ************FIELDS OF THE SELECTED CARD DATA*******
  currentMonumentDatas: [],
  addressCard: '',
  nameCard: '',
  descriptionCard: '',
  id: 0,
  available: true,
  images: [
    {
      id: 0,
      path: '',
    },
  ],
  latitude: 0,
  longitude: 0,
  periodCard: '',
  thematicCard: '',
  regionCard: '',
  targetCard: '',
  user: { usernameCard: '' },


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
    case CREATE_MARKER:
      return {
        ...state,
        monuments: [
          ...state.monuments,
          {
            id: action.datas.id,
            latitude: action.latitude,
            longitude: action.longitude,
          },
        ],
      };
    case SET_MONUMENTS:
      return {
        ...state,
        monuments: action.monuments,
      };
    case OPEN_DISPLAY_MONUMENT:
      return {
        ...state,
        isDisplayMonumentOpen: true,
      };
    case OPEN_DATA_FORM_RESPONSE:
      return {
        ...state,
        address: action.data.display_name,
      };
    case OPEN_DATA_FORM_BUTTON:
      return {
        ...state,
        isDataFormOpen: true,
        addressInput: '',
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
    case RESET_FORM_MONUMENT:
      return {
        ...state,
        clickedLat: 0,
        clickedLng: 0,
        fileInput: '',
        fileText: '',
        name: '',
        address: '',
        description: '',
        region: '',
        period: '',
        thematic: '',
        target: '',
        loading: false,
      };
    case CENTER_BY_ADDRESS:
      return {
        ...state,
        center: action.position,
        zoom: 14,
      };
    case SET_THEMATICS:
      return {
        ...state,
        thematics: action.thematics,
      };
    case SET_REGIONS:
      return {
        ...state,
        regions: action.regions,
      };
    case SET_PERIODS:
      return {
        ...state,
        periods: action.periods,
      };
    case SET_TARGETS:
      return {
        ...state,
        targets: action.targets,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case SET_MONUMENT_DATAS:
      return {
        ...state,
        currentMonumentDatas: action.current,
      };
    case SUBMIT_MONUMENT:
      return state;
    default:
      return state;
  }
};

export default mapReducer;
