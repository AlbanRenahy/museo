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
  SET_THEMATICS,
  SET_REGIONS,
  SET_PERIODS,
  SET_TARGETS,
  CREATE_MARKER,
  RESET_FORM_MONUMENT,
  SET_MONUMENTS,
  SET_MONUMENT_DATAS,
  CLOSE_MENU,
  TOGGLE_MENU,
  GET_MONUMENTS,
  TOGGLE_VIEW,
  GET_MONUMENTS_LIST_DATA,
  SET_MONUMENTS_LIST_DATA,
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


  // ************MANAGEMENT OF THE MENU********/
  searchInput: '', // string
  view: 'map', // Toggle the view (Carte = 'map' // Monuments = 'list')
  loading: false,

  // *********MANAGEMENT OF THE GEOLOCALIZATION*********/
  center: [46.7248003746672, 2.9003906250000004], // Center of the map
  zoom: 6, // level of zoom
  userLocalized: false,
  actualBounds: {
    northEast: '',
    southWest: '',
  },


  clickedLat: 0, // gère la lattitude
  clickedLng: 0, // gère la longitude
  fileInput: '', // Fichier converti prêt à être envoyé
  fileText: '', // Nom du fichier

  // Datas component did mount
  monuments: [],
  thematics: [],
  periods: [],
  regions: [],
  targets: [],
  fetchingMonuments: false,

  // ************FIELDS OF THE SELECTED CARD DATA*******
  monumentDisplayed: {
    id: 0,
    name: '',
    address: '',
    description: '',
    available: true,
    images: [
      {
        id: 0,
        path: '',
      },
    ],
    latitude: 0,
    longitude: 0,
    period: '',
    thematic: '',
    region: '',
    target: '',
    creatorUsername: '',
  },

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
    case SET_MONUMENT_DATAS:
      return {
        ...state,
        monumentDisplayed:
          {
            id: action.current.idCard,
            name: action.current.nameCard,
            address: action.current.addressCard,
            description: action.current.descriptionCard,
          },
      };
    case SUBMIT_MONUMENT:
      return state;
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case CLOSE_MENU:
      return {
        ...state,
        isMenuOpen: false,
      };
    case TOGGLE_VIEW:
      return {
        ...state,
        view: action.view,
      };
    case GET_MONUMENTS:
      return {
        ...state,
        fetchingMonuments: false,
      };
    case GET_MONUMENTS_LIST_DATA:
      return {
        ...state,
      };
    case SET_MONUMENTS_LIST_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default mapReducer;
