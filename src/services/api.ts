import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { NewProduct, Product, ProductList, Store, StoreCategoryStats } from '../types/store';

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

export const addProduct = (
  idStore: string,
  productData: NewProduct,
  httpConfig: AxiosRequestConfig<any> = {}
): Promise<AxiosResponse<string>> => {
  const url = `/api/stores/${idStore}/products/`;

  // store property needed for the request but api accepts anything as is using only the url idStore param
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

export const deleteProduct = (
  idStore: string,
  idProduct: string,
  httpConfig: AxiosRequestConfig<any> = {}
): Promise<AxiosResponse<string>> => {
  const url = `/api/stores/${idStore}/products/${idProduct}`;

  return client.delete(url, httpConfig);
};

/* stats */
export const getStoreStats = (
  idStore: string,
  httpConfig: AxiosRequestConfig<any> = {}
): Promise<AxiosResponse<StoreCategoryStats[]>> => {
  const url = `/api/stores/${idStore}/stats/categories`;

  return client.get(url, httpConfig);
};
