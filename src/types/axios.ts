import { AxiosResponse } from 'axios';

export type AxiosFunction<T> = (...args: any[]) => Promise<AxiosResponse<T>>;

export interface UseAxiosResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  apiWrapper: (fetchMethod: AxiosFunction<T>) => void;
}
