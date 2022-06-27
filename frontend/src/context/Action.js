import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
} from "./ActionType";

export const LoginStart = (userCredential) => ({
  type: LOGIN_START,
});

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailuere = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const updateStart = (userCredential) => ({
  type: UPDATE_START,
});

export const updateSuccess = (user) => {
  return {
    type: UPDATE_SUCCESS,
    payload: user,
  };
};

export const updateFailuere = () => {
  return {
    type: UPDATE_FAILURE,
  };
};
