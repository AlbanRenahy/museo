/**
 * Action Types
 */
export const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const CHANGE_USERNAME_INPUT = 'CHANGE_USERNAME_INPUT';
export const CHANGE_PASSCONFIRM_INPUT = 'CHANGE_PASSCONFIRM_INPUT';
export const CONNECT_USER = 'CONNECT_USER';


/**
 * Action Creators
 */

export const changeLoginInput = (input) => ({
  type: CHANGE_LOGIN_INPUT,
  value: input,
});

export const changePasswordInput = (input) => ({
  type: CHANGE_PASSWORD_INPUT,
  value: input,
});

export const changeUsernameInput = (input) => ({
  type: CHANGE_USERNAME_INPUT,
  value: input,
});

export const changePassConfirmInput = (input) => ({
  type: CHANGE_PASSCONFIRM_INPUT,
  value: input,
});

export const connectUser = () => ({
  type: CONNECT_USER,
});
