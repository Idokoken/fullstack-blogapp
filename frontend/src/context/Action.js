<<<<<<< HEAD
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
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
=======
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
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
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
