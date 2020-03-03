/**
 * Action Types
 */
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const CONNECT_USER = 'CONNECT_USER';


/**
 * Action Creators
 */

export const updateFormField = (fieldName, input) => ({
  type: UPDATE_FORM_FIELD,
  fieldName,
  input,
});

export const connectUser = () => ({
  type: CONNECT_USER,
});
