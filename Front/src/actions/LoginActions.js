/**
 * Action Types
 */
export const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const CHANGE_SIGNIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const CHANGE_FIRSTNAME_INPUT = 'CHANGE_LOGIN_INPUT';


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
