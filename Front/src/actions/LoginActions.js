/**
 * Action Types
 */
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const OPEN_DATA_FORM = 'OPEN_DATA_FORM';
export const CLOSE_DATA_FORM = 'CLOSE_DATA_FORM';
export const CONNECT_USER = 'CONNECT_USER';
export const SIGNIN = 'SIGNIN';


/**
 * Action Creators
 */

export const updateFormField = (fieldName, input) => ({
  type: UPDATE_FORM_FIELD,
  fieldName,
  input,
});

export const openDataForm = (position) => ({
  type: OPEN_DATA_FORM,
  position,
});

 export const closeDataForm = () => ({
  type: CLOSE_DATA_FORM,
});

export const connectUser = () => ({
  type: CONNECT_USER,
});

export const signin = () => ({
  type: SIGNIN,
});
