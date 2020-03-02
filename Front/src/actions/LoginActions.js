/**
 * Action Types
 */
export const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const CHANGE_LASTNAME_INPUT = 'CHANGE_LASTNAME_INPUT';
export const CHANGE_FIRSTNAME_INPUT = 'CHANGE_LOGIN_INPUT';
export const CHANGE_PASSCONFIRM_INPUT = 'CHANGE_LOGIN_INPUT';


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

export const changeLastNameInput = (input) => ({
  type: CHANGE_LASTNAME_INPUT,
  value: input,
});

export const changeFirstNameInput = (input) => ({
  type: CHANGE_FIRSTNAME_INPUT,
  value: input,
});

export const changePassConfirmInput = (input) => ({
  type: CHANGE_PASSCONFIRM_INPUT,
  value: input,
});

