import { AxiosResponse } from 'axios';

export type AxiosFunction<T> = (...args: any[]) => Promise<AxiosResponse<T>>;

export interface UseAxiosResponse<T> {
  data?: T;
  error?: string;
  isLoading: boolean;
  apiWrapper: (fetchMethod: AxiosFunction<T>) => void;
}
