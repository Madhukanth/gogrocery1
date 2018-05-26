import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NAME_CHANGED,
  ADDRESS_CHANGED,
  PHONENUMBER_CHANGED,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  address: '',
  name: '',
  phonenumber: '',
  loggedin: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case ADDRESS_CHANGED:
      return { ...state, address: action.payload };
    case PHONENUMBER_CHANGED:
      return { ...state, phonenumber: action.payload };
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        address: '',
        name: '',
        phonenumber: '',
        loggedin: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        address: '',
        name: '',
        phonenumber: '',
        loggedin: true,
      };
    default:
      return state;
  }
};
