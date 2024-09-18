import axios from 'axios'


export const clienteAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 10000000,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data'
    }
  });

