import axios from 'axios';
import env from './../config/env';

const api = axios.create({
    baseURL: env.backendBaseUrl,
})

export default api;