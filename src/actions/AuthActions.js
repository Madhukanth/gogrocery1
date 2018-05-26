import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NAME_CHANGED,
  ADDRESS_CHANGED,
  PHONENUMBER_CHANGED,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const nameChanged = text => ({
  type: NAME_CHANGED,
  payload: text,
});

export const addressChanged = text => ({
  type: ADDRESS_CHANGED,
  payload: text,
});

export const phonenumberChanged = text => ({
  type: PHONENUMBER_CHANGED,
  payload: text,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
});
