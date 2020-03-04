/**
 * Action Types
 */
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const OPEN_DATA_FORM = 'OPEN_DATA_FORM';
export const CLOSE_DATA_FORM = 'CLOSE_DATA_FORM';
export const CONNECT_USER = 'CONNECT_USER'; // Api connection with username && password
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SIGNIN = 'SIGNIN';
export const STORE_TOKEN = 'STORE_TOKEN';

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

export const storeToken = (token, refreshToken) => ({
  type: STORE_TOKEN,
  token,
  refreshToken,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const signin = () => ({
  type: SIGNIN,
});
