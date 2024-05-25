import jsCookie from 'js-cookie';
import type { AxiosRequestConfig, Method } from 'axios';
import { JOURNEY_BITES_COOKIE } from '@/constants';
import { ApiService } from './ApiService';
import { UserResponse } from '@/types/apiResponse';

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
  const res = await fetchWithToken<UserResponse>('get', '/user');
  return res.data;
}