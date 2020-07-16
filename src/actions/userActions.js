/**
 * Action Types
 */
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
export const UPDATE_USERFORM_FIELD = 'UPDATE_USERFORM_FIELD';
export const CONNECT_USER = 'CONNECT_USER'; // Api connection with username && password
export const CONNECTING_ERROR = 'CONNECTING_ERROR';
export const STORE_TOKEN = 'STORE_TOKEN';
export const STORE_REFRESH_TOKEN = 'STORE_REFRESH_TOKEN';
export const SEND_RECOVERY = 'SEND_RECOVERY';
export const RECOVERY_MESSAGE = 'RECOVERY_MESSAGE';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';
export const DELETE_USER = 'DELETE_USER';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CONTACT_MESSAGE = 'CONTACT_MESSAGE';
export const OPEN_CONFIRM_DELETE_USER = 'OPEN_CONFIRM_DELETE_USER';
export const CLOSE_CONFIRM_DELETE_USER = 'CLOSE_CONFIRM_DELETE_USER';
export const SIGNIN = 'SIGNIN';
export const SIGNIN_ERRORS = 'SIGNIN_ERRORS';
export const REDIRECT_TO_REGISTER = 'REDIRECT_TO_REGISTER';
export const CLEAR_SIGNIN_ERRORS = 'CLEAR_SIGNIN_ERRORS';
export const DISCONNECT_USER = 'DISCONNECT_USER';


/**
 * Action Creators
 */
export const clearMessages = () => ({
  type: CLEAR_MESSAGES,
});

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

export const updateMessages = (message) => ({
  type: UPDATE_MESSAGES,
  message,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const storeToken = (token) => ({
  type: STORE_TOKEN,
  token,
});

export const storeRefreshToken = (refreshToken) => ({
  type: STORE_REFRESH_TOKEN,
  refreshToken,
});

export const sendRecovery = () => ({
  type: SEND_RECOVERY,
});

export const recoveryMessage = (message) => ({
  type: RECOVERY_MESSAGE,
  message,
});

export const signin = () => ({
  type: SIGNIN,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const contactMessage = (message) => ({
  type: CONTACT_MESSAGE,
  message,
});

export const OpenConfirmDeleteUser = () => ({
  type: OPEN_CONFIRM_DELETE_USER,
});

export const CloseConfirmDeleteUser = () => ({
  type: CLOSE_CONFIRM_DELETE_USER,
});

export const disconnect = () => ({
  type: DISCONNECT_USER,
});

export const connectingError = (message) => ({
  type: CONNECTING_ERROR,
  message,
});

export const signinErrors = (errors) => ({
  type: SIGNIN_ERRORS,
  errors,
});

export const clearSigninErrors = () => ({
  type: CLEAR_SIGNIN_ERRORS,
});

export const redirectToRegister = () => ({
  type: REDIRECT_TO_REGISTER,
});
