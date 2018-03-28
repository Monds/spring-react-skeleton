import { createAction, handleActions } from 'redux-actions';

import axios from 'axios';

const loginAPI = (username, password) => {
  
  const param = {
    username,
    password,
    'client_id': 'admin',
    client_secret: 'foo',
    grant_type: 'password'
  };

  const formData = new FormData();
  for (const key in param) {
    formData.append(key, param[key]);
  }
  
  return axios.post('http://localhost:8080/oauth/token', formData);
};

const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

// export const login = createAction(LOGIN, AuthAPI.login);
export const login = (username, password) => dispatch => {
  return loginAPI(username, password).then(
    (response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response
      })
    }
  ).catch(error => {
    console.error(error);
    dispatch({
      type: LOGIN_FAILURE,
      payload: error
    });
  });
}

const initialState = {
  status: 'LOGOUT'
};

export default handleActions({
  [LOGIN_SUCCESS]: (state, action) => {
    console.log(action.payload.data);

    return {
      ...state,
      data: action.payload.data
    };
  },
}, initialState);