import axios from 'axios';

export function getOntologyList(page) {
    return axios.get(`http://localhost:8080/api/taxonomy/category?page=${page}&size=10`);
}