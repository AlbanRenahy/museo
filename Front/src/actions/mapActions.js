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
export const autoComplete = value => ({
  type: AUTO_COMPLETE,
  value,
});

export const autoCompleteResults = address => ({
  type: AUTO_COMPLETE_RESULTS,
  address,
});

export const openAutocomplete = () => ({
  type: OPEN_AUTO_COMPLETE,
});
