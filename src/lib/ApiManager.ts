import { LoginResponse } from '@/types/apiResponse';
import axios from 'axios';
import jsCookie from 'js-cookie';
import { JOURNEY_BITES_COOKIE } from '@/constants';


export abstract class ApiManager {
   protected static get apiInstance() {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
    });
  }

  static async login({ email, password }: { email: string; password: string }) {
    const res = await ApiManager.apiInstance.post<LoginResponse>('/auth/login', {
      email,
      password
    });

    if(res.data.data) {
      jsCookie.set(JOURNEY_BITES_COOKIE, res.data.data.token);
    }
    return res.data;
  }

  static async register({ email, password }: { email: string; password: string }) {
    const res = await ApiManager.apiInstance.post('/auth/register', {
      email,
      password
    });
    return res.data;
  }
}