<<<<<<< HEAD
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./ActionType";

export const Reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case LOGOUT:
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    default:
      return state;
  }
};
=======
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./ActionType";

export const Reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case LOGOUT:
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    default:
      return state;
  }
};
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
