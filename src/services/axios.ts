import axios, { AxiosInstance } from 'axios';

import { API_BASE_URL } from '../consts';

export const client: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { Accept: 'application/json' },
});
