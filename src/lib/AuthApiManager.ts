import jsCookie from 'js-cookie';
import { Method } from 'axios';
import { JOURNEY_BITES_COOKIE } from '@/constants';
import { ApiManager } from './ApiManager';

export abstract class AuthApiManager extends ApiManager {
  static fetchWithToken(method: Method, url: string) {
    const token = jsCookie.get(JOURNEY_BITES_COOKIE);
    if (!token) throw new Error('Authentication token not found');
  
    return this.apiInstance(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  static async getUser() {
    const res = await this.fetchWithToken('get', '/user');
    return res.data;
  }
}