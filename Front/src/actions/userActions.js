/**
 * Action Types
 */
export const UPDATE_USERFORM_FIELD = 'UPDATE_USERFORM_FIELD';
export const CONNECT_USER = 'CONNECT_USER'; // Api connection with username && password
export const SIGNIN = 'SIGNIN';
export const STORE_TOKEN = 'STORE_TOKEN';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const OPEN_CONFIRM_DELETE_USER = 'OPEN_CONFIRM_DELETE_USER';
export const CLOSE_CONFIRM_DELETE_USER = 'CLOSE_CONFIRM_DELETE_USER';


/**
 * Action Creators
 */
export const updateUserformField = (fieldName, input) => ({
  type: UPDATE_USERFORM_FIELD,
  fieldName,
  input,
});

export const connectUser = () => ({
  type: CONNECT_USER,
});

export const updateUser = () => ({
  type: UPDATE_USER,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const storeToken = (token, refreshToken) => ({
  type: STORE_TOKEN,
  token,
  refreshToken,
});

export const signin = () => ({
  type: SIGNIN,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const OpenConfirmDeleteUser = () => ({
  type: OPEN_CONFIRM_DELETE_USER,
});

export const CloseConfirmDeleteUser = () => ({
  type: CLOSE_CONFIRM_DELETE_USER,
});
