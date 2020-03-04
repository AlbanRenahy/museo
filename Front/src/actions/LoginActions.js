/**
 * Action Types
 */
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const CONNECT_USER = 'CONNECT_USER';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SIGNIN = 'SIGNIN';



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


export const sendMessage = () => ({
  type: SEND_MESSAGE,
 });

export const signin = () => ({
  type: SIGNIN,
});
