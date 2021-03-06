import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE
} from '../actions/types';

import AuthService from '../services/auth.service';

export const register = (email, password, passwordConfirm, firstname, lastname,stripe) => (dispatch) => {
  return AuthService.register(email, password, passwordConfirm, firstname, lastname,stripe).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject();
    }
  );
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      console.log(data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data }
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.response.data ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL
      });
       dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT
  });
};
