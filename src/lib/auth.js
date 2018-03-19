import axios from 'axios';

// export const login = (username, password) => axios.post('http://localhost:8080/oauth/token', {
//   username, password
// });

export const login = (username, password) => axios.get('http://localhost:8080/api/taxonomy/category?page=1', {
  username, password
});