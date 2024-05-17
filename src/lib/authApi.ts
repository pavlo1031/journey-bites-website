import jsCookie from 'js-cookie';
import { JOURNEY_BITES_COOKIE } from '@/constants';
import { ApiService } from './ApiService';
import type { AxiosRequestConfig, Method } from 'axios';

const apiService = new ApiService();

async function fetchWithToken<T>(method: Method, url: string, options?: AxiosRequestConfig): Promise<T> {
  const token = jsCookie.get(JOURNEY_BITES_COOKIE);
  if (!token) {
    throw new Error('Authorization token not found');
  }
  apiService.setAuthToken(token);
  return apiService.fetchData<T>(method, url, options);
}

export async function getUser() {
  // TODO: define user API response type
  const res = await fetchWithToken('get', '/user');
  return res;
}