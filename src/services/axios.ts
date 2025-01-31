import axios, { AxiosInstance } from 'axios';

import { API_BASE_URL } from '../consts';

// generic axios instance to avoid adding generic props every time
export const client: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json',
  },
});
