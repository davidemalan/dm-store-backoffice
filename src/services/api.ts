import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { STORE_ID } from '../consts';
import { NewProduct, ProductData, ProductList, Store, StoreCategoryStats } from '../types/api';

import { client } from './axios';

/* store */
export const getAllStores = (httpConfig = {}): Promise<AxiosResponse<Store[]>> => {
  const url = `/api/stores`;

  return client.get(url, httpConfig);
};

export const getStoreById = (httpConfig: AxiosRequestConfig<any> = {}): Promise<AxiosResponse<Store>> => {
  const url = `/api/stores/${STORE_ID}`;

  return client.get(url, httpConfig);
};

/* products */
export const getProducts = (httpConfig: AxiosRequestConfig<any> = {}): Promise<AxiosResponse<ProductList>> => {
  const url = `/api/stores/${STORE_ID}/products?page=1&elements=50`;

  return client.get(url, httpConfig);
};

export const getProductById = (
  idProduct: string,
  httpConfig: AxiosRequestConfig<any> = {}
): Promise<AxiosResponse<ProductData>> => {
  const url = `/api/stores/${STORE_ID}/products/${idProduct}`;

  return client.get(url, httpConfig);
};

export const addProduct = (
  productData: NewProduct,
  httpConfig: AxiosRequestConfig<any> = {}
): Promise<AxiosResponse<string>> => {
  const url = `/api/stores/${STORE_ID}/products`;

  // store property needed for the request but api accepts anything as is using only the url STORE_ID param
  const body = {
    ...productData,
    store: {
      idStore: null,
      name: null,
      category: null,
      employees: null,
    },
  };

  return client.post(url, body, httpConfig);
};

export const deleteProduct = (idProduct: string, httpConfig: AxiosRequestConfig<any> = {}): Promise<AxiosResponse> => {
  const url = `/api/stores/${STORE_ID}/products/${idProduct}`;

  return client.delete(url, httpConfig);
};

/* stats */
export const getStoreStats = (
  httpConfig: AxiosRequestConfig<any> = {}
): Promise<AxiosResponse<StoreCategoryStats[]>> => {
  const url = `/api/stores/${STORE_ID}/stats/categories`;

  return client.get(url, httpConfig);
};
