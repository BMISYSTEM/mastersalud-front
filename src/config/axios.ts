import axios from 'axios'


export const clienteAxios = axios.create({
    baseURL: 'https://api.mastersalud.co',
    timeout: 10000000,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data'
    }
  });

