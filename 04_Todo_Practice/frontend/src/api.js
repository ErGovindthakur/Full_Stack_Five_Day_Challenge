import axios from "axios"

const baseUrl = 'http://localhost:9090';


export const getTodos = axios.get(`${baseUrl}/api/v1/todo/getTodos`);