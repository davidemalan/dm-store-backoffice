import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { Product, ProductList, Store } from '../types/store';

import { client } from './axios';

/* store */
export const getAllStores = (httpConfig = {}): Promise<AxiosResponse<Store[]>> => {
  const url = `/api/stores`;

  return client.get(url, httpConfig);
};

export const getStoreById = (
  idStore: string,
  httpConfig: AxiosRequestConfig<any> = {}
): Promise<AxiosResponse<Store>> => {
  const url = `/api/stores/${idStore}`;

  return client.get(url, httpConfig);
};

/* products */
export const getProducts = (
  idStore: string,
  httpConfig: AxiosRequestConfig<any> = {}
): Promise<AxiosResponse<ProductList>> => {
  const url = `/api/stores/${idStore}/products`;

  return client.get(url, httpConfig);
};

export const getProductById = (
  idStore: string,
  idProduct: string,
  httpConfig: AxiosRequestConfig<any> = {}
): Promise<AxiosResponse<Product>> => {
  const url = `/api/stores/${idStore}/products/${idProduct}`;

  return client.get(url, httpConfig);
};
