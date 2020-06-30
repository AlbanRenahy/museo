/**
 * Action Types
 */
export const UPDATE_MAPFORM_FIELD = 'UPDATE_MAPFORM_FIELD';
export const OPEN_DATA_FORM = 'OPEN_DATA_FORM';
export const OPEN_DISPLAY_MONUMENT = 'OPEN_DISPLAY_MONUMENT';
export const OPEN_DATA_FORM_RESPONSE = 'OPEN_DATA_FORM_RESPONSE';
export const OPEN_DATA_FORM_BUTTON = 'OPEN_DATA_FORM_BUTTON';
export const SUBMIT_MONUMENT = 'SUBMIT_MONUMENT';
export const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS';
export const AUTO_COMPLETE = 'AUTO_COMPLETE';
export const AUTO_COMPLETE_RESULTS = 'AUTO_COMPLETE_RESULTS';
export const OPEN_AUTO_COMPLETE = 'OPEN_AUTO_COMPLETE';
export const FIND_ADDRESS = 'FIND_ADDRESS';
export const CENTER_BY_ADDRESS = 'CENTER_BY_ADDRESS';
export const FIND_ADDRESS_SEARCH = 'FIND_ADDRESS_SEARCH';
export const SET_THEMATICS = 'SET_THEMATICS';
export const GET_THEMATICS = 'GET_THEMATICS';
export const SET_REGIONS = 'SET_REGIONS';
export const GET_REGIONS = 'GET_REGIONS';
export const SET_PERIODS = 'SET_PERIODS';
export const GET_PERIODS = 'GET_PERIODS';
export const SET_TARGETS = 'SET_TARGETS';
export const GET_TARGETS = 'GET_TARGETS';
export const CREATE_MARKER = 'CREATE_MARKER';
export const RESET_FORM_MONUMENT = 'RESET_FORM_MONUMENT';
export const GET_MONUMENTS = 'GET_MONUMENTS';
export const SET_MONUMENTS = 'SET_MONUMENTS';
export const SET_MONUMENT_DATAS = 'SET_MONUMENT_DATA';
export const CLOSE_MENU = 'CLOSE_MENU';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const GET_MONUMENTS_LIST_DATA = 'GET_MONUMENTS_LIST_DATA';
export const SET_MONUMENTS_LIST_DATA = 'SET_MONUMENTS_LIST_DATA';
export const SUBMIT_PICTURE = 'SUBMIT_PICTURE';
export const GET_PICTURES = 'GET_PICTURES';
export const SET_PICTURES = 'SET_PICTURES';
/**
 * Action Creators
 */
export const updateMapformField = (fieldName, input) => ({
  type: UPDATE_MAPFORM_FIELD,
  fieldName,
  input,
});

export const openDataForm = (position) => ({
  type: OPEN_DATA_FORM,
  position,
});
export const openDisplayMonument = () => ({
  type: OPEN_DISPLAY_MONUMENT,
});
export const openDataFormResponse = (data) => ({
  type: OPEN_DATA_FORM_RESPONSE,
  data,
});
export const openDataFormButton = () => ({
  type: OPEN_DATA_FORM_BUTTON,
});
export const submitMonument = () => ({
  type: SUBMIT_MONUMENT,
});
export const closeAllModals = () => ({
  type: CLOSE_ALL_MODALS,
});
export const autoComplete = (value) => ({
  type: AUTO_COMPLETE,
  value,
});

export const autoCompleteResults = (address) => ({
  type: AUTO_COMPLETE_RESULTS,
  address,
});

export const openAutocomplete = () => ({
  type: OPEN_AUTO_COMPLETE,
});
export const findAddress = () => ({
  type: FIND_ADDRESS,
});
export const centerByAddress = (position) => ({
  type: CENTER_BY_ADDRESS,
  position,
});
export const findAddressSearch = () => ({
  type: FIND_ADDRESS_SEARCH,
});
export const setThematics = (thematics) => ({
  type: SET_THEMATICS,
  thematics,
});
export const getThematics = () => ({
  type: GET_THEMATICS,
});
export const setRegions = (regions) => ({
  type: SET_REGIONS,
  regions,
});
export const getRegions = () => ({
  type: GET_REGIONS,
});
export const setPeriods = (periods) => ({
  type: SET_PERIODS,
  periods,
});
export const getPeriods = () => ({
  type: GET_PERIODS,
});
export const setTargets = (targets) => ({
  type: SET_TARGETS,
  targets,
});
export const getTargets = () => ({
  type: GET_TARGETS,
});
export const getPictures = () => ({
  type: GET_PICTURES,
});
export const setPictures = (pictures) => ({
  type: SET_PICTURES,
  pictures,
});
export const createMarker = (latitude, longitude, datas) => ({
  type: CREATE_MARKER,
  latitude,
  longitude,
  datas,
});
export const resetFormMonument = () => ({
  type: RESET_FORM_MONUMENT,
});
export const getMonuments = (bounds) => ({
  type: GET_MONUMENTS,
  bounds,
});
export const setMonuments = (monuments) => ({
  type: SET_MONUMENTS,
  monuments,
});
export const setMonumentDatas = (current) => ({
  type: SET_MONUMENT_DATAS,
  current,
});
export const closeMenu = () => ({
  type: CLOSE_MENU,
});
export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});
export const toggleView = (view) => ({
  type: TOGGLE_VIEW,
  view,
});
export const getMonumentsListData = list => ({
  type: GET_MONUMENTS_LIST_DATA,
  list,
});
export const setMonumentsListData = list => ({
  type: SET_MONUMENTS_LIST_DATA,
  list,
});
export const submitPicture = list => ({
  type: SUBMIT_PICTURE,
});
