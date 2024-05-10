import axios from 'axios';
import jsCookie from 'js-cookie';
import { JOURNEY_BITES_COOKIE } from '@/constants';

export abstract class AuthApiManager {
  static get token(): string | null {
    return jsCookie.get(JOURNEY_BITES_COOKIE) || null;
  }

  protected static get apiInstance() {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${AuthApiManager.token}`
      }
    });
  }

  static async getUser() {
    const res = await AuthApiManager.apiInstance.get('/user');
    return res.data;
  }
}