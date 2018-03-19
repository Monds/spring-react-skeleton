import axios from 'axios';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE
} from './ActionTypes';


/*============================================================================
  authentication
==============================================================================*/

/* LOGIN */
export function loginRequest(username, password) {
    return (dispatch) => {
    dispatch(login());

    const client_id = 'admin';
    const client_secret = 'foo';
    const grant_type = 'password';

    return axios.post('http://localhost:8080/oauth/token', {
      username, password, client_id, client_secret, grant_type
    })
    .then((response) => {
      dispatch(loginSuccess(username));
    })
    .catch((error) => {
      dispatch(loginFailure(username));
    });
  }
}

export function login() {
  return {
      type: AUTH_LOGIN
  };
}

export function loginSuccess(username) {
  return {
      type: AUTH_LOGIN_SUCCESS,
      username
  };
}

export function loginFailure() {
  return {
      type: AUTH_LOGIN_FAILURE
  };
}

// import axios from 'axios';

// export function loginRequest(username, password) {
//   return (dispatch) => {
//     dispatch(login());

//     const client_id = 'admin';
//     const client_secret = 'foo';
//     const grant_type = 'password';

//     return axios.post('http://localhost:8080/oauth/token', {
//       username, password, client_id, client_secret, grant_type
//     })
//     .then((response) => {
//       dispatch(loginSuccess(username));
//     })
//     .catch((error) => {
//       dispatch(loginFailure(username));
//     });
//   }
// }