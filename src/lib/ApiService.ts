import axios, { type AxiosInstance, type AxiosRequestConfig, type Method } from 'axios';

const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
};

export class ApiService {
  protected axiosInstance: AxiosInstance;
  private authToken?: string;

  constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config || apiConfig);
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (this.authToken && config.headers) {
          config.headers.Authorization = `Bearer ${this.authToken}`;
        }
        return config;
      }
    );
  }

  public setAuthToken(token: string): void {
    this.authToken = token;
  }

  public clearAuthToken(): void {
    this.authToken = undefined;
  }

  public async fetchData<T>(method: Method, url: string, options?: AxiosRequestConfig): Promise<T> {
    const res = await this.axiosInstance<T>({
      method,
      url,
      ...options
    });
    return res.data;
  }
}
