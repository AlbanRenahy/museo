/**
 * Action Types
 */
export const UPDATE_MAPFORM_FIELD = 'UPDATE_MAPFORM_FIELD';
export const OPEN_DATA_FORM = 'OPEN_DATA_FORM';
export const OPEN_DISPLAY_MONUMENT = 'OPEN_DISPLAY_MONUMENT';
export const OPEN_DATA_FORM_RESPONSE = 'OPEN_DATA_FORM_RESPONSE';
export const SUBMIT_MONUMENT = 'SUBMIT_MONUMENT';
export const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS';
export const AUTO_COMPLETE = 'AUTO_COMPLETE';
export const AUTO_COMPLETE_RESULTS = 'AUTO_COMPLETE_RESULTS';
export const OPEN_AUTO_COMPLETE = 'OPEN_AUTO_COMPLETE';
export const FIND_ADDRESS = 'FIND_ADDRESS';
export const CENTER_BY_ADDRESS = 'CENTER_BY_ADDRESS';
export const FIND_ADDRESS_SEARCH = 'FIND_ADDRESS_SEARCH';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const SET_THEMATICS = 'SET_THEMATICS';
export const GET_THEMATICS = 'GET_THEMATICS';
export const SET_REGIONS = 'SET_REGIONS';
export const GET_REGIONS = 'GET_REGIONS';
export const SET_PERIODS = 'SET_PERIODS';
export const GET_PERIODS = 'GET_PERIODS';
export const SET_TARGETS = 'SET_TARGETS';
export const GET_TARGETS = 'GET_TARGETS';
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
export const toggleMenu = () => ({
  type: TOGGLE_MENU,
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
